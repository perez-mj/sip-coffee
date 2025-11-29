<template>
  <v-expansion-panels v-model="panel" multiple>
    <v-expansion-panel
      v-for="(section, index) in sections"
      :key="section.title"
      :value="index < 2"
    >
      <v-expansion-panel-title>
        <v-icon :icon="section.icon" class="mr-2"></v-icon>
        {{ section.title }}
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <DrinkCard
          v-for="item in section.items"
          :key="item.name"
          :drink="item"
          class="mb-2"
        />
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup>
import { ref } from 'vue'
import DrinkCard from './DrinkCard.vue'

defineProps({
  sections: {
    type: Array,
    required: true
  }
})

const panel = ref([0, 1]) // First two sections open by default
</script>