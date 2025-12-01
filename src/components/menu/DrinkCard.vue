<!--  -->
<template>
  <v-card 
    class="drink-card pa-3" 
    variant="flat"
    :class="{'featured-drink': drink.featured}"
    @click="emit('select', drink)"
  >
    <div class="d-flex justify-space-between align-start">
      <div class="flex-grow-1 mr-2 mr-md-4">
        <!-- Header with name and badges -->
        <div class="d-flex align-center flex-wrap gap-1 gap-md-2 mb-1 mb-md-2">
          <h3 class="text-body-1 text-md-h6 font-weight-bold text-primary">{{ drink.name }}</h3>
          
          <!-- Badges -->
          <div v-if="drink.bestseller || drink.new || drink.seasonal" class="d-flex gap-1">
            <v-chip 
              v-if="drink.bestseller" 
              size="x-small" 
              color="secondary" 
              class="font-weight-bold"
            >
              <v-icon icon="mdi-star" size="x-small" class="mr-1"></v-icon>
              Best
            </v-chip>
            <v-chip 
              v-if="drink.new" 
              size="x-small" 
              color="primary" 
              class="font-weight-bold"
            >
              NEW
            </v-chip>
            <v-chip 
              v-if="drink.seasonal" 
              size="x-small" 
              color="green" 
              class="font-weight-bold"
            >
              <v-icon icon="mdi-leaf" size="x-small" class="mr-1"></v-icon>
              Sea
            </v-chip>
          </div>
        </div>

        <!-- Highlight -->
        <div v-if="drink.highlight" class="mb-1 mb-md-2">
          <span class="text-caption font-weight-bold text-secondary">{{ drink.highlight }}</span>
        </div>

        <!-- Description -->
        <p class="text-caption text-md-body-2 text-medium-emphasis mb-2 mb-md-3">{{ drink.description }}</p>

        <!-- Icon and price (mobile bottom row) -->
        <div class="d-flex align-center justify-space-between d-md-none">
          <v-icon 
            v-if="drink.icon" 
            :icon="drink.icon" 
            size="x-small" 
            class="text-primary"
          ></v-icon>
          <div class="text-right">
            <div class="text-h6 font-weight-bold text-primary price-display">
              ₱{{ drink.price.toFixed(2) }}
            </div>
            <div class="text-caption text-medium-emphasis">
              <v-icon icon="mdi-clock-outline" size="x-small" class="mr-1"></v-icon>
              5-8 min
            </div>
          </div>
        </div>

        <!-- Icon only (desktop) -->
        <v-icon 
          v-if="drink.icon" 
          :icon="drink.icon" 
          size="small" 
          class="text-primary d-none d-md-inline-block"
        ></v-icon>
      </div>

      <!-- Price (desktop) -->
      <div class="text-right d-none d-md-block">
        <div class="text-h5 font-weight-bold text-primary mb-1 price-display">
          ₱{{ drink.price.toFixed(2) }}
        </div>
        <div class="text-caption text-medium-emphasis">
          <v-icon icon="mdi-clock-outline" size="x-small" class="mr-1"></v-icon>
          5-8 min
        </div>
      </div>
    </div>
  </v-card>
</template>

<script setup>
const emit = defineEmits(['select'])

defineProps({
  drink: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.drink-card {
  border-bottom: 2px solid rgba(6, 72, 152, 0.1);
  border-radius: 4px !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.drink-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(6, 72, 152, 0.15);
  border-color: rgba(235, 209, 115, 0.3);
}

.drink-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #064898, #ebd173);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.drink-card:hover::before {
  transform: scaleX(1);
}

.featured-drink {
  background: linear-gradient(135deg, rgba(6, 72, 152, 0.03), rgba(235, 209, 115, 0.03));
  border: 2px solid rgba(235, 209, 115, 0.2);
  border-radius: 4px !important;
}

.price-display {
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.5px;
}

/* Touch device optimizations */
@media (hover: none) and (pointer: coarse) {
  .drink-card:hover {
    transform: none;
  }
  
  .drink-card::before {
    display: none;
  }
  
  .drink-card:active {
    background-color: rgba(6, 72, 152, 0.05);
  }
}

/* Small mobile adjustments */
@media (max-width: 400px) {
  .drink-card {
    padding: 12px;
  }
  
  .v-chip {
    font-size: 0.6rem;
    height: 20px;
  }
}

/* Better text wrapping for long names */
h3.text-body-1 {
  word-break: break-word;
  hyphens: auto;
}
</style>