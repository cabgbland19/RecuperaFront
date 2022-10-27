import { Sweetalert } from "~/assets/sweetalert";

export const LoginController = {
  post: {
    login: async (payload) => {
      try {
        const { data } = await $nuxt.$api.post("login/", payload);
        $nuxt.$store.dispatch("localStorage/actUpdateValue", {
          key: "token",
          value: data.token,
        });
        $nuxt.$store.dispatch("localStorage/actUpdateValue", {
          key: "username",
          value: data.username,
        });

        if (data.username.rol === "ADMINISTRADOR") {
          $nuxt.$router.push({ name: "admin-users" });
        } else {
          $nuxt.$router.push({ name: "management" });
        }
      } catch (error) {
        Sweetalert.alert({
          icon: "error",
          title: "Ups!",
          text: "Usuario o contraseña incorrecta",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    },
    logout: async (token) => {
      await $nuxt.$api.post(`logout/?token=${token}`);
      $nuxt.$router.push({ name: "index" });
      $nuxt.$store.dispatch("localStorage/actResetState");
    },
  },
};
