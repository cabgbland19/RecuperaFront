<template>
  <v-form @submit.prevent="sendform" v-model="isFormValid">
    <v-row justify="center">
      <v-col cols="7">
        <Input
          label="Usuario"
          :rules="rules.user"
          :model.sync="user.username"
        />
      </v-col>
      <v-col cols="7">
        <Input
          label="Contraseña"
          :rules="rules.password"
          type="password"
          :model.sync="user.password"
        />
      </v-col>
      <v-col cols="7" class="d-flex justify-center">
        <Button label="Ingresar" :disabled="!isFormValid" type="submit" />
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { LoginController } from "~/controllers/login.controller";

export default {
  data() {
    return {
      isFormValid: true,
      rules: {
        user: [
          (v) => !!v || "El campo Usuario es requerido",
          (v) => /^[a-zñ]+$/.test(v) || "Solo se acepta letras",
        ],
        password: [(v) => !!v || "El campo Contraseña es requerido"],
      },
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    postLogin: LoginController.post.login,

    sendform() {
      // $nuxt.$router.push({ name: "management" });

      this.postLogin(this.user);
    },
  },
  watch: {
    user(val) {
      this.$nextTick(() => {
        this.user = isNaN(val) ? val : null;
      });
    },
  },
  mounted() {
    $nuxt.$store.dispatch("localStorage/actResetState");
  },
};
</script>

<style></style>
