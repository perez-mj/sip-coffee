<template>
  <v-app>
    <SiteHeader />
    <router-view />
    <SiteFooter />
  </v-app>
</template>

<script setup>
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
</script>

<style>
/* Global styles for less roundy components */
.v-card {
  border-radius: 4px !important;
}

.v-btn {
  border-radius: 4px !important;
}

.v-text-field .v-field {
  border-radius: 4px !important;
}

.v-dialog .v-card {
  border-radius: 8px !important;
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
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #053a7a;
}
</style>