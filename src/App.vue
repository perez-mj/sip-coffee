<template>
  <v-app>
    <SiteHeader />
    <!-- Menu page needs special handling -->
    <component :is="currentComponent" />
    <SiteFooter />
  </v-app>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import Home from '@/views/Home.vue'
import Menu from '@/views/Menu.vue'
import About from '@/views/About.vue'
import Visit from '@/views/Visit.vue'
import Gallery from '@/views/Gallery.vue'
import Contact from '@/views/Contact.vue'

const route = useRoute()

const currentComponent = computed(() => {
  switch (route.name) {
    case 'Menu':
      return Menu
    case 'About':
      return About
    case 'Visit':
      return Visit
    case 'Gallery':
      return Gallery
    case 'Contact':
      return Contact
    default:
      return Home
  }
})
</script>

<style>
/* Global styles for less roundy components */
.v-card {
  border-radius: 4px !important;
}

.v-btn {
  border-radius: 2px !important;
}

.v-text-field .v-field {
  border-radius: 2px !important;
}

.v-select .v-field {
  border-radius: 2px !important;
}

.v-dialog .v-card {
  border-radius: 4px !important;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #064898;
  border-radius: 2px !important;
}

::-webkit-scrollbar-thumb:hover {
  background: #053a7a;
}

/* Page transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Price formatting */
.price {
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
}

/* CRITICAL FIX FOR MENU PAGE */
/* Remove Vuetify layout constraints */
.v-main {
  padding: 0 !important;
  margin: 0 !important;
  width: 100% !important;
  max-width: 100% !important;
}

.v-main__wrap {
  display: block !important;
  padding: 0 !important;
  margin: 0 !important;
  width: 100% !important;
}

/* Force menu page to be full width */
.menu-page {
  width: 100vw !important;
  max-width: 100vw !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
}

/* Hide sidebar container completely on mobile */
@media (max-width: 959px) {
  .desktop-sidebar-container {
    display: none !important;
    width: 0 !important;
    min-width: 0 !important;
    padding: 0 !important;
    margin: 0 !important;
    visibility: hidden !important;
    height: 0 !important;
    overflow: hidden !important;
  }
}
</style>