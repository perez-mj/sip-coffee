<template>
  <v-app-bar :elevation="2" color="primary">
    <v-app-bar-title class="text-h5 font-weight-bold">
      <router-link to="/" class="text-white text-decoration-none">
        Sip Coffee
      </router-link>
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <v-tabs color="white" align-right>
      <v-tab to="/">Home</v-tab>
      <v-tab to="/menu">Menu</v-tab>
      <v-tab to="/about">About</v-tab>
      <v-tab to="/visit">Visit</v-tab>
      <v-tab to="/gallery">Gallery</v-tab>
      <v-tab to="/contact">Contact</v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script setup>
// Component logic here
</script>