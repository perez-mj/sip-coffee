<template>
  <v-card 
    class="drink-card pa-4" 
    variant="flat"
    :class="{'featured-drink': drink.featured}"
    @click="emit('select', drink)"
  >
    <div class="d-flex justify-space-between align-start">
      <div class="flex-grow-1 mr-4">
        <!-- Header with name and badges -->
        <div class="d-flex align-center flex-wrap gap-2 mb-2">
          <h3 class="text-h6 font-weight-bold text-primary">{{ drink.name }}</h3>
          
          <!-- Badges -->
          <div v-if="drink.bestseller || drink.new || drink.seasonal" class="d-flex gap-1">
            <v-chip 
              v-if="drink.bestseller" 
              size="x-small" 
              color="secondary" 
              class="font-weight-bold"
            >
              <v-icon icon="mdi-star" size="x-small" class="mr-1"></v-icon>
              Bestseller
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
              Seasonal
            </v-chip>
          </div>
        </div>

        <!-- Highlight -->
        <div v-if="drink.highlight" class="mb-2">
          <span class="text-caption font-weight-bold text-secondary">{{ drink.highlight }}</span>
        </div>

        <!-- Description -->
        <p class="text-body-2 text-medium-emphasis mb-3">{{ drink.description }}</p>

        <!-- Icon -->
        <v-icon 
          v-if="drink.icon" 
          :icon="drink.icon" 
          size="small" 
          class="text-primary"
        ></v-icon>
      </div>

      <!-- Price -->
      <div class="text-right">
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
  border-radius: 12px !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.drink-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(6, 72, 152, 0.15);
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
}

.price-display {
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.5px;
}
</style>