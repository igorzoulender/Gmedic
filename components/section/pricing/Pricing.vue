<script setup lang="ts">
import { ref } from "vue";
import { pricePlan } from '@/data/CustomComponents';

const show = ref({});
pricePlan.forEach((_, index) => {
  show.value[index] = false;
});

function toggleShow(index: number) {
  show.value[index] = !show.value[index];
}

</script>
<template>
  <div>
    <div class="pricing-component mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Pricing Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                Le syndrome d'apnée du sommeil
              </h2>
              <!-- <p class="text-muted">We offer 100% satisafaction and Money back Guarantee</p> -->
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Pricing Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Pricing
        ----------------------------------------------- -->
        <v-row class="mt-7" justify="center">
          <v-col lg="6" sm="5" v-for="(card, index) in pricePlan" :key="index">
            <v-card class="mx-auto card-color">

              <v-card-actions>
                <v-btn color="orange-lighten-2 question" variant="text">
                  {{ card.title }}
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn :icon="show[index] ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="toggleShow(index)"></v-btn>
              </v-card-actions>

              <v-expand-transition class="expand-trans">
                <div v-show="show[index]">
                  <v-divider></v-divider>
                  <v-card-text>
                    <template v-if="typeof card.desc === 'string'">
                      <p class="li-size">{{ card.desc }}</p>
                    </template>
                    <template v-else>
                      <ul class="no-bullet">
                        <li class="li-size" v-for="(item, itemIndex) in card.desc" :key="itemIndex">{{ item.liste }}</li>
                      </ul>
                    </template>
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
        <!-- -----------------------------------------------
            End Pricing
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>

<style>
.col-label {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 53px 35px 35px;
  margin-bottom: 0;
  background-color: #edf0f5;
  border: solid 2px #dbe1ea;
  color: #012e6e;
  font-size: 1.375rem;
  font-weight: 700;
  text-align: left;
  transition: box-shadow 0.2s ease 0s;
  cursor: pointer;
}

.card-color {
  background-color: #edf0f5;
  border: solid 2px #dbe1ea;
}

.question {
  color: #012e6e;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0
}

.lien {
  margin-bottom: 0;
  color: #00b7dd;
  font-weight: 600;
  font-size: .875rem;
  text-decoration: underline;
}

.expand-trans {
  padding: 20px 4%;
  line-height: 1.6;
}

.no-bullet {
  list-style-type: none;
  /* Supprime les puces */
  padding-left: 0;
  /* Supprime l'espacement à gauche */
}

.li-size{
  font-weight: 700;
  line-height: 1.6;
}
</style>