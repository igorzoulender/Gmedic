<template>
    <Navigation2 />
    <div>
        <v-container>
            <div>
                <v-row>
                    <v-col cols="6" md="6">
                        <img src="https://www.cpap-store.fr/wp-content/uploads/2022/11/Couvercle-filtres-S10-cpap-store.fr.jpg"
                            alt="" class="">

                        <!-- <h4 class="font-weight-regular font-18"></h4> -->
                    </v-col>
                    <v-col cols="6">
                        <h2 class="font-weight-regular font-18 banner-title">Pack de voyage complet – Airmini + Masque léger
                            + Batterie</h2>

                        <section>
                            <h4 class="text-success font-weight-regular font-18 underline">Description</h4>

                            <span class="font-15">
                                <p>Prisma Max, la solution système intelligente pour la thérapie des troubles respiratoires
                                </p>
                                <p class="font-weight-regular">
                                    Ce qui est inclus :
                                <ul class="no-bullet">
                                    <li> 1 x PPC Autopilotée avec carte SD</li>
                                    <li> 1x sacoche de voyage</li>
                                    <li> 1x alimentation électrique</li>
                                    <li> 1x tuyau non chauffant 15mm </li>
                                    <li> 1x manuel utilisateur</li>
                                    <li> Le masque n’est pas fourni avec votre PPC</li>
                                    <li> Garantie 2 ans pièces et main d’oeuvre.</li>
                                </ul>
                                </p>
                                <p></p>
                            </span>
                        </section>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>

    <Team />
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import Navigation2 from '@/components/section/header/Header2.vue';
import Team from '@/components/section/team/Team.vue';

</script>

<style>
.no-bullet {
    list-style-type: none;
    /* Supprime les puces */
    padding: 15px;
    /* Supprime l'espacement à gauche */
}

.underline {
    text-decoration: underline;
}
</style>
  
  