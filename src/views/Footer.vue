<template>
    <v-footer inset app class="footer secondary">
      <v-container>
        <v-row justify="center" no-gutters>
          <!-- <v-btn
            v-for="link in links"
            :key="link"
            variant="text"
            class="mx-2"
            rounded="xl"
          >
            {{ link }}
          </v-btn> -->
          <v-col class="text-center mt-4" cols="12">
            2023 — <strong>Digital Portofolio</strong>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </template>

  <script setup lang="ts">
    const links = [
          'Home',
          'About Us',
          'Team',
          'Services',
          'Blog',
          'Contact Us',
        ]
  </script>