<template>
  <div class="menu-page">
    <!-- Hero Header -->
    <div class="menu-hero">
      <div class="hero-filter"></div>
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="menu-hero-title">Our Menu</h1>
          <p class="menu-hero-subtitle">Where tradition meets innovation in every cup</p>
          <div class="hero-stats">
            <span class="stat-chip">
              <v-icon icon="mdi-coffee" size="small" class="mr-1" color="primary"></v-icon>
              {{ totalDrinks }} Drinks
            </span>
            <span class="stat-chip">
              <v-icon icon="mdi-star" size="small" class="mr-1" color="secondary"></v-icon>
              {{ bestsellerCount }} Bestsellers
            </span>
            <span class="stat-chip">
              <v-icon icon="mdi-clock" size="small" class="mr-1" color="primary"></v-icon>
              Fresh Daily
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div class="mobile-nav-container" v-if="!isDesktop">
      <div class="mobile-nav">
        <h4>Menu Sections</h4>
        <div class="mobile-chips">
          <button
            v-for="(section, index) in filteredSections"
            :key="section.title"
            @click="scrollToSection(index)"
            :class="{ 'active': activeSection === index }"
            class="mobile-chip"
          >
            <v-icon :icon="section.icon" size="x-small" class="mr-1"></v-icon>
            {{ getSectionShortName(section.title) }}
          </button>
        </div>
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="main-content-area">
      <!-- Desktop Sidebar -->
      <div class="desktop-sidebar-container" v-if="isDesktop">
        <MenuSidebar
          :sections="filteredSections"
          :active-section="activeSection"
          :popular-items="popularItems"
          @scroll-to-section="scrollToSection"
        />
      </div>

      <!-- Main Content -->
      <div class="main-content-wrapper">
        <!-- Search and Filter -->
        <div class="search-filter-container">
          <div class="search-wrapper">
            <v-text-field
              v-model="search"
              placeholder="Search drinks..."
              prepend-inner-icon="mdi-magnify"
              variant="outlined"
              density="comfortable"
              hide-details
              clearable
              class="search-field"
            ></v-text-field>
          </div>
          <div class="filter-buttons">
            <v-btn
              variant="outlined"
              color="primary"
              size="small"
              @click="showBestsellers = !showBestsellers"
              :class="{ 'active-filter': showBestsellers }"
            >
              <v-icon icon="mdi-star" size="small" class="mr-1"></v-icon>
              Bestsellers
            </v-btn>
            <v-btn
              variant="outlined"
              color="primary"
              size="small"
              @click="showNewItems = !showNewItems"
              :class="{ 'active-filter': showNewItems }"
            >
              <v-icon icon="mdi-new-box" size="small" class="mr-1"></v-icon>
              New
            </v-btn>
          </div>
        </div>

        <!-- Menu Sections -->
        <div ref="sectionsContainer" class="sections-container">
          <div 
            v-for="(section, index) in filteredSections" 
            :key="section.title"
            :ref="el => sectionRefs[index] = el"
            class="section-wrapper"
            :data-section-index="index"
          >
            <MenuSection
              :section="section"
              :section-index="index"
            />
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredSections.length === 0" class="empty-state-container">
          <v-icon icon="mdi-coffee-off" size="64" color="primary" class="mb-4"></v-icon>
          <h3>No items found</h3>
          <p>Try adjusting your search or filters</p>
          <v-btn color="primary" class="mt-4" size="large" @click="clearFilters">
            Clear Filters
          </v-btn>
        </div>

        <!-- Mobile Back to Top -->
        <button
          v-if="showFab && !isDesktop"
          @click="scrollToTop"
          class="mobile-back-top-btn"
        >
          <v-icon icon="mdi-arrow-up" class="mr-2"></v-icon>
          Back to Top
        </button>
      </div>
    </div>

    <!-- Desktop Floating Button -->
    <button
      v-if="showFab && isDesktop"
      @click="scrollToTop"
      class="desktop-fab-btn"
    >
      <v-icon icon="mdi-arrow-up" size="24"></v-icon>
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { menuSections, popularItems } from '@/data/menu.js'
import MenuSection from '@/components/menu/MenuSection.vue'
import MenuSidebar from '@/components/menu/MenuSidebar.vue'

// Refs
const search = ref('')
const showBestsellers = ref(false)
const showNewItems = ref(false)
const showFab = ref(false)
const activeSection = ref(0)
const sectionsContainer = ref(null)
const sectionRefs = ref([])
let observer = null
const isDesktop = ref(window.innerWidth >= 960)

// Computed
const totalDrinks = computed(() => {
  return menuSections.reduce((total, section) => total + section.items.length, 0)
})

const bestsellerCount = computed(() => {
  return menuSections.reduce((total, section) => {
    return total + section.items.filter(item => item.bestseller).length
  }, 0)
})

const filteredSections = computed(() => {
  if (!search.value && !showBestsellers.value && !showNewItems.value) {
    return menuSections
  }

  return menuSections
    .map(section => {
      const filteredItems = section.items.filter(item => {
        const matchesSearch = !search.value || 
          item.name.toLowerCase().includes(search.value.toLowerCase()) ||
          item.description.toLowerCase().includes(search.value.toLowerCase())
        
        const matchesBestseller = !showBestsellers.value || item.bestseller
        const matchesNew = !showNewItems.value || item.new

        return matchesSearch && matchesBestseller && matchesNew
      })

      if (filteredItems.length > 0) {
        return { ...section, items: filteredItems }
      }
      return null
    })
    .filter(section => section !== null)
})

// Helper function for mobile section names
const getSectionShortName = (title) => {
  const cleanTitle = title
    .replace('\u2728 ', '')
    .replace('\u26a1 ', '')
    .replace('\U0001f9ca ', '')
    .replace('\U0001f366 ', '')
    .replace('\U0001fae7 ', '')
    .replace('\u2615 ', '')
    .replace('\U0001f96a ', '')
    .replace('\u2795 ', '')
    .replace('\U0001f95b ', '')
  
  const shortNames = {
    'CRAFTED SIPS': 'Crafted',
    'ICE BLENDED DRINKS - COFFEE BASED': 'Coffee',
    'ICE BLENDED DRINKS - CREAM BASED': 'Cream',
    'SIP AND FIZZ': 'Fizz',
    'REGULAR SIPS': 'Regular',
    'ADD ONS': 'Add-ons',
    'MILK OPTION': 'Milk'
  }
  
  return shortNames[cleanTitle] || cleanTitle.split(' - ')[0] || cleanTitle
}

// Watch for filter changes
watch([search, showBestsellers, showNewItems], () => {
  activeSection.value = 0
  nextTick(() => {
    if (observer) {
      observer.disconnect()
    }
    setupIntersectionObserver()
  })
})

// Methods
const scrollToSection = (index) => {
  if (sectionRefs.value[index]) {
    const offset = isDesktop.value ? 100 : 80
    const elementTop = sectionRefs.value[index].offsetTop - offset
    
    window.scrollTo({
      top: elementTop,
      behavior: 'smooth'
    })
    
    activeSection.value = index
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  activeSection.value = 0
}

const clearFilters = () => {
  search.value = ''
  showBestsellers.value = false
  showNewItems.value = false
}

// Intersection Observer
const setupIntersectionObserver = () => {
  if (observer) {
    observer.disconnect()
  }

  const options = {
    root: null,
    rootMargin: '-80px 0px -70% 0px',
    threshold: 0
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionIndex = parseInt(entry.target.dataset.sectionIndex)
        if (!isNaN(sectionIndex)) {
          activeSection.value = sectionIndex
        }
      }
    })
  }, options)

  sectionRefs.value.forEach((sectionEl, index) => {
    if (sectionEl) {
      sectionEl.dataset.sectionIndex = index
      observer.observe(sectionEl)
    }
  })
}

const handleScroll = () => {
  showFab.value = window.scrollY > 500
}

const handleResize = () => {
  isDesktop.value = window.innerWidth >= 960
}

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
  nextTick(() => {
    setupIntersectionObserver()
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
/* Reset everything for menu page */
.menu-page {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  position: relative;
}

/* Hero Section */
.menu-hero {
  background: linear-gradient(135deg, #064898 0%, #0a5cbf 100%);
  padding: 40px 0 20px;
  position: relative;
  overflow: hidden;
}

.hero-container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 16px;
}

.hero-filter {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg, 
    rgba(235, 209, 115, 0.2) 0%, 
    rgba(6, 72, 152, 0.4) 50%, 
    rgba(0, 0, 0, 0.5) 100%
  );
  z-index: 1;
  mix-blend-mode: multiply;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.menu-hero-title {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 16px;
  line-height: 1.2;
}

.menu-hero-subtitle {
  font-size: 1.125rem;
  color: white;
  margin-bottom: 24px;
}

.hero-stats {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.stat-chip {
  background: white;
  padding: 6px 12px;
  border-radius: 2px;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  color: #064898;
}

/* Mobile Navigation */
.mobile-nav-container {
  width: 100%;
  position: sticky;
  top: 64px;
  z-index: 9;
  background: white;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

.mobile-nav {
  padding: 12px 16px;
}

.mobile-nav h4 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #064898;
  margin-bottom: 8px;
}

.mobile-chips {
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 4px;
  -webkit-overflow-scrolling: touch;
}

.mobile-chips::-webkit-scrollbar {
  display: none;
}

.mobile-chip {
  flex-shrink: 0;
  padding: 6px 12px;
  border: 1px solid #064898;
  border-radius: 2px;
  background: white;
  color: #064898;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
}

.mobile-chip.active {
  background: #064898;
  color: white;
}

/* Main Content Area */
.main-content-area {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  gap: 24px;
  padding: 0 16px;
}

/* Desktop Sidebar */
.desktop-sidebar-container {
  width: 300px;
  flex-shrink: 0;
  display: none;
}

/* Main Content Wrapper */
.main-content-wrapper {
  flex: 1;
  min-width: 0;
  width: 100%;
}

/* Search and Filter */
.search-filter-container {
  background: white;
  padding: 16px;
  margin: 16px 0 24px;
  border-radius: 4px;
}

.search-wrapper {
  margin-bottom: 16px;
}

.search-field :deep(.v-field) {
  border-radius: 2px !important;
}

.filter-buttons {
  display: flex;
  gap: 8px;
}

.active-filter {
  background-color: rgba(6, 72, 152, 0.1) !important;
  border-color: #064898 !important;
}

/* Sections */
.sections-container {
  width: 100%;
}

.section-wrapper {
  margin-bottom: 48px;
}

/* Empty State */
.empty-state-container {
  text-align: center;
  padding: 48px 16px;
  background: white;
  border-radius: 4px;
  margin: 24px 0;
}

.empty-state-container h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #064898;
  margin-bottom: 8px;
}

.empty-state-container p {
  color: #666;
  margin-bottom: 16px;
}

/* Back to Top Buttons */
.mobile-back-top-btn {
  position: fixed;
  bottom: 16px;
  left: 16px;
  right: 16px;
  background: #064898;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 2px;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.desktop-fab-btn {
  position: fixed;
  bottom: 32px;
  right: 32px;
  background: #064898;
  color: white;
  border: none;
  width: 56px;
  height: 56px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

/* Responsive Design */
@media (max-width: 599px) {
  .hero-container,
  .main-content-area {
    padding: 0 16px;
  }
  
  .mobile-nav-container {
    display: block;
  }
  
  .desktop-sidebar-container {
    display: none;
  }
  
  .main-content-wrapper {
    width: 100%;
  }
  
  .menu-hero-title {
    font-size: 1.75rem;
  }
  
  .menu-hero-subtitle {
    font-size: 1rem;
  }
  
  .main-content-area {
    flex-direction: column;
  }
}

@media (min-width: 600px) and (max-width: 959px) {
  .hero-container,
  .main-content-area {
    padding: 0 24px;
  }
  
  .menu-hero {
    padding: 60px 0 30px;
  }
  
  .menu-hero-title {
    font-size: 2.5rem;
  }
  
  .menu-hero-subtitle {
    font-size: 1.25rem;
  }
  
  .stat-chip {
    font-size: 1rem;
    padding: 8px 16px;
  }
  
  .mobile-nav-container {
    display: none;
  }
  
  .desktop-sidebar-container {
    display: none;
  }
}

@media (min-width: 960px) {
  .hero-container,
  .main-content-area {
    padding: 0 32px;
  }
  
  .menu-hero {
    padding: 80px 0 40px;
  }
  
  .menu-hero-title {
    font-size: 3rem;
  }
  
  .menu-hero-subtitle {
    font-size: 1.5rem;
  }
  
  .mobile-nav-container {
    display: none;
  }
  
  .desktop-sidebar-container {
    display: block;
    position: sticky;
    top: 80px;
    height: calc(100vh - 80px);
    overflow-y: auto;
    align-self: flex-start;
  }
  
  .main-content-area {
    position: relative;
  }
}

@media (min-width: 1280px) {
  .hero-container,
  .main-content-area {
    padding: 0 48px;
  }
}
</style>