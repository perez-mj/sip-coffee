<template>
  <v-main>
    <v-container class="my-8">
      <SectionHeader title="Gallery" />
      
      <p class="text-body-1 text-center mb-8">
        Take a visual journey through our coffee creations, cozy space, and vibrant community moments.
      </p>

      <v-row>
        <v-col
          v-for="(image, index) in images"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card variant="flat" class="gallery-item" @click="openLightbox(index)">
            <v-img
              :src="image.src"
              :alt="image.alt"
              height="250"
              cover
              class="bg-grey-lighten-2"
              loading="lazy"
            ></v-img>
          </v-card>
        </v-col>
      </v-row>

      <!-- Lightbox -->
      <v-dialog v-model="lightbox.open" max-width="1200">
        <v-card>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon="mdi-close" @click="closeLightbox"></v-btn>
          </v-card-actions>
          <v-card-text class="text-center">
            <v-img
              :src="currentImage.src"
              :alt="currentImage.alt"
              max-height="600"
              contain
            ></v-img>
            <p class="text-h6 mt-4">{{ currentImage.caption }}</p>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-container>
  </v-main>
</template>

<script setup>
import { ref, computed } from 'vue'
import SectionHeader from '@/components/common/SectionHeader.vue'

const images = ref([
  {
    src: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    alt: 'Tahoccino drink',
    caption: 'Our signature Tahoccino - ube halaya meets cold brew'
  },
  {
    src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    alt: 'Cafe interior',
    caption: 'Our warm and inviting interior space'
  },
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    alt: 'Barista at work',
    caption: 'Our skilled baristas crafting your drinks'
  },
  {
    src: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    alt: 'Coffee beans',
    caption: 'Premium coffee beans sourced with care'
  },
  {
    src: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    alt: 'Cereal Killer Latte',
    caption: 'Cereal Killer Latte - sweet nostalgia in a cup'
  },
  {
    src: 'https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    alt: 'Cafe exterior',
    caption: 'Our modern Korean-inspired storefront'
  },
  {
    src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    alt: 'Coffee preparation',
    caption: 'The art and science of coffee making'
  },
  {
    src: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    alt: 'Customer enjoying coffee',
    caption: 'Our community enjoying moments together'
  }
])

const lightbox = ref({
  open: false,
  currentIndex: 0
})

const currentImage = computed(() => {
  return images.value[lightbox.value.currentIndex] || {}
})

function openLightbox(index) {
  lightbox.value.currentIndex = index
  lightbox.value.open = true
}

function closeLightbox() {
  lightbox.value.open = false
}
</script>

<style scoped>
.gallery-item {
  cursor: pointer;
  transition: transform 0.2s ease;
}

.gallery-item:hover {
  transform: scale(1.05);
}
</style>