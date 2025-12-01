<template>
  <v-app>
    <SiteHeader />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
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

/* Menu-specific animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.menu-section {
  animation: fadeInUp 0.6s ease-out;
}

/* Custom scrollbar for menu */
.menu-sidebar .v-navigation-drawer__content {
  scrollbar-width: thin;
  scrollbar-color: #064898 #f1f1f1;
}

.menu-sidebar .v-navigation-drawer__content::-webkit-scrollbar {
  width: 6px;
}

.menu-sidebar .v-navigation-drawer__content::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.menu-sidebar .v-navigation-drawer__content::-webkit-scrollbar-thumb {
  background: #064898;
  border-radius: 3px;
}

/* Price glow effect */
.price-display {
  position: relative;
}

.price-display::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(235, 209, 115, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.drink-card:hover .price-display::after {
  opacity: 1;
}
</style>