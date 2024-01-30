<script setup lang="ts">
import { ref } from "vue";
import { portfolio } from '@/data/CustomComponents'
</script>
<template>
  <div>
    <div class="portfolio-component mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Portfolio Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                Nos derniers produits ajoutés
              </h2>
              <!-- <p class="text-muted">
                You can relay on our amazing features list and also our customer
                services will be great experience for you without doubt and in
                no-time
              </p> -->
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Portfolio Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Portfolio
        ----------------------------------------------- -->
        <v-row class="mt-8">
          <v-col cols="12" md="4" sm="6" v-for="card in portfolio" :key="card.title">
            <v-card class="portfolio-card overflow-hidden card-shadow">

              <NuxtLink :to="`/produit/${card.title}`" v-scroll-to="`hg`" style="color: black !important;" class="nav-link">
                <div class="portfolio-img">

                  <img :src="`${card.img}`" class="img-fluid" :alt="card.img" />
                </div>

                <v-card-text class="pa-5">
                  <h5 class="font-weight-medium font-18">{{ card.title }}</h5>
                  <p class="font-14 mb-0 text-muted">{{ card.subtext }}</p>
                </v-card-text>

              </NuxtLink>

            </v-card>
          </v-col>
        </v-row>

        <div class="d-flex flex-column align-center mt-8">
          <v-btn class="btn bg-white btn-custom-md" to="/" flat size="large">
            <p class="text-success font-weight-bold">
              Voir tout nos produits
            </p>
          </v-btn>
        </div>
        <!-- -----------------------------------------------
            End Portfolio
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
