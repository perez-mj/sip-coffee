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
    src: 'https://scontent.fmnl34-1.fna.fbcdn.net/v/t39.30808-6/518416435_122174050724355462_7674719904334874383_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGvryKA_CfPYVPU9TGZqi45grLmrPU8O8WCsuas9Tw7xdAn0-TJ0OHacVNxd-iurZegmypKIfLAJ8naLYm1vifu&_nc_ohc=z6IuFUuSSVYQ7kNvwERVURc&_nc_oc=Adl-YqQL9Vkie0fp9Vsvg9V_kkIP-jCOrsEcbKRyl0Ea9W1rhrOjW7euzrQVMAvEa5ajG8eTNqnQcXs_Han6Fv09&_nc_zt=23&_nc_ht=scontent.fmnl34-1.fna&_nc_gid=QKvefTO6dYqBrQgA0kFQsg&oh=00_AfiJrzGM30_68KqPeC0btpzu8C-ei7mk719rKqMSwMSI_A&oe=693357A4',
    alt: 'Patisserie display',
    caption: 'Our selection of freshly baked pastries'
  },
  {
    src: 'https://scontent.fmnl34-1.fna.fbcdn.net/v/t39.30808-6/558163081_122182651604355462_2539134848060057287_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGmtv6xL7_LN6ucrMl_mhlSDrnGkTNQCfkOucaRM1AJ-fjpGyISUTw8Ix52eTvYwp04OHg3uNdCCXELWyzvU66o&_nc_ohc=AnHNyG1jJ38Q7kNvwGRtoqC&_nc_oc=AdkQMonPwYzS1e5D1O1Gt2Gw5Ge3dO7rapyv-nnn77qOdoSisY2C78N8KUhNXr_anMxNOGKcm6dUg4dgCMA_CqY3&_nc_zt=23&_nc_ht=scontent.fmnl34-1.fna&_nc_gid=GymJnMSTpPZasWjj_qzAtw&oh=00_Afi_U-SoTKYmheMjbejn8v9oQKMfFPCkpJcl68h7kqnRyQ&oe=69334B1A',
    alt: 'Cafe interior',
    caption: 'Our warm and inviting interior space'
  },
  {
    src: 'https://scontent.fmnl34-1.fna.fbcdn.net/v/t39.30808-6/520442463_24433619072936381_3735531508870570647_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEUCNZDaGHfM-91Aqw14NrSrQ8tZ_UYERStDy1n9RgRFPtKzt0r37oHKXmqjjz8e7bMYK1mnVJmHMNyXH89OzgJ&_nc_ohc=7LRYf0nrLqMQ7kNvwEM0WNY&_nc_oc=AdmEdVv-W-PtuRFv21okEPOeFIY7e9pmmRpIWZLZyOhgr3hk2_Odx64z-uas36-AxboKqsbZmv-eb4uilWtvlmhF&_nc_zt=23&_nc_ht=scontent.fmnl34-1.fna&_nc_gid=LHpreZ3zlEIf9djsj8aEXQ&oh=00_Afjq-0Fv2uTu85UB4y8-FzxB-QUin5jKqBBelQMdQ5YLUg&oe=69336122',
    alt: 'Barista at work',
    caption: 'Our skilled baristas crafting your drinks'
  },
  {
    src: 'https://scontent.fmnl34-1.fna.fbcdn.net/v/t39.30808-6/518402396_122174050748355462_5864710535082578811_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG_qxBz0EoNH6WjcNn9791HbFKUsgrCMvBsUpSyCsIy8F-Nuqq0w4_MEJewhCj4dIcOaT4lCDVjTCBPolFlTBto&_nc_ohc=Gw3jIdvFvdMQ7kNvwEyoeyh&_nc_oc=AdlgjXeOpbFk1gYNW6qe7qCBRhxxOVKmNaojhUDQU50mzmB0a5m_liqODhOWS_9cuzNAT75g7qrsiGCRo4DxP0iQ&_nc_zt=23&_nc_ht=scontent.fmnl34-1.fna&_nc_gid=3oXiM2Zhp7s0krsMQRzq0g&oh=00_Afg57U_9bJP6fHXEiZYHSpFxq1e3dvN8BAfhBDQmSFBwVw&oe=69336F6F',
    alt: 'Samalamig Americano',
    caption: 'Samalamig Americano - a refreshing twist on a classic'
  },
  {
    src: 'https://scontent.fmnl34-1.fna.fbcdn.net/v/t39.30808-6/544568291_122135501108908038_2009951542300452269_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFjjbYr2IzwxZtj0URZsP6kYN3agv2xnohg3dqC_bGeiMu0jJDmZYBvLUJHMYMQoYYYi0nKF2EYFVElE0j3FgJE&_nc_ohc=8rGXoGdVVHoQ7kNvwGKQQS6&_nc_oc=AdlKYEExyk6_hf5_goCf9eLL_vCJ91j_utn97LQLh8645M-hSghoStqQfq3bHQ40Q0Akz40zSg7ie3VGUAeiH-Uc&_nc_zt=23&_nc_ht=scontent.fmnl34-1.fna&_nc_gid=vFV-MDohpgVWWOYwrtzkcQ&oh=00_AfgAn9g_Xs0S_4iYA_Lp94OVSLn_wtc9m2yuGBGo8tU5xQ&oe=693371B4',
    alt: 'Cereal Killer Latte',
    caption: 'Cereal Killer Latte - sweet nostalgia in a cup'
  },
  {
    src: 'https://scontent.fmnl34-1.fna.fbcdn.net/v/t39.30808-6/583616971_122117323587000367_7465800861234102900_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_aid=0&_nc_eui2=AeEUki5sSSIMJhPYEwvwfoGfmf0YFyPJhceZ_RgXI8mFx2OK9HH1Tc6uo8qPUAf2M4m44FfHVxdiaV_q1x-ZRi9J&_nc_ohc=uCLpHZW48U4Q7kNvwFbFfLL&_nc_oc=AdkWF_2WFfgbpluAuyhUOnWjXJkYUo0lylEG-JUzYm_yIZ2YVZNoyLU8tAfgh0_ZIO4uLug4OX589FrVOD88bdgH&_nc_zt=23&_nc_ht=scontent.fmnl34-1.fna&_nc_gid=fCI49qgb3WaMGjq8FYwy3Q&oh=00_AfidLR4iI2rUynJJBVfaGQgjlMojVwhu1zpOOj8hov_TPQ&oe=69337833',
    alt: 'Cafe exterior',
    caption: 'Our modern Korean-inspired storefront'
  },
  {
    src: 'https://scontent.fmnl34-1.fna.fbcdn.net/v/t39.30808-6/572460203_10236283717488303_6319888315072806627_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHtEU9EyVNvKMW85VZoUaK0q5RFt-Rz8y6rlEW35HPzLrr9E50JfSuMLTn0waTD3swH7iXoJcYBFlqQo-ulDKgd&_nc_ohc=uBIfxzQu4KMQ7kNvwGofN94&_nc_oc=AdmSKSgmKMZWUCifqELfeaC8ac2G_7vWZ-5iruxTCxjVX21tUJdIYNn8UK6bct1QZqtVvPx3ZolEEAoUDM3wSkzE&_nc_zt=23&_nc_ht=scontent.fmnl34-1.fna&_nc_gid=DhHLnOAGQPGSaiNhUHnKgQ&oh=00_AfjRrBtf3ULkcQOSAq-pmuEbAbPX08EReUQ0oIOr33C9Lw&oe=693375CB',
    alt: 'Coffee drinks on table',
    caption: 'Our signature coffee drinks ready to be enjoyed'
  },
  {
    src: 'https://scontent.fmnl34-1.fna.fbcdn.net/v/t39.30808-6/580978669_824422420447481_7487977863751019956_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFJFtOWCvQOn2iAd6utYODk_OE1noaTe0X84TWehpN7RYl5FpNIYBHSj2_55APTkosoTQgL0qnxqhAUVBE3NpL7&_nc_ohc=NpubSd-DfMIQ7kNvwEj78Nl&_nc_oc=Adn4luJXSy3xH9B0jPwKu8mT1EmM3CFVr6wAysrek-uJYdpFnVYJgLVObHo2KYGRf6D7XgqOHR0NG33jxCgcrUff&_nc_zt=23&_nc_ht=scontent.fmnl34-1.fna&_nc_gid=4JTc9vglRFb4MgXvdG82-w&oh=00_Afj9q9EklI66nlLCCDk33dZnXb4K1shI643iJjj6rZqEqw&oe=693380F4',
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