<template>
  <div class="text-center mb-8">
    <h2 class="text-h3 font-weight-bold text-primary mb-4">{{ title }}</h2>
    <v-divider thickness="2" color="secondary" class="mx-auto" style="max-width: 100px;"></v-divider>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>