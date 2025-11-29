<template>
  <v-main>
    <!-- Hero Section -->
    <v-container fluid class="pa-0">
      <v-parallax
        src="https://scontent.fmnl33-2.fna.fbcdn.net/v/t39.30808-6/567240382_122145117674908038_8758197675219595222_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGLOkiHTFAO6547hGzu9xkzDgRWOrxzG9gOBFY6vHMb2L0j4a3gtqolBvxF-0wpgkHUFoMM7KzD9wEnOJoLzR2o&_nc_ohc=ZBVYNzMXPm4Q7kNvwEMk98H&_nc_oc=AdlxmciUoTkGcCChX0WWk5rPlFmCM-9LiV4QVeBhkuPuA2z34SAUR341Yqd7AqfPET8&_nc_zt=23&_nc_ht=scontent.fmnl33-2.fna&_nc_gid=5R0-kDzP_XJKJfY_SaIPmA&oh=00_AfjdD0XSjoc9get6F0cGgQOKASM4UPPOpBLRsJubGZs9IQ&oe=6930A01F"
        height="600"
      >
        <div class="d-flex flex-column fill-height justify-center align-center text-white text-center">
          <h1 class="text-h2 text-md-h1 font-weight-bold mb-4">
            Where Filipino flavors meet third-wave coffee
          </h1>
          <p class="text-h6 text-md-h5 mb-8">Experience the perfect blend of tradition and innovation</p>
          <v-btn
            color="secondary"
            size="x-large"
            class="text-primary font-weight-bold"
            to="/menu"
          >
            Explore the Menu
          </v-btn>
        </div>
      </v-parallax>
    </v-container>

    <!-- Highlights Section -->
    <v-container class="my-16">
      <v-row>
        <v-col cols="12" md="4" class="text-center">
          <v-icon color="primary" size="64" class="mb-4">mdi-coffee</v-icon>
          <h3 class="text-h5 font-weight-bold mb-2">Crafted Sips</h3>
          <p class="text-body-1 mb-4">Unique Filipino-inspired coffee creations</p>
          <v-btn variant="outlined" color="primary" to="/menu">View Menu</v-btn>
        </v-col>
        
        <v-col cols="12" md="4" class="text-center">
          <v-icon color="primary" size="64" class="mb-4">mdi-map-marker</v-icon>
          <h3 class="text-h5 font-weight-bold mb-2">Visit Us</h3>
          <p class="text-body-1 mb-4">Find our cozy spot in Calapan Town Center</p>
          <v-btn variant="outlined" color="primary" to="/visit">Get Directions</v-btn>
        </v-col>
        
        <v-col cols="12" md="4" class="text-center">
          <v-icon color="primary" size="64" class="mb-4">mdi-clock</v-icon>
          <h3 class="text-h5 font-weight-bold mb-2">Open Daily</h3>
          <p class="text-body-1 mb-4">7:00 AM – 8:00 PM (Fri-Sun until 10 PM)</p>
          <v-btn variant="outlined" color="primary" to="/visit">See Hours</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <!-- Featured Drinks -->
    <v-container class="my-16">
      <SectionHeader title="Featured Drinks" />
      <v-row>
        <v-col
          v-for="drink in heroDrinks"
          :key="drink.name"
          cols="12"
          md="4"
        >
          <v-card class="h-100" variant="flat">
            <v-img
              :src="drink.image"
              height="300"
              cover
              class="bg-grey-lighten-2"
            ></v-img>
            <v-card-text class="text-center">
              <div class="d-flex justify-center align-center mb-2">
                <h3 class="text-h5 font-weight-bold">{{ drink.name }}</h3>
                <v-icon v-if="drink.bestseller" color="secondary" class="ml-1">
                  mdi-star
                </v-icon>
              </div>
              <p class="text-body-2 text-medium-emphasis mb-2">{{ drink.description }}</p>
              <div class="text-h6 font-weight-bold text-primary">₱{{ drink.price }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      
      <div class="text-center mt-8">
        <v-btn
          color="primary"
          size="x-large"
          to="/menu"
        >
          View Full Menu
        </v-btn>
      </div>
    </v-container>

    <!-- Instagram CTA -->
    <v-container class="my-16">
      <v-card color="primary" class="pa-8 text-center">
        <v-icon color="secondary" size="64" class="mb-4">mdi-instagram</v-icon>
        <h3 class="text-h4 font-weight-bold text-white mb-4">Follow our brew journey</h3>
        <p class="text-h6 text-white mb-6">Stay updated with our latest creations and events</p>
        <v-btn
          color="secondary"
          size="large"
          class="text-primary font-weight-bold"
          href="https://instagram.com/sipcoffee"
          target="_blank"
        >
          Follow on Instagram
        </v-btn>
      </v-card>
    </v-container>
  </v-main>
</template>

<script setup>
import { ref } from 'vue'
import SectionHeader from '@/components/common/SectionHeader.vue'
import { heroDrinks } from '@/data/menu.js'

// In a real app, you would fetch this data
const featuredDrinks = ref(heroDrinks)
</script>