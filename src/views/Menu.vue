<template>
  <v-main>
    <!-- Hero Header -->
    <div class="menu-hero">
      <!-- Add filter to menu hero -->
      <div class="hero-filter"></div>
      <v-container>
        <div class="hero-content">
          <h1 class="text-h1 font-weight-bold text-white mb-4">
            Our Menu
          </h1>
          <p class="text-h5 text-white mb-6">
            Where tradition meets innovation in every cup
          </p>
          <div class="hero-stats">
            <v-chip class="mr-2" color="white" variant="flat">
              <v-icon icon="mdi-coffee" class="mr-2" color="primary"></v-icon>
              {{ totalDrinks }} Unique Drinks
            </v-chip>
            <v-chip class="mr-2" color="white" variant="flat">
              <v-icon icon="mdi-star" class="mr-2" color="secondary"></v-icon>
              {{ bestsellerCount }} Bestsellers
            </v-chip>
            <v-chip color="white" variant="flat">
              <v-icon icon="mdi-clock" class="mr-2" color="primary"></v-icon>
              Fresh Daily
            </v-chip>
          </div>
        </div>
      </v-container>
    </div>

    <!-- Main Content -->
    <v-container class="mt-8">
      <v-row>
        <!-- Menu Content -->
        <v-col cols="12" lg="9">
          <!-- Search and Filter -->
          <v-card class="mb-8 pa-4" variant="flat">
            <v-row align="center">
              <v-col cols="12" md="8">
                <v-text-field
                  v-model="search"
                  placeholder="Search for drinks or ingredients..."
                  prepend-inner-icon="mdi-magnify"
                  variant="outlined"
                  density="comfortable"
                  hide-details
                  clearable
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <div class="d-flex gap-2">
                  <v-btn
                    variant="outlined"
                    color="primary"
                    @click="showBestsellers = !showBestsellers"
                    :class="{ 'active-filter': showBestsellers }"
                  >
                    <v-icon icon="mdi-star" class="mr-1"></v-icon>
                    Bestsellers
                  </v-btn>
                  <v-btn
                    variant="outlined"
                    color="primary"
                    @click="showNewItems = !showNewItems"
                    :class="{ 'active-filter': showNewItems }"
                  >
                    <v-icon icon="mdi-new-box" class="mr-1"></v-icon>
                    New
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>

          <!-- Menu Sections -->
          <div ref="sectionsContainer" class="menu-sections-container">
            <div 
              v-for="(section, index) in filteredSections" 
              :key="section.title"
              :ref="el => sectionRefs[index] = el"
              class="section-observer"
              :data-section-index="index"
            >
              <MenuSection
                :section="section"
                :section-index="index"
                @scroll-to-section="scrollToSection"
              />
            </div>
          </div>

          <!-- Empty State -->
          <v-card
            v-if="filteredSections.length === 0"
            class="text-center pa-12"
            variant="flat"
          >
            <v-icon icon="mdi-coffee-off" size="64" color="primary" class="mb-4"></v-icon>
            <h3 class="text-h5 font-weight-bold text-primary mb-2">No items found</h3>
            <p class="text-body-1 text-medium-emphasis">Try adjusting your search or filters</p>
            <v-btn color="primary" class="mt-4" @click="clearFilters">
              Clear Filters
            </v-btn>
          </v-card>
        </v-col>

        <!-- Sidebar -->
        <v-col cols="12" lg="3">
          <MenuSidebar
            :sections="filteredSections"
            :active-section="activeSection"
            :popular-items="popularItems"
            @scroll-to-section="scrollToSection"
          />
        </v-col>
      </v-row>
    </v-container>

    <!-- Floating Action Button -->
    <v-fab
      v-model="showFab"
      location="bottom right"
      size="large"
      color="primary"
      class="menu-fab"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          icon="mdi-arrow-up"
          color="primary"
          size="large"
          @click="scrollToTop"
        ></v-btn>
      </template>
    </v-fab>
  </v-main>
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

// Watch for filter changes to reset active section
watch([search, showBestsellers, showNewItems], () => {
  // Reset active section when filters change
  activeSection.value = 0
  
  // Re-initialize observer after DOM updates
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
    sectionRefs.value[index].scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
    // Temporarily set active section, observer will update it correctly
    activeSection.value = index
    
    // Add a small delay to let scroll complete before observer takes over
    setTimeout(() => {
      setupIntersectionObserver()
    }, 300)
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

// Intersection Observer for active section detection
const setupIntersectionObserver = () => {
  if (observer) {
    observer.disconnect()
  }

  const options = {
    root: null, // viewport
    rootMargin: '-100px 0px -70% 0px', // Adjust these values to control when section becomes active
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

  // Observe all section elements
  sectionRefs.value.forEach((sectionEl, index) => {
    if (sectionEl) {
      sectionEl.dataset.sectionIndex = index
      observer.observe(sectionEl)
    }
  })
}

const handleScroll = () => {
  // Show/hide FAB
  showFab.value = window.scrollY > 500
}

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Setup observer after DOM is fully rendered
  nextTick(() => {
    setupIntersectionObserver()
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.menu-hero {
  background: linear-gradient(135deg, #064898 0%, #0a5cbf 100%);
  padding: 80px 0 40px;
  position: relative;
  overflow: hidden;
}

.menu-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  opacity: 0.1;
}

/* Added filter for menu hero */
.menu-hero .hero-filter {
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
}

.hero-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hero-stats .v-chip {
  border-radius: 2px !important;
}

.active-filter {
  background-color: rgba(6, 72, 152, 0.1);
  border-color: #064898;
}

.menu-fab {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 100;
}

/* Updated card styles for less rounding */
.menu-fab .v-btn {
  border-radius: 2px !important;
}

.v-card {
  border-radius: 4px !important;
}

.v-text-field .v-field {
  border-radius: 2px !important;
}

.v-btn {
  border-radius: 2px !important;
}

/* Section observer styling */
.section-observer {
  margin-bottom: 64px;
  position: relative;
}

.menu-sections-container {
  position: relative;
}

@media (max-width: 1264px) {
  .hero-content h1 {
    font-size: 2.5rem !important;
  }
  
  .hero-content p {
    font-size: 1.25rem !important;
  }
}

@media (max-width: 960px) {
  .menu-hero {
    padding: 60px 0 30px;
  }
  
  .hero-content h1 {
    font-size: 2rem !important;
  }
}

@media (max-width: 600px) {
  .hero-stats {
    justify-content: center;
  }
}
</style>