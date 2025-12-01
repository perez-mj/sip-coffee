<template>
  <div class="menu-section" :class="{ 'featured-section': section.featured }">
    <!-- Section Header -->
    <div class="section-header mb-6" :ref="`header-${sectionIndex}`">
      <div class="d-flex align-center justify-space-between mb-2">
        <div class="d-flex align-center gap-3">
          <div class="section-icon-wrapper">
            <v-icon :icon="section.icon" size="28" class="section-icon"></v-icon>
          </div>
          <div>
            <h2 class="text-h4 font-weight-bold text-primary mb-1">{{ section.title }}</h2>
            <p v-if="section.subtitle" class="text-body-1 text-medium-emphasis">{{ section.subtitle }}</p>
          </div>
        </div>
        <div class="d-flex align-center gap-2">
          <v-chip 
            v-if="section.featured" 
            color="secondary" 
            class="font-weight-bold"
            size="small"
          >
            <v-icon icon="mdi-star" size="small" class="mr-1"></v-icon>
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
  margin-bottom: 64px;
  position: relative;
  scroll-margin-top: 100px; /* Helps with scroll positioning */
}

.featured-section {
  padding: 24px;
  background: linear-gradient(135deg, rgba(6, 72, 152, 0.02), rgba(235, 209, 115, 0.02));
  border-radius: 4px !important;
  border: 1px solid rgba(6, 72, 152, 0.1);
}

.section-header {
  position: sticky;
  top: 80px;
  background: white;
  z-index: 10;
  padding: 8px 0;
}

.section-icon-wrapper {
  background: #ebd173cc;
  padding: 12px;
  border-radius: 4px !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-icon {
  color: #064898;
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;
}

.compact-grid {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
}

.item-card {
  transition: transform 0.3s ease;
}

@media (max-width: 960px) {
  .items-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .section-header {
    position: relative;
    top: 0;
  }
  
  .featured-section {
    padding: 16px;
  }
}
</style>