<template>
  <v-main>
    <v-container class="my-8">
      <SectionHeader title="Our Story" />
      
      <v-row class="mb-12">
        <v-col cols="12" md="6">
          <h3 class="text-h4 font-weight-bold text-primary mb-4">Welcome to Sip Coffee</h3>
          <p class="text-body-1 mb-4">
            Sip Coffee is a vibrant café located in Calapan City, Philippines, known for its innovative coffee creations. 
            We're your new go-to coffee haven nestled in the heart of Calapan City, Oriental Mindoro. 
            Located at Unit 1A, Calapan Town Center, this cozy café is more than just a place to grab a quick caffeine fix—it's a culinary experience waiting to be savored.
          </p>
          <p class="text-body-1 mb-4">
            Whether you're a dedicated coffee enthusiast or a casual sipper, Sip Coffee promises to delight your taste buds with its unique offerings. 
            The brand offers a diverse menu featuring unique beverages like the Tahoccino—an exciting blend of taho and coffee—and the Dirty Champorado, which evokes a playful nostalgia.
          </p>
          <p class="text-body-1 mb-4">
            Customers rave about the warm ambiance, friendly staff, and the cozy feeling that makes it feel like home. 
            Sip Coffee captures the essence of community and creativity, making it a standout destination for coffee lovers. 
            The charming aesthetics and quality brews invite guests to relax, converse, and discover new flavors in every sip.
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <v-img
            src="https://scontent.fmnl34-1.fna.fbcdn.net/v/t39.30808-6/567240382_122145117674908038_8758197675219595222_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGLOkiHTFAO6547hGzu9xkzDgRWOrxzG9gOBFY6vHMb2L0j4a3gtqolBvxF-0wpgkHUFoMM7KzD9wEnOJoLzR2o&_nc_ohc=fr6_HvryYlQQ7kNvwEOC-n5&_nc_oc=AdlQg_8Wdfs-eZatyBh0O-YWnWI0MKolWAUeu2612DvqeSRSGcAAPc09Xg_00DkgKeX48Rl7nyB3bCUcjBQaCGBj&_nc_zt=23&_nc_ht=scontent.fmnl34-1.fna&_nc_gid=C7CIAPp4UPlU-Ep76Ep7xg&oh=00_Afhuo1gXGQnzH7m0RhEu-mRUkfjYE04I9gbbBKDv7NzqQQ&oe=6933431F"
            height="400"
            cover
            class="rounded-lg"
          ></v-img>
        </v-col>
      </v-row>

      <!-- Customer Reviews -->
      <v-row class="mb-12">
        <v-col cols="12">
          <h3 class="text-h4 font-weight-bold text-primary mb-6 text-center">What Our Customers Say</h3>
          <v-row>
            <v-col cols="12" md="6">
              <v-card variant="flat" class="pa-4 h-100">
                <div class="d-flex align-center mb-3">
                  <v-icon color="secondary" class="mr-2">mdi-format-quote-open</v-icon>
                  <p class="text-body-1 font-italic">
                    "It felt like home after staying 2 hours filled with laughter and good vibes."
                  </p>
                </div>
                <div class="text-caption text-medium-emphasis">— Elleca Malinao</div>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card variant="flat" class="pa-4 h-100">
                <div class="d-flex align-center mb-3">
                  <v-icon color="secondary" class="mr-2">mdi-format-quote-open</v-icon>
                  <p class="text-body-1 font-italic">
                    "Starbucks level! Quality that matches, if not surpasses, big-name coffee shops."
                  </p>
                </div>
                <div class="text-caption text-medium-emphasis">— Michaela Maramara</div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- The Space Section -->
      <v-row class="mb-12">
        <v-col cols="12">
          <h3 class="text-h4 font-weight-bold text-primary mb-6 text-center">The Experience</h3>
          <v-row>
            <v-col cols="12" md="4" class="text-center">
              <v-icon color="primary" size="48" class="mb-4">mdi-palette</v-icon>
              <h4 class="text-h6 font-weight-bold mb-2">Modern Korean Aesthetic</h4>
              <p class="text-body-2">Warm wood tones, cozy corners, and Instagram-worthy spots throughout.</p>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
              <v-icon color="primary" size="48" class="mb-4">mdi-account-group</v-icon>
              <h4 class="text-h6 font-weight-bold mb-2">Community Hub</h4>
              <p class="text-body-2">A space where conversations flow as freely as our coffee.</p>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
              <v-icon color="primary" size="48" class="mb-4">mdi-chef-hat</v-icon>
              <h4 class="text-h6 font-weight-bold mb-2">Crafted with Care</h4>
              <p class="text-body-2">Each beverage made with passion by our talented baristas.</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- Team Section -->
      <v-row>
        <v-col cols="12">
          <h3 class="text-h4 font-weight-bold text-primary mb-6 text-center">Visit Us Today</h3>
          <p class="text-body-1 text-center mb-6">
            If you find yourself wandering through Calapan, don't miss out on the chance to experience Sip Coffee. 
            With expertly crafted drinks and a warm atmosphere, it's a destination worth seeking out.
          </p>
          <div class="text-center">
            <v-btn
              color="primary"
              size="large"
              to="/visit"
              class="mr-4"
            >
              Find Our Location
            </v-btn>
            <v-btn
              color="secondary"
              size="large"
              to="/menu"
            >
              View Our Menu
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import SectionHeader from '@/components/common/SectionHeader.vue'
</script>