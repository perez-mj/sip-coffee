<template>
  <v-main>
    <v-container class="my-8">
      <SectionHeader title="Get in Touch" />
      
      <v-row>
        <v-col cols="12" md="8">
          <v-card variant="flat" class="pa-6">
            <h3 class="text-h5 font-weight-bold text-primary mb-4">Send us a Message</h3>
            
            <v-form @submit.prevent="submitForm">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.name"
                    label="Your Name"
                    variant="outlined"
                    required
                  ></v-text-field>
                </v-col>
                
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.email"
                    label="Email Address"
                    type="email"
                    variant="outlined"
                    required
                  ></v-text-field>
                </v-col>
                
                <v-col cols="12">
                  <v-text-field
                    v-model="form.subject"
                    label="Subject"
                    variant="outlined"
                    required
                  ></v-text-field>
                </v-col>
                
                <v-col cols="12">
                  <v-textarea
                    v-model="form.message"
                    label="Your Message"
                    variant="outlined"
                    rows="4"
                    required
                  ></v-textarea>
                </v-col>
                
                <v-col cols="12">
                  <v-btn
                    color="primary"
                    size="large"
                    type="submit"
                    :loading="loading"
                  >
                    Send Message
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card>
        </v-col>
        
        <v-col cols="12" md="4">
          <!-- Quick Contact -->
          <v-card variant="flat" class="pa-4 mb-4">
            <h3 class="text-h5 font-weight-bold text-primary mb-4">Quick Connect</h3>
            
            <v-list lines="two">
              <v-list-item 
                prepend-icon="mdi-email"
                :href="`mailto:${contact.email}?subject=Hi from your website!`"
                class="text-decoration-none"
              >
                <template v-slot:title>
                  <strong>Email Us</strong>
                </template>
                <template v-slot:subtitle>
                  {{ contact.email }}
                </template>
              </v-list-item>
              
              <v-list-item 
                prepend-icon="mdi-phone"
                :href="`tel:${contact.phone}`"
                class="text-decoration-none"
              >
                <template v-slot:title>
                  <strong>Call Us</strong>
                </template>
                <template v-slot:subtitle>
                  {{ contact.phone }}
                </template>
              </v-list-item>
              
              <v-list-item 
                prepend-icon="mdi-map-marker"
                :href="contact.mapLink"
                target="_blank"
                class="text-decoration-none"
              >
                <template v-slot:title>
                  <strong>Visit Us</strong>
                </template>
                <template v-slot:subtitle>
                  {{ contact.address }}
                </template>
              </v-list-item>
            </v-list>
          </v-card>
          
          <!-- Social Media -->
          <v-card variant="flat" class="pa-4">
            <h3 class="text-h5 font-weight-bold text-primary mb-4">Follow Along</h3>
            
            <div class="d-flex flex-column gap-2">
              <v-btn
                color="primary"
                variant="outlined"
                prepend-icon="mdi-instagram"
                href="https://instagram.com/sipcoffee"
                target="_blank"
              >
                Instagram
              </v-btn>
              
              <v-btn
                color="primary"
                variant="outlined"
                prepend-icon="mdi-facebook"
                href="https://facebook.com/sipcoffee"
                target="_blank"
              >
                Facebook
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import { ref } from 'vue'
import SectionHeader from '@/components/common/SectionHeader.vue'

const contact = ref({
  email: 'hello@sipcoffee.ph',
  phone: '+63 995 399 6510',
  address: 'Unit 1A, Calapan Town Center, J.P. Rizal Street, Calapan City',
  mapLink: 'https://maps.google.com/?q=Calapan+Town+Center,Calapan+City,Oriental+Mindoro'
})

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const loading = ref(false)

function submitForm() {
  loading.value = true
  // In a real app, you would integrate with Formspree, Netlify Forms, or similar
  setTimeout(() => {
    loading.value = false
    alert('Thank you for your message! We\'ll get back to you soon.')
    form.value = { name: '', email: '', subject: '', message: '' }
  }, 2000)
}
</script>