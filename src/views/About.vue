<template>
  <v-main>
    <v-container class="my-8">
      <SectionHeader title="Our Story" />
      
      <v-row class="mb-12">
        <v-col cols="12" md="6">
          <h3 class="text-h4 font-weight-bold text-primary mb-4">Born from passion</h3>
          <p class="text-body-1 mb-4">
            Sip Coffee was born from late-night study sessions and a deep love for traditional Filipino flavors. 
            What started as a simple idea to blend our childhood favorites with quality coffee has grown into 
            a community hub where innovation meets tradition.
          </p>
          <p class="text-body-1 mb-4">
            We believe in reimagining Filipino comfort drinks without shortcuts — just soul. Every cup tells 
            a story of heritage, creativity, and the warm hospitality that defines our culture.
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <v-img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            height="400"
            cover
            class="rounded-lg"
          ></v-img>
        </v-col>
      </v-row>

      <!-- The Space Section -->
      <v-row class="mb-12">
        <v-col cols="12">
          <h3 class="text-h4 font-weight-bold text-primary mb-6 text-center">The Space</h3>
          <v-row>
            <v-col cols="12" md="4" class="text-center">
              <v-icon color="primary" size="48" class="mb-4">mdi-palette</v-icon>
              <h4 class="text-h6 font-weight-bold mb-2">Modern Korean Aesthetic</h4>
              <p class="text-body-2">Warm wood tones, local art displays, and vinyl spins on weekends create our unique ambiance.</p>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
              <v-icon color="primary" size="48" class="mb-4">mdi-paw</v-icon>
              <h4 class="text-h6 font-weight-bold mb-2">Pet-Friendly</h4>
              <p class="text-body-2">Your furry friends are always welcome in our outdoor seating area.</p>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
              <v-icon color="primary" size="48" class="mb-4">mdi-power-plug</v-icon>
              <h4 class="text-h6 font-weight-bold mb-2">Co-Working Ready</h4>
              <p class="text-body-2">Plenty of power outlets and fast WiFi make us the perfect spot for remote work.</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- Team Section -->
      <v-row>
        <v-col cols="12">
          <h3 class="text-h4 font-weight-bold text-primary mb-6 text-center">Meet the Team</h3>
          <v-row justify="center">
            <v-col cols="12" md="6" class="text-center">
              <v-avatar size="120" class="mb-4">
                <v-img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  cover
                ></v-img>
              </v-avatar>
              <h4 class="text-h5 font-weight-bold">Jam</h4>
              <p class="text-body-2 text-medium-emphasis">Head Barista & Flavor Alchemist</p>
              <p class="text-body-2">
                With over 5 years in specialty coffee, Jam brings creativity and precision to every cup, 
                ensuring each drink tells a unique story.
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import SectionHeader from '@/components/common/SectionHeader.vue'
</script>