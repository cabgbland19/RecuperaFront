<template>
  <v-form ref="form" @submit.prevent="sendform" v-model="isFormValid">
    <v-row dense>
      <!-- Nombre -->
      <v-col cols="12">
        <Input label="Nombres" :rules="rules.name" :model.sync="userItemName" />
      </v-col>
      <!-- Apellidos -->
      <v-col cols="12"
        ><Input
          label="Apellidos"
          :rules="rules.lastName"
          :model.sync="userItemLastName"
      /></v-col>
      <!-- Campaña -->
      <!-- <v-col cols="12"
        ><Select
          label="Campaña"
          :items="itemsSelectCampaign"
          :rules="rules.campaign"
          :model.sync="userItemCostCenter"
      /></v-col> -->
      <!-- Correo -->
      <v-col cols="12">
        <Input
          label="Correo"
          :rules="rules.email"
          :model.sync="userItemEmail"
        />
      </v-col>
      <!-- Rol -->
      <v-col cols="12"
        ><Select
          label="Rol"
          :items="itemsSelectRol"
          :rules="rules.rol"
          :model.sync="userItemRol"
      /></v-col>
      <!-- Contraseña -->
      <v-col cols="12" class="text-center">
        <Input
          v-if="!userItem.id || isNewPassword"
          label="Contraseña"
          :rules="rules.password"
          :model.sync="userItemPassword"
          type="password"
        />
        <Button v-else class="mb-4" :action="() => (isNewPassword = true)">
          <v-icon left>mdi-key</v-icon>Cambiar contraseña
        </Button>
      </v-col>
      <!-- Activar y desactivar -->
      <v-col cols="12" v-if="userItem.id"
        ><Select
          label="Estado"
          :items="itemsSelectIsActive"
          :model.sync="userItemIsActive"
      /></v-col>
      <!-- action -->
      <v-col cols="12" class="d-flex justify-end">
        <Button label="Cancelar" outlined :action="cancelAction" />
        <Button
          :label="userItem.id ? 'Editar' : 'Crear'"
          class="ml-4"
          type="submit"
          :disabled="!isFormValid"
        />
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { mapState } from "vuex";
import Regex from "~/plugins/regex.js";
import Select from "../Select.vue";
import { VModelUserInterface } from "~/interfaces/user.interface";
import { propertiesGenerator } from "~/plugins/helpers";
import { UsersController } from "~/controllers/user.controller";

export default {
  components: { Select },
  data() {
    return {
      isFormValid: true,
      rules: {
        name: [
          (v) => !!v || "El nombre es requerido",
          (v) => Regex.onlyLetters.test(v) || "Solo se aceptan letras",
        ],
        lastName: [
          (v) => !!v || "El apellido es requerido",
          (v) => Regex.onlyLetters.test(v) || "Solo se aceptan letras",
        ],
        campaign: [(v) => !!v || "La campaña es requerida"],
        email: [
          (v) => !!v || "El correo es requerido",
          (v) => Regex.onlyEmail.test(v) || "Correo invalido",
        ],
        // userName: [(v) => !!v || "El campo cuenta es requerido"],
        rol: [(v) => !!v || "El rol es requerido"],
        password: [(v) => !!v || "La contraseña es requerida"],
      },
      itemsSelectRol: [
        {
          text: "ADMINISTRADOR",
          value: 1,
        },
        {
          text: "BACKOFFICE GTC",
          value: 2,
        },
        {
          text: "BACKOFFICE GESUCS",
          value: 3,
        },
      ],
      itemsSelectCampaign: [
        {
          text: "SEGUNDO ANILLO",
          value: 160,
        },
        {
          text: "TERCER ANILLO",
          value: 162,
        },
      ],
      itemsSelectIsActive: [
        {
          text: "ACTIVAR",
          value: true,
        },
        {
          text: "DESACTIVAR",
          value: false,
        },
        // {
        //   text: "DESACTIVAR",
        //   value: false,
        // },
      ],
      isNewPassword: false,
    };
  },

  methods: {
    putUser: UsersController.put.user,
    postUser: UsersController.post.user,

    cancelAction() {
      $nuxt.$store.dispatch("user.store/actResetState");
      $nuxt.$store.dispatch("app/actUpdateValue", {
        key: "isDialog",
        value: false,
      });
    },
    sendform() {
      if (this.userItem.id) {
        this.putUser(this.userItem);
      } else {
        this.postUser(this.userItem);
      }
    },
  },

  computed: {
    ...mapState("app", ["isDialog"]),
    ...propertiesGenerator([...VModelUserInterface], {
      path: "user.store",
      mut: "user.store/setProperty",
    }),
  },

  watch: {
    isDialog(val) {
      this.isNewPassword = false;
      if (!this.userItem.id && val) {
        this.$refs.form.reset();
      }
    },
  },
};
</script>

<style></style>
