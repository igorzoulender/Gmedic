<template>
  <Navigation2 />
  <div class="banner-wrapper">
    <v-container>
      <!-- -----------------------------------------------
            Start Banner
        ----------------------------------------------- -->
      <v-row justify="center">
        <v-col cols="12" sm="5" lg="7" class="d-flex align-center">
          <div class="text-sm-left text-center">
            <h1 class="banner-title font-weight-bold text-white">
              Spécialiste du traitement de l'apnée du sommeil et des ronflements
            </h1>

            <div class="mt-6 pt-2">
              <form>
                <div class="stylish-input-group">
                  <v-text-field placeholder="Rechercher un équipement" variant="solo" hide-details></v-text-field>
                  <v-btn rounded color="success" elevation="0" class="text-uppercase font-weight-medium" dark>
                    Rechercher
                  </v-btn>
                </div>
              </form>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="7" lg="5">
          <!-- <img
          
            src="/images/landingpage/comingsoon.jpg"
            alt="banner" class="img-fluid"
          />  -->
        </v-col>
      </v-row>

      <!-- -----------------------------------------------
            End Banner
        ----------------------------------------------- -->
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import Navigation2 from '../header/Header2.vue';
</script>

