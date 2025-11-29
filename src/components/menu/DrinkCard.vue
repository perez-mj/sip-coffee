<template>
  <v-card variant="flat" class="pa-4 drink-card">
    <div class="d-flex justify-space-between align-start">
      <div class="flex-grow-1">
        <div class="d-flex align-center gap-2 mb-1">
          <h3 class="text-h6 font-weight-medium">{{ drink.name }}</h3>
          <v-icon v-if="drink.bestseller" color="secondary" size="small" class="ml-1">
            mdi-star
          </v-icon>
        </div>
        <p class="text-caption text-medium-emphasis mb-2">{{ drink.description }}</p>
      </div>
      <div class="text-right">
        <div class="text-h6 font-weight-bold text-primary">₱{{ drink.price }}</div>
        <v-icon v-if="drink.icon" :icon="drink.icon" size="small" class="text-medium-emphasis"></v-icon>
      </div>
    </div>
  </v-card>
</template>

<script setup>
defineProps({
  drink: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.drink-card {
  border-bottom: 1px solid rgba(0,0,0,0.1);
  transition: background-color 0.2s ease;
}

.drink-card:hover {
  background-color: rgba(6, 72, 152, 0.05);
}
</style>