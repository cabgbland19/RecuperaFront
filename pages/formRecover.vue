<template>
  <v-container fill-height class="background-recover" fluid>
    <v-app-bar app style="background: #464646">
      <DialogProfile :data="username" />
      <!-- Titulo -->
      <h1 v-text="viewTitle" class="white--text mt-1 mx-auto" />
      <!-- Cerrar sesion -->
      <v-btn
        class="ma-2 mt-2 white"
        color="white"
        rounded
        @click="logout"
        style="position: absolute; right: 0"
      >
        <v-icon color="primary" left> mdi-exit-run </v-icon>
        Cerrar sesion
      </v-btn>
    </v-app-bar>
    <v-row justify="center">
      <v-col cols="6">
        <!-- Formulario -->
        <v-hover v-slot="{ hover }" style="transition: all 0.5s ease">
          <v-form
            ref="form"
            class="white pa-8 rounded-xl"
            :class="`elevation-${hover ? 5 : 2}`"
            v-model="isformValid"
            @submit.prevent="submitForm"
          >
            <v-row v-if="!recoverItem.id">
              <!-- Nombre -->
              <v-col cols="12" class="text-center">
                <h1 class="font-weight-light primary--text">Cliente</h1>
              </v-col>
              <!-- Nombre -->
              <v-col cols="6">
                <Input
                  :model.sync="recoverItemName"
                  :rules="rules.name"
                  label="Nombre"
                  :readonly="recoverItem.id && true"
                />
              </v-col>
              <!-- Documento -->
              <v-col cols="6">
                <Input
                  :model.sync="recoverItemDocument"
                  :readonly="recoverItem.id && true"
                  :rules="rules.document"
                  label="Documento"
                  maxlength="15"
                />
              </v-col>
              <!-- Telefono titular -->
              <v-col cols="6">
                <Input
                  :model.sync="recoverItemNumberOne"
                  :readonly="recoverItem.id && true"
                  :rules="rules.phoneHeadline"
                  label="Telefono del titular"
                  maxlength="10"
                />
              </v-col>
              <!-- Telefono contacto -->
              <v-col cols="6">
                <Input
                  :model.sync="recoverItemNumberTwo"
                  :readonly="recoverItem.id && true"
                  :rules="rules.phoneContact"
                  label="Telefono de contacto"
                  maxlength="10"
                />
              </v-col>
              <!-- Segmentos -->
              <v-col cols="6">
                <Select
                  :model.sync="recoverItemLine"
                  :readonly="recoverItem.id && true"
                  :rules="rules.services"
                  label="Segmento"
                  :items="itemsServices"
                />
              </v-col>
              <!-- Motivo -->
              <v-col cols="6">
                <Select
                  :model.sync="recoverItemReason"
                  :rules="rules.reason"
                  label="Motivo"
                  :items="itemsReason"
                />
              </v-col>
              <!-- Estado de la gestion -->
              <!-- <v-col cols="12" v-if="recoverItem.id">
                <Select
                  :model.sync="recoverItemIsActive"
                  :rules="rules.isActive"
                  label="Estado de la gestion"
                  :items="itemsIsActive"
                />
              </v-col> -->
              <!-- Estado de la gestion -->
              <!-- <v-col cols="12" v-if="recoverItem.id">
                <Select
                  :model.sync="recoverItemIsActive"
                  :rules="rules.isActive"
                  label="Estado de la gestion"
                  :items="itemsIsActive"
                />
              </v-col> -->

              <!-- Observacion -->
              <v-col cols="12">
                <Textarea
                  :model.sync="recoverItemObservation"
                  :readonly="recoverItem.id && true"
                  :rules="rules.observation"
                  label="Observaciòn"
                />
              </v-col>
              <v-col cols="12" class="d-flex justify-end">
                <Button label="Enviar" :disabled="!isformValid" type="submit" />
              </v-col>
            </v-row>

            <template v-else>
              <v-row>
                <v-col>
                  <v-row>
                    <v-col cols="6" class="d-flex justify-center align-center">
                      <v-img
                        src="img/inbox_cleanup.svg"
                        max-width="300px"
                        max-height="300px"
                      />
                    </v-col>
                    <v-col cols="6">
                      <!-- Nombre -->
                      <v-col cols="12" class="text-center">
                        <h3 class="primary--text">Nombre</h3>
                        <span v-text="recoverItemName" />
                      </v-col>
                      <!-- Documento -->
                      <v-col cols="12" class="text-center">
                        <h3 class="primary--text">Documento</h3>
                        <span v-text="recoverItemDocument" />
                      </v-col>
                      <!-- Contacto 1 -->
                      <v-col cols="12" class="text-center">
                        <h3 class="primary--text">Telefono 1</h3>
                        <span v-text="recoverItemNumberOne" />
                      </v-col>
                      <!-- Contacto 2 -->
                      <v-col cols="12" class="text-center">
                        <h3 class="primary--text">Telefono 2</h3>
                        <span v-text="recoverItemNumberTwo" />
                      </v-col>
                      <!-- Segmento -->
                      <v-col cols="12" class="text-center">
                        <h3 class="primary--text">Segmento</h3>
                        <span v-text="recoverItemLine" />
                      </v-col>
                      <!-- Observacion -->
                      <v-col cols="12" class="text-center">
                        <h3 class="primary--text">Observacion</h3>
                        <span v-text="recoverItemObservation" />
                      </v-col>
                    </v-col>
                  </v-row>
                </v-col>
                <!-- Division -->
                <v-col cols="12">
                  <v-divider></v-divider>
                </v-col>

                <!-- Estado de la gestion -->
                <v-col cols="12" class="d-flex justify-center">
                  <Select
                    class="mr-5"
                    :model.sync="recoverItemIsActive"
                    :rules="rules.isActive"
                    label="Estado de la gestion"
                    style="max-width: 300px"
                    :items="itemsIsActive"
                  />
                  <Button
                    label="Enviar"
                    :disabled="!isformValid"
                    type="submit"
                  />
                </v-col>

                <!-- <v-col cols="12" class="d-flex justify-end">
                 
                </v-col> -->
              </v-row>
            </template>
          </v-form>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import Regex from "~/plugins/regex.js";
import { SubmitController } from "~/controllers/gtc/submit.controller";
import { EndBaseController } from "~/controllers/endBase.controller";
import { LoginController } from "~/controllers/login.controller";
import { VModelRecoverInterface } from "~/interfaces/recover.interface";
import { propertiesGenerator } from "~/plugins/helpers";

export default {
  layout: "empty",
  middleware: "auth",
  data() {
    return {
      viewTitle: "Recuperación",
      isformValid: true,
      itemsServices: [
        {
          text: "MOVIL",
          value: "MOVIL",
        },
        {
          text: "HOGAR",
          value: "HOGAR",
        },
      ],
      itemsIsActive: [
        {
          text: "RETENIDO",
          value: true,
        },
        {
          text: "NO RETENIDO",
          value: false,
        },
      ],
      itemsReason: ["CAIDA DE SISTEMA", "CAIDA DE APLICATIVO"],
      payload: {},
      rules: {
        name: [
          (v) => !!v || "El nombre es requerido",
          (v) => Regex.onlyLetters.test(v) || "Solo se aceptan letras ",
        ],
        document: [
          (v) => !!v || "El documento es requerido",
          (v) => Regex.onlyNumber.test(v) || "Solo se aceptan nùmeros",
        ],
        phoneHeadline: [
          (v) => !!v || "El telefono del titular es requerido",
          (v) => Regex.onlyNumber.test(v) || "Solo se aceptan nùmeros",
          (v) => (v && v.length >= 10) || "El número debe tener 10 digitos",
        ],
        phoneContact: [
          (v) => !!v || "El telefono de contacto es requerido",
          (v) => Regex.onlyNumber.test(v) || "Solo se aceptan nùmeros",
        ],
        services: [(v) => !!v || "El servicio  es requerido"],
        itemsIsActive: [(v) => !!v || "El estado es requerido"],
        reason: [(v) => !!v || "El motivo es requerido"],
        observation: [
          (v) => !!v || "La observaciòn es requerida",
          (v) =>
            Regex.onlyTextarea.test(v) ||
            "Solo se aceptan letras, nùmeros, coma, (punto y coma) y punto ",
          (v) => (!!v && v.length <= 400) || "Maximo 400 caracteres",
        ],
      },
    };
  },
  methods: {
    postGestion: SubmitController.post.gestion,
    postLogout: LoginController.post.logout,
    postEndBase: EndBaseController.post.endBase,

    submitForm() {
      if (!this.recoverItem.id) {
        const date = new Date(new Date().setSeconds(-36000));
        const dateRequest = date
          .toISOString()
          .split("T")
          .join(" ")
          .slice(0, -2);

        this.recoverItemGestor = this.username.name;
        this.recoverItemIsActive = false;
        this.recoverItemIsDate = dateRequest;

        if (this.postGestion(this.recoverItem)) {
          this.$refs.form.reset();
        }
      } else {
        this.recoverItemNewGestor = this.username.name;
        if (this.postEndBase(this.recoverItem)) {
          this.$refs.form.reset();
        }
      }
    },

    logout() {
      this.postLogout(this.token);
    },
  },
  computed: {
    ...mapState("localStorage", ["username", "token"]),

    ...propertiesGenerator([...VModelRecoverInterface], {
      path: "recover.store",
      mut: "recover.store/setProperty",
    }),
  },
};
</script>

<style>
.background-recover {
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='150' height='150' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='M60.92 130.73a6.5 6.5 0 00-8.94-.27l-6.94-7.37a10.67 10.67 0 00-14.66-15.5l-6.9-7.32a6.5 6.5 0 00-.08-9.16 6.52 6.52 0 10-9.24 9.23 6.5 6.5 0 008.9.3l6.9 7.34a10.67 10.67 0 0014.66 15.5l6.94 7.36a6.52 6.52 0 009.36 9.12 6.52 6.52 0 000-9.23zm-42.1-33.29a3.49 3.49 0 01-3.48-3.47c0-1.9 1.57-3.47 3.48-3.47 1.9 0 3.47 1.56 3.47 3.47a3.51 3.51 0 01-3.47 3.47zm19.77 26.99a7.5 7.5 0 010-14.96 7.5 7.5 0 010 14.96zm16.9 13.01a3.49 3.49 0 01-3.47-3.47c0-1.9 1.57-3.47 3.48-3.47 1.9 0 3.47 1.56 3.47 3.47a3.46 3.46 0 01-3.47 3.47zm80.43-6.71a6.53 6.53 0 00-9.16-.08l-6.99-7.33c.08-.08.2-.15.27-.27a10.67 10.67 0 000-15.07 10.61 10.61 0 00-14.89-.16l-6.9-7.32c.07-.04.1-.12.19-.16a6.52 6.52 0 10-9.24-9.23 6.52 6.52 0 008.62 9.77l6.95 7.36a10.67 10.67 0 00.23 14.85 10.64 10.64 0 0014.39.61l6.98 7.4a6.52 6.52 0 009.58 8.85 6.63 6.63 0 00-.03-9.22zM94.8 100.57a3.49 3.49 0 01-3.47-3.47c0-1.9 1.56-3.47 3.47-3.47 1.9 0 3.47 1.56 3.47 3.47a3.51 3.51 0 01-3.47 3.47zm17.67 23.7a7.5 7.5 0 010-14.96 7.5 7.5 0 010 14.96zm18.9 16.3a3.49 3.49 0 01-3.48-3.47c0-1.9 1.57-3.47 3.47-3.47 1.91 0 3.48 1.56 3.48 3.47a3.51 3.51 0 01-3.48 3.47zm-48.82-32.6a10.67 10.67 0 10-15.08 15.1 10.67 10.67 0 0015.08-15.1zm-7.52 16.65a7.5 7.5 0 010-14.96 7.5 7.5 0 010 14.96zm37.44-62.02a12.44 12.44 0 100 24.89 12.44 12.44 0 000-24.9zm-2.21 22.02a7.5 7.5 0 010-14.96 7.5 7.5 0 017.48 7.48 7.52 7.52 0 01-7.48 7.48zm25.65-34.93a6.55 6.55 0 00-8.94-.26l-6.94-7.37a10.67 10.67 0 00-14.66-15.5l-6.9-7.32a6.5 6.5 0 00-.08-9.16 6.52 6.52 0 10-9.24 9.23 6.5 6.5 0 008.9.3l6.9 7.34a10.67 10.67 0 0014.66 15.5l6.94 7.36a6.52 6.52 0 109.36-.12zM92.14 18.13a3.49 3.49 0 01-3.48-3.47c0-1.91 1.57-3.48 3.48-3.48 1.9 0 3.47 1.57 3.47 3.48a3.49 3.49 0 01-3.47 3.47zm21.33 25.04a7.5 7.5 0 010-14.96 7.5 7.5 0 010 14.96zm16.11 14.62a3.49 3.49 0 01-3.47-3.48c0-1.9 1.56-3.47 3.47-3.47 1.9 0 3.47 1.56 3.47 3.47a3.46 3.46 0 01-3.47 3.48zM23.44 130.73a6.52 6.52 0 10-9.24 9.23 6.52 6.52 0 109.24-9.23zm-5.7 9.5a3.49 3.49 0 01-3.47-3.47c0-1.91 1.57-3.48 3.48-3.48 1.9 0 3.47 1.57 3.47 3.48 0 1.9-1.56 3.47-3.47 3.47zm5.7-90.54a6.52 6.52 0 10-9.24 9.24 6.52 6.52 0 109.24-9.24zm-6.46 7.9a3.49 3.49 0 01-3.47-3.47c0-1.9 1.57-3.47 3.47-3.47 1.91 0 3.48 1.56 3.48 3.47 0 1.91-1.57 3.48-3.48 3.48zm43.94-7.9a6.54 6.54 0 00-8.9-.3l-6.94-7.37a10.67 10.67 0 00-14.62-15.5l-6.91-7.32a6.53 6.53 0 10-.42.38l6.9 7.33s-.03 0-.03.04A10.67 10.67 0 0044.66 42.4l6.94 7.37a6.52 6.52 0 109.31-.08zM20.15 19.43a3.49 3.49 0 01-3.47-3.48c0-1.9 1.56-3.47 3.47-3.47 1.91 0 3.48 1.57 3.48 3.47 0 1.91-1.57 3.48-3.48 3.48zM36.41 40.6a7.5 7.5 0 010-14.96 7.5 7.5 0 010 14.96zm20.5 15.42a3.49 3.49 0 01-3.47-3.47c0-1.91 1.56-3.48 3.47-3.48 1.9 0 3.47 1.57 3.47 3.48 0 1.9-1.56 3.47-3.47 3.47zm79 35.08a6.52 6.52 0 10-9.23 9.23 6.52 6.52 0 109.24-9.23zm-4.54 6.49a3.49 3.49 0 01-3.47-3.48c0-1.9 1.57-3.47 3.47-3.47 1.91 0 3.48 1.56 3.48 3.47a3.49 3.49 0 01-3.48 3.48zm4.55-87.56a6.52 6.52 0 10-9.24 9.23 6.52 6.52 0 109.24-9.23zm-3.21 7.02a3.49 3.49 0 01-3.47-3.47c0-1.91 1.56-3.48 3.47-3.48 1.9 0 3.47 1.57 3.47 3.48 0 1.9-1.56 3.47-3.47 3.47zM98.4 49.7a6.52 6.52 0 10-9.24 9.24l.11.12-6.1 6.6a12.44 12.44 0 00-16.9 18.24l-6.12 6.6a6.52 6.52 0 10.76 9.89 6.52 6.52 0 00-.3-9.5l6.1-6.57a12.44 12.44 0 0020.76-9.24c.01-3.54-1.48-6.71-3.84-8.96l6.14-6.6a6.5 6.5 0 008.67-.5 6.65 6.65 0 00-.04-9.32zM61.07 96.76c0 1.9-1.57 3.47-3.47 3.47a3.49 3.49 0 01-3.48-3.47c0-1.91 1.57-3.48 3.48-3.48a3.44 3.44 0 013.47 3.48zM72.9 79.73a7.5 7.5 0 010-14.96 7.5 7.5 0 010 14.96zM94.8 56.5a3.49 3.49 0 01-3.46-3.47c0-1.91 1.56-3.48 3.47-3.48 1.9 0 3.47 1.57 3.47 3.48 0 1.9-1.56 3.47-3.47 3.47zm3.6 74.24a6.52 6.52 0 10-9.24 9.23 6.52 6.52 0 109.24-9.23zm-4.62 6.37a3.49 3.49 0 01-3.47-3.47c0-1.91 1.56-3.48 3.47-3.48 1.9 0 3.47 1.57 3.47 3.48 0 1.9-1.56 3.47-3.47 3.47zM60.92 10.04a6.52 6.52 0 10-9.24 9.23 6.52 6.52 0 109.24-9.23zm-4.62 6.22a3.49 3.49 0 01-3.48-3.47c0-1.91 1.57-3.48 3.48-3.48 1.9 0 3.47 1.57 3.47 3.48 0 1.9-1.56 3.47-3.47 3.47zm26.26 10.69a10.67 10.67 0 10-15.08 15.09 10.67 10.67 0 0015.08-15.1zm-6.64 14.08a7.5 7.5 0 010-14.96 7.5 7.5 0 010 14.96zM37.52 62.6a12.44 12.44 0 100 24.89 12.44 12.44 0 000-24.9zM35.42 85a7.5 7.5 0 010-14.96 7.5 7.5 0 010 14.96zm102.14-10c0 6.87 5.57 12.44 12.44 12.44V62.6A12.44 12.44 0 00137.56 75zM0 62.6v24.84c6.87 0 12.63-5.57 12.63-12.44A12.63 12.63 0 000 62.6zM116.37 3.9a5.49 5.49 0 001.6-3.9h-10.95a5.49 5.49 0 009.35 3.9zm-37.48 0A5.49 5.49 0 0080.5 0H69.55a5.49 5.49 0 009.35 3.9zm-37.52 0a5.49 5.49 0 001.6-3.9H32.03a5.49 5.49 0 009.35 3.9zM144.5 0a5.49 5.49 0 005.5 5.53V0zM5.5 0H0v5.53A5.52 5.52 0 005.5 0zm2.06 26.95c-2.1-2.1-4.85-3.1-7.56-3.1V45.2c2.75 0 5.5-1.07 7.56-3.17a10.67 10.67 0 000-15.07zm134.88 15.11c2.06 2.1 4.81 3.13 7.56 3.13V23.86a10.67 10.67 0 00-7.56 18.2zm-33.81 104.05a5.49 5.49 0 00-1.6 3.89h10.95a5.49 5.49 0 00-9.35-3.9zm-37.48 0a5.49 5.49 0 00-1.6 3.89H80.5a5.49 5.49 0 00-9.35-3.9zm-37.52 0a5.49 5.49 0 00-1.6 3.89h10.95a5.49 5.49 0 00-9.35-3.9zM144.5 150h5.5v-5.5a5.49 5.49 0 00-5.5 5.5zM0 144.5v5.5h5.53c0-1.41-.53-2.79-1.6-3.9A5.71 5.71 0 000 144.5zm0-39.61v21.33a10.67 10.67 0 100-21.34zm142.44 18.2a10.6 10.6 0 007.56 3.13V104.9a10.67 10.67 0 00-7.56 18.2z'  stroke-width='1' stroke='none' fill='hsla(259, 0%, 0%, 0.03)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
}
</style>
