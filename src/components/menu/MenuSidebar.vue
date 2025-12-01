<template>
  <div class="menu-sidebar">
    <div class="sidebar-card">
      <div class="text-center">
        <v-icon icon="mdi-coffee" size="48" color="white" class="mb-3"></v-icon>
        <h3 class="sidebar-title">Menu Guide</h3>
        <p class="sidebar-subtitle">Navigate our curated selections</p>
      </div>
    </div>

    <!-- Quick Navigation -->
    <div class="sidebar-section">
      <h4>Quick Jump</h4>
      <div class="section-nav" v-if="sections.length > 0">
        <button
          v-for="(section, index) in sections"
          :key="section.title"
          @click="$emit('scroll-to-section', index)"
          :class="{ 'active': activeSection === index }"
          class="nav-item"
        >
          <v-icon :icon="section.icon" size="small" class="nav-icon"></v-icon>
          <span class="nav-text">
            {{ section.title }}
          </span>
          <span v-if="section.featured" class="featured-indicator"></span>
          <span v-if="section.items.length" class="item-count">
            {{ section.items.length }}
          </span>
        </button>
      </div>
      <div v-else class="empty-state">
        <v-icon icon="mdi-filter-off" size="48" color="primary" class="mb-3"></v-icon>
        <p>No sections match your filters</p>
      </div>
    </div>

    <!-- Popular Items -->
    <div class="sidebar-section" v-if="sections.length > 0">
      <h4>
        <v-icon icon="mdi-fire" size="small" class="mr-2"></v-icon>
        Most Popular
      </h4>
      <div class="popular-items">
        <span
          v-for="item in popularItems"
          :key="item"
          class="popular-item"
        >
          {{ item }}
        </span>
      </div>
    </div>

    <!-- Order Info -->
    <div class="sidebar-section">
      <div class="info-card">
        <div class="info-item">
          <v-icon icon="mdi-clock-outline" color="primary" class="mr-2"></v-icon>
          <span class="info-label">Average Prep Time</span>
        </div>
        <p class="info-text">5-10 minutes for drinks<br>10-15 minutes for food</p>
        
        <div class="divider"></div>
        
        <div class="info-item">
          <v-icon icon="mdi-information" color="primary" class="mr-2"></v-icon>
          <span class="info-label">Note</span>
        </div>
        <p class="info-text">All drinks can be customized with milk alternatives</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
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

defineEmits(['scroll-to-section'])
</script>

<style scoped>
.menu-sidebar {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding-right: 8px;
}

.sidebar-card {
  background: #064898;
  padding: 24px;
  border-radius: 4px;
  margin-bottom: 16px;
}

.sidebar-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 8px;
}

.sidebar-subtitle {
  font-size: 0.875rem;
  color: white;
  opacity: 0.9;
}

.sidebar-section {
  margin-bottom: 24px;
}

.sidebar-section h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #064898;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
}

/* Navigation */
.section-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 2px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  text-align: left;
  width: 100%;
}

.nav-item:hover {
  background: rgba(6, 72, 152, 0.05);
  transform: translateX(-4px);
}

.nav-item.active {
  background: rgba(6, 72, 152, 0.1);
  border-left: 2px solid #064898;
  font-weight: 600;
}

.nav-icon {
  margin-right: 12px;
  color: #064898;
  flex-shrink: 0;
}

.nav-text {
  font-size: 0.875rem;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.featured-indicator {
  width: 6px;
  height: 6px;
  background: #ebd173;
  border-radius: 1px;
  margin-left: 8px;
  flex-shrink: 0;
}

.item-count {
  background: #064898;
  color: white;
  font-size: 0.75rem;
  padding: 2px 6px;
  border-radius: 2px;
  margin-left: 8px;
  flex-shrink: 0;
}

/* Popular Items */
.popular-items {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.popular-item {
  background: #ebd173;
  color: #064898;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 2px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.popular-item:hover {
  transform: scale(1.05);
}

/* Info Card */
.info-card {
  background: white;
  border: 1px solid rgba(0,0,0,0.1);
  padding: 16px;
  border-radius: 4px;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.info-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #064898;
}

.info-text {
  font-size: 0.75rem;
  color: #666;
  line-height: 1.4;
}

.divider {
  height: 1px;
  background: rgba(0,0,0,0.1);
  margin: 12px 0;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 24px 16px;
}

.empty-state p {
  font-size: 0.875rem;
  color: #666;
}

/* Scrollbar */
.menu-sidebar::-webkit-scrollbar {
  width: 4px;
}

.menu-sidebar::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 2px;
}

.menu-sidebar::-webkit-scrollbar-thumb {
  background: #064898;
  border-radius: 2px;
}
</style>