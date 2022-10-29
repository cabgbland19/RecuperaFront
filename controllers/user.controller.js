import { Sweetalert } from "~/assets/sweetalert";

export const UsersController = {
  post: {
    user: async (payload) => {
      payload.username = payload.document;
      payload.password = payload.document;
      payload.cost_center =
        $nuxt.$store.state.localStorage.username.cost_center;
      payload.is_active = true;

      try {
        const { data } = await $nuxt.$api.post(`users/user/`, payload);

        if (data) {
          $nuxt.$store.dispatch("user.store/actResetState");
          $nuxt.$store.dispatch("app/actUpdateValue", {
            key: "isDialog",
            value: false,
          });
          $nuxt.refresh();
          Sweetalert.alert({
            title: "Excelente!",
            text: "Usuario creado",
            timer: 1500,
          });
        }
      } catch (error) {
        let errorResponse;
        errorResponse = error.response.data.error.username[0].toUpperCase();

        const firstLetterMessage = errorResponse.substr(0, 1);
        const restOfMessage = errorResponse
          .substr(1, errorResponse.length)
          .toLowerCase();

        Sweetalert.alert({
          icon: "error",
          title: "Ups!",
          text: firstLetterMessage + restOfMessage,
          timer: 2000,
        });
      }
    },
  },
  get: {
    users: async () => {
      const { data } = await $nuxt.$api.get("users/user/");
      return data.rows;
    },
  },
  put: {
    user: async (payload) => {
      const { data } = await $nuxt.$api.put(
        `users/user/${payload.id}/`,
        payload
      );

      if (data) {
        $nuxt.refresh();
        $nuxt.$store.dispatch("user.store/actResetState");
        $nuxt.$store.dispatch("app/actUpdateValue", {
          key: "isDialog",
          value: false,
        });
        Sweetalert.alert({
          title: "Excelente!",
          text: "Usuario actualizado",
          timer: 1500,
        });
      }
    },
  },
};
