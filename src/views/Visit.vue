<template>
  <v-main>
    <v-container class="my-8">
      <SectionHeader title="Visit Us" />
      
      <v-row class="mb-8">
        <v-col cols="12" md="8">
          <!-- Google Maps Embed -->
          <v-card variant="flat" class="mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.267877560561!2d121.1763569!3d13.9064214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bce9000b72259b%3A0x61adf4406ca76889!2ssip%20coffee!5e0!3m2!1sen!2sph!4v1701234567890!5m2!1sen!2sph"
              width="100%"
              height="400"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="rounded-lg"
            ></iframe>
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
                  <strong>Location</strong>
                </template>
                <template v-slot:subtitle>
                  At Calapan Town Center, the city's main commercial hub
                </template>
              </v-list-item>
              
              <v-list-item prepend-icon="mdi-parking">
                <template v-slot:title>
                  <strong>Parking</strong>
                </template>
                <template v-slot:subtitle>
                  Town Center parking lot available. Free curb parking in surrounding areas.
                </template>
              </v-list-item>
              
              <v-list-item prepend-icon="mdi-bus">
                <template v-slot:title>
                  <strong>Public Transit</strong>
                </template>
                <template v-slot:subtitle>
                  Accessible by tricycle, jeepney, and private vehicle. Well-known landmark in Calapan.
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
              
              <v-list-item 
                prepend-icon="mdi-map-marker"
                :href="googleMapsLink"
                target="_blank"
                class="text-decoration-none"
              >
                <template v-slot:title>
                  <strong>View on Google Maps</strong>
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
const googleMapsLink = ref('https://www.google.com/maps/place/sip+coffee/@13.4063227,121.1761997,20.08z/data=!4m6!3m5!1s0x33bce9000b72259b:0x61adf4406ca76889!8m2!3d13.4064214!4d121.1763569!16s%2Fg%2F11ydzf8p5l?entry=ttu')
</script>