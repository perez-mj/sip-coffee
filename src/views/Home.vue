<template>
  <v-main>
    <!-- Hero Section -->
    <v-container fluid class="pa-0 hero-section">
      <v-parallax
        src="https://scontent.fmnl34-1.fna.fbcdn.net/v/t39.30808-6/579484553_824423960447327_3196985628152722964_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGzZCsObu8v_BH6WFOo3xhtCaZctEKpfJsJply0Qql8m5g9WyShX49nmuwFE7y_MrR_RfMQj8CpzxV6ltSEEtmT&_nc_ohc=thx9DsTN1d4Q7kNvwFLB7NI&_nc_oc=Adm1R_pMtmreSU_FC0_sgslprE_6ZkBm4g1TZsnsazzjNWsprOEIXf7yKYKBUieOfb8zt7z0XWsmQbbpCKDaRLfg&_nc_zt=23&_nc_ht=scontent.fmnl34-1.fna&_nc_gid=DqHO386q875whcTprzl80Q&oh=00_Afi55_c4LswDkXztZieb-hvmpJOZPtt7_3hl3kWXAy89DQ&oe=69338009"
        height="600">
        <!-- Filter overlay -->
        <div class="hero-filter"></div>

        <div class="d-flex flex-column fill-height justify-center align-center text-white text-center hero-content">
          <h1 class="text-h2 text-md-h1 font-weight-bold mb-4">
            Where Filipino flavors meet creative coffee
          </h1>
          <p class="text-h6 text-md-h5 mb-8">
            A vibrant café in Calapan City - feel at home with every sip
          </p>
          <v-btn color="secondary" size="x-large" class="text-primary font-weight-bold" to="/menu">
            Explore Our Creations
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
        <v-col v-for="drink in heroDrinks" :key="drink.name" cols="12" md="4">
          <v-card class="h-100" variant="flat">
            <v-img :src="drink.image" height="300" cover class="bg-grey-lighten-2"></v-img>
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
        <v-btn color="primary" size="x-large" to="/menu">
          View Full Menu
        </v-btn>
      </div>
    </v-container>

    <v-container class="my-16">
      <v-card color="primary" class="pa-8 text-center">
        <v-icon icon="mdi-instagram" color="secondary" size="64" class="mb-4"></v-icon>
        <h3 class="text-h4 font-weight-bold text-white mb-4">Follow our brew journey</h3>
        <p class="text-h6 text-white mb-6">Stay updated with our latest creations and events</p>
        <v-btn color="secondary" size="large" class="text-primary font-weight-bold" prepend-icon="mdi-instagram"
          :href="social.instagram" target="_blank">
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

const social = {
  instagram: 'https://www.instagram.com/sipcoffeeph/'
}

const featuredDrinks = ref(heroDrinks)
</script>

<style scoped>
.hero-section {
  position: relative;
}

.hero-filter {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg,
      rgba(235, 209, 115, 0.5) 0%,
      rgba(6, 72, 152, 0.3) 80%,
      rgba(0, 0, 0, 1) 100%);
  z-index: 1;
  mix-blend-mode: multiply;
}

.hero-content {
  position: relative;
  z-index: 2;
}
</style>