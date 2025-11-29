<template>
  <v-footer color="primary" class="text-white mt-16">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <div class="text-h6 font-weight-bold mb-4">Sip Coffee</div>
          <p class="text-caption">
            Unit 1A, Calapan Town Center<br>
            J.P. Rizal Street, Calapan City 5200<br>
            Oriental Mindoro, Philippines
          </p>
        </v-col>
        
        <v-col cols="12" md="4">
          <div class="text-h6 font-weight-bold mb-4">Hours</div>
          <p class="text-caption mb-1">Mon\u2013Thu: 7:00 AM \u2013 8:00 PM</p>
          <p class="text-caption mb-1">Fri\u2013Sun: 7:00 AM \u2013 10:00 PM</p>
          <p class="text-caption">Last order 30 mins before closing</p>
        </v-col>
        
        <v-col cols="12" md="4">
          <div class="text-h6 font-weight-bold mb-4">Connect</div>
          <div class="d-flex gap-2">
            <v-btn
              icon="mdi-instagram"
              variant="text"
              color="white"
              size="small"
              href="https://instagram.com/sipcoffee"
              target="_blank"
            ></v-btn>
            <v-btn
              icon="mdi-facebook"
              variant="text"
              color="white"
              size="small"
              href="https://facebook.com/sipcoffee"
              target="_blank"
            ></v-btn>
          </div>
          <p class="text-caption mt-4">
            <a href="/privacy" class="text-white text-decoration-underline">Privacy Policy</a> \u2022 
            <a href="/terms" class="text-white text-decoration-underline">Terms of Service</a>
          </p>
        </v-col>
      </v-row>
      
      <v-divider class="my-4"></v-divider>
      
      <div class="text-center text-caption">
        &copy; 2024 Sip Coffee. All rights reserved.
      </div>
    </v-container>
  </v-footer>
</template>

<script setup>
// Component logic here
</script>