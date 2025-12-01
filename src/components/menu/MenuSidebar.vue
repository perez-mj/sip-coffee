<template>
  <v-navigation-drawer
    location="right"
    width="300"
    permanent
    floating
    class="menu-sidebar"
  >
    <v-card class="pa-4 mb-4" color="primary" variant="flat">
      <div class="text-center">
        <v-icon icon="mdi-coffee" size="48" color="white" class="mb-3"></v-icon>
        <h3 class="text-h5 font-weight-bold text-white mb-2">Menu Guide</h3>
        <p class="text-caption text-white">Navigate our curated selections</p>
      </div>
    </v-card>

    <!-- Quick Navigation -->
    <div class="pa-4">
      <h4 class="text-h6 font-weight-bold text-primary mb-3">Quick Jump</h4>
      <v-list density="compact" class="section-nav" v-if="sections.length > 0">
        <v-list-item
          v-for="(section, index) in sections"
          :key="section.title"
          @click="scrollToSection(index)"
          :class="{ 'active-section': activeSection === index }"
          class="section-nav-item"
        >
          <template v-slot:prepend>
            <v-icon :icon="section.icon" size="small"></v-icon>
          </template>
          <v-list-item-title class="text-body-2">
            {{ section.title }}
            <span v-if="section.featured" class="featured-dot"></span>
          </v-list-item-title>
          <template v-slot:append>
            <v-chip v-if="section.featured" size="x-small" color="secondary" class="font-weight-bold">
              <v-icon icon="mdi-star" size="x-small"></v-icon>
            </v-chip>
            <v-chip v-if="section.items.length" size="x-small" color="primary" class="font-weight-bold">
              {{ section.items.length }}
            </v-chip>
          </template>
        </v-list-item>
      </v-list>
      <div v-else class="text-center pa-4">
        <v-icon icon="mdi-filter-off" size="48" color="primary" class="mb-3"></v-icon>
        <p class="text-body-2 text-medium-emphasis">No sections match your filters</p>
      </div>
    </div>

    <!-- Popular Items -->
    <div class="pa-4 mt-4" v-if="sections.length > 0">
      <h4 class="text-h6 font-weight-bold text-primary mb-3">
        <v-icon icon="mdi-fire" size="small" class="mr-2"></v-icon>
        Most Popular
      </h4>
      <v-chip-group column class="popular-chips">
        <v-chip
          v-for="item in popularItems"
          :key="item"
          size="small"
          color="secondary"
          class="font-weight-bold"
        >
          {{ item }}
        </v-chip>
      </v-chip-group>
    </div>

    <!-- Order Info -->
    <div class="pa-4 mt-4">
      <v-card variant="outlined" class="pa-3">
        <div class="d-flex align-center mb-2">
          <v-icon icon="mdi-clock-outline" color="primary" class="mr-2"></v-icon>
          <span class="text-body-2 font-weight-bold">Average Prep Time</span>
        </div>
        <p class="text-caption text-medium-emphasis">5-10 minutes for drinks<br>10-15 minutes for food</p>
        
        <v-divider class="my-3"></v-divider>
        
        <div class="d-flex align-center mb-2">
          <v-icon icon="mdi-information" color="primary" class="mr-2"></v-icon>
          <span class="text-body-2 font-weight-bold">Note</span>
        </div>
        <p class="text-caption text-medium-emphasis">All drinks can be customized with milk alternatives</p>
      </v-card>
    </div>
  </v-navigation-drawer>
</template>

<script setup>
const props = defineProps({
  sections: {
    type: Array,
    required: true
  },
  activeSection: {
    type: Number,
    default: 0
  },
  popularItems: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['scroll-to-section'])

const scrollToSection = (index) => {
  emit('scroll-to-section', index)
}
</script>

<style scoped>
.menu-sidebar {
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  height: calc(100vh - 64px) !important;
  top: 64px !important;
  position: fixed !important;
  right: 0;
}

.section-nav-item {
  border-radius: 2px !important;
  margin-bottom: 4px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.section-nav-item:hover {
  background-color: rgba(6, 72, 152, 0.05);
  transform: translateX(-2px);
}

.section-nav-item.active-section {
  background-color: rgba(6, 72, 152, 0.1);
  border-left: 2px solid #064898;
  font-weight: bold;
}

.featured-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: #ebd173;
  border-radius: 1px !important;
  margin-left: 8px;
  vertical-align: middle;
}

.popular-chips {
  gap: 6px;
}

.popular-chips .v-chip {
  cursor: pointer;
  transition: transform 0.2s ease;
  border-radius: 2px !important;
}

.popular-chips .v-chip:hover {
  transform: scale(1.02);
}

.menu-sidebar .v-card {
  border-radius: 4px !important;
}

@media (max-width: 1264px) {
  .menu-sidebar {
    display: none;
  }
}
</style>