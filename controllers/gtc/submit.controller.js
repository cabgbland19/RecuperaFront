import { Sweetalert } from "~/assets/sweetalert";

export const SubmitController = {
  post: {
    gestion: async (payload, base) => {
      const { data } = await $nuxt.$api.post(`bases/enviar/${base}/`, payload);

      if (data) {
        Sweetalert.alert({
          title: "Excelente!",
          text: "Registro Gestionado",
          timer: 1500,
        });
        $nuxt.$router.push({ name: "management" });
      }
    },
  },
  put: {
    gestion: async (payload, base) => {
      await $nuxt.$api.put(`bases/enviar/${base}/${payload.id}/`, payload);
      $nuxt.refresh();
      $nuxt.$store.dispatch("app/actUpdateValue", {
        key: "isDialog",
        value: false,
      });
      $nuxt.$store.dispatch("manageGTC/actResetState");
      Sweetalert.alert({
        title: "Excelente!",
        text: "Registro Gestionado",
        timer: 1500,
      });
    },
  },
};
