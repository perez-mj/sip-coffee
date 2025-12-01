<!-- src/components/menu/MenuSection.vue -->
<template>
  <div class="menu-section" :class="{ 'featured-section': section.featured }">
    <!-- Section Header -->
    <div class="section-header mb-4 mb-md-6">
      <div class="d-flex align-center justify-space-between mb-2 flex-wrap gap-2">
        <div class="d-flex align-center gap-2 gap-md-3">
          <div class="section-icon-wrapper">
            <v-icon :icon="section.icon" size="20" size-md="28" class="section-icon"></v-icon>
          </div>
          <div>
            <h2 class="text-h5 text-md-h4 font-weight-bold text-primary mb-1">{{ section.title }}</h2>
            <p v-if="section.subtitle" class="text-caption text-md-body-1 text-medium-emphasis">{{ section.subtitle }}</p>
          </div>
        </div>
        <div class="d-flex align-center gap-1 gap-md-2">
          <v-chip 
            v-if="section.featured" 
            color="secondary" 
            class="font-weight-bold"
            size="x-small"
            size-md="small"
          >
            <v-icon icon="mdi-star" size="x-small" size-md="small" class="mr-1"></v-icon>
            Featured
          </v-chip>
          <span class="text-caption text-medium-emphasis">
            {{ section.items.length }} items
          </span>
        </div>
      </div>
      <v-divider thickness="2"></v-divider>
    </div>

    <!-- Items Grid -->
    <div class="items-grid" :class="{ 'compact-grid': section.compact }">
      <DrinkCard
        v-for="(item, itemIndex) in section.items"
        :key="item.name"
        :drink="item"
        class="item-card"
        @select="handleDrinkSelect(item)"
      />
    </div>
  </div>
</template>

<script setup>
import DrinkCard from './DrinkCard.vue'

const props = defineProps({
  section: {
    type: Object,
    required: true
  },
  sectionIndex: {
    type: Number,
    required: true
  }
})

const handleDrinkSelect = (drink) => {
  console.log('Selected drink:', drink)
}
</script>

<style scoped>
.menu-section {
  margin-bottom: 48px;
  position: relative;
  scroll-margin-top: 80px;
}

.featured-section {
  padding: 16px;
  background: linear-gradient(135deg, rgba(6, 72, 152, 0.02), rgba(235, 209, 115, 0.02));
  border-radius: 4px !important;
  border: 1px solid rgba(6, 72, 152, 0.1);
}

.section-header {
  position: sticky;
  top: 64px;
  background: white;
  z-index: 10;
  padding: 8px 0;
}

.section-icon-wrapper {
  background: linear-gradient(135deg, #064898, rgba(235, 209, 115, 0.8));
  padding: 8px;
  border-radius: 4px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  flex-shrink: 0;
}

.section-icon {
  color: white;
}

/* Mobile-first grid */
.items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

.compact-grid {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
}

.item-card {
  transition: transform 0.3s ease;
  width: 100%;
}

/* Very small screens */
@media (max-width: 400px) {
  .items-grid {
    grid-template-columns: 1fr;
  }
  
  .compact-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Small tablets */
@media (min-width: 600px) {
  .section-icon-wrapper {
    padding: 10px;
    min-width: 44px;
    height: 44px;
  }
  
  .items-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .compact-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
  
  .featured-section {
    padding: 20px;
  }
}

/* Desktop */
@media (min-width: 960px) {
  .menu-section {
    margin-bottom: 64px;
  }
  
  .section-header {
    top: 80px;
  }
  
  .section-icon-wrapper {
    padding: 12px;
    min-width: 48px;
    height: 48px;
  }
  
  .items-grid {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 24px;
  }
  
  .compact-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }
  
  .featured-section {
    padding: 24px;
  }
}

/* Large desktop */
@media (min-width: 1280px) {
  .items-grid {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
}

/* Touch device optimizations */
@media (hover: none) and (pointer: coarse) {
  .section-header {
    position: relative;
    top: 0;
  }
  
  .menu-section {
    scroll-margin-top: 0;
  }
}
</style>