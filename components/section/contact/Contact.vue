<template>
  <div>
    <div class="mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Contact Form
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" md="8">
            <div>
              <h4 class="font-weight-medium contact-title mt-0">
                Nous nous efforcerons de vous apporter une réponse dans les meilleurs délais.
              </h4>
              <form>
                <v-row class="mt-7">
                  <v-col cols="12" md="6" class="py-0">
                    <v-text-field label="Nom" variant="outlined" required color="primary"
                      placeholder="Saisir votre nom"></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6" class="py-0">
                    <v-text-field label="Prénom" variant="outlined" required color="primary"
                      placeholder="Saisir votre prénom"></v-text-field>
                  </v-col>

                  <v-col cols="12" class="py-0">
                    <v-text-field label="Email" variant="outlined" required color="primary"
                      placeholder="Saisir votre email"></v-text-field>
                  </v-col>

                  <v-col cols="12" class="py-0">
                    <v-textarea name="message" color="primary" variant="outlined" label="Message" rows="3"
                      placeholder="Saisir votre message a ce niveau"></v-textarea>
                  </v-col>

                </v-row>
                <v-btn @click="envoyer()" class="btn-danger-gradient mt-7 px-8 py-2" variant="outlined" flat color="white">
                  Envoyer
                </v-btn>
              </form>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="bg-primary contact-detail-card">
              <h3 class=" font-weight-small text-white">
                Contactez nous par e-mail, courrier ou par téléphone. Nos coordonnées complètes se trouvent plus bas.
              </h3>

            </div>
          </v-col>
        </v-row>
        <!-- -----------------------------------------------
            End Contact Form
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>

