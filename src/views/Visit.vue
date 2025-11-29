<template>
  <v-main>
    <v-container class="my-8">
      <SectionHeader title="Visit Us" />
      
      <v-row class="mb-8">
        <v-col cols="12" md="8">
          <!-- Google Maps Embed -->
          <v-card variant="flat" class="mb-6">
            <v-img
              src="https://maps.googleapis.com/maps/api/staticmap?center=Calapan+Town+Center,Calapan+City,Oriental+Mindoro&zoom=15&size=800x400&maptype=roadmap&markers=color:red%7Clabel:S%7CCalapan+Town+Center,Calapan+City,Oriental+Mindoro&key=YOUR_API_KEY"
              height="400"
              cover
              class="bg-grey-lighten-2"
            ></v-img>
          </v-card>
          
          <v-card variant="flat" class="pa-4">
            <h3 class="text-h5 font-weight-bold text-primary mb-4">Address</h3>
            <p class="text-body-1 mb-4">
              Unit 1A, Calapan Town Center<br>
              J.P. Rizal Street, Calapan City 5200<br>
              Oriental Mindoro, Philippines
            </p>
            
            <h3 class="text-h5 font-weight-bold text-primary mb-4">Getting Here</h3>
            <v-list lines="two">
              <v-list-item prepend-icon="mdi-map-marker-radius">
                <template v-slot:title>
                  <strong>Landmark</strong>
                </template>
                <template v-slot:subtitle>
                  Across from City Library, next to Calapan Town Center main entrance
                </template>
              </v-list-item>
              
              <v-list-item prepend-icon="mdi-parking">
                <template v-slot:title>
                  <strong>Parking</strong>
                </template>
                <template v-slot:subtitle>
                  Free curb parking available after 6pm. Town Center parking lot also available.
                </template>
              </v-list-item>
              
              <v-list-item prepend-icon="mdi-bus">
                <template v-slot:title>
                  <strong>Public Transit</strong>
                </template>
                <template v-slot:subtitle>
                  5-minute walk from LRT-2 Anonas Station. Multiple jeepney routes pass by Town Center.
                </template>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        
        <v-col cols="12" md="4">
          <!-- Hours -->
          <v-card variant="flat" class="pa-4" color="primary">
            <h3 class="text-h5 font-weight-bold text-white mb-4">Hours</h3>
            
            <v-table density="compact" class="bg-transparent">
              <thead>
                <tr>
                  <th class="text-left text-white">Day</th>
                  <th class="text-right text-white">Hours</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="hour in hours" :key="hour.days">
                  <td class="text-white">{{ hour.days }}</td>
                  <td class="text-right text-white">{{ hour.hours }}</td>
                </tr>
              </tbody>
            </v-table>
            
            <v-alert
              color="secondary"
              variant="tonal"
              class="mt-4"
              icon="mdi-clock-alert"
            >
              <strong>Note:</strong> Last order 30 minutes before closing
            </v-alert>
          </v-card>
          
          <!-- Quick Contact -->
          <v-card variant="flat" class="pa-4 mt-4">
            <h3 class="text-h5 font-weight-bold text-primary mb-4">Quick Contact</h3>
            <v-list lines="two">
              <v-list-item 
                prepend-icon="mdi-phone"
                :href="`tel:${phone}`"
                class="text-decoration-none"
              >
                <template v-slot:title>
                  <strong>Phone</strong>
                </template>
                <template v-slot:subtitle>
                  {{ phone }}
                </template>
              </v-list-item>
              
              <v-list-item 
                prepend-icon="mdi-email"
                :href="`mailto:${email}?subject=Hi from your website!`"
                class="text-decoration-none"
              >
                <template v-slot:title>
                  <strong>Email</strong>
                </template>
                <template v-slot:subtitle>
                  {{ email }}
                </template>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import { ref } from 'vue'
import SectionHeader from '@/components/common/SectionHeader.vue'

const hours = ref([
  { days: 'Monday - Thursday', hours: '7:00 AM \u2013 8:00 PM' },
  { days: 'Friday - Sunday', hours: '7:00 AM \u2013 10:00 PM' }
])

const phone = ref('+63 995 399 6510')
const email = ref('hello@sipcoffee.ph')
</script>