<template>
  <v-main>
    <v-container class="my-8">
      <SectionHeader title="Our Menu" />
      
      <v-alert
        color="secondary"
        variant="tonal"
        class="mb-8"
        icon="mdi-information"
      >
        <strong>Pro tip:</strong> Look for the \u2b50 to find our bestsellers!
      </v-alert>

      <MenuSection :sections="menuSections" />
    </v-container>
  </v-main>
</template>

<script setup>
import { ref } from 'vue'
import SectionHeader from '@/components/common/SectionHeader.vue'
import MenuSection from '@/components/menu/MenuSection.vue'
import { menuSections } from '@/data/menu.js'

// In a real app, you might fetch this data
const sections = ref(menuSections)
</script>