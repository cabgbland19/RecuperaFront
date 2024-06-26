import { Sweetalert } from "~/assets/sweetalert";

export const SubmitController = {
  post: {
    gestion: async (payload) => {
      const { data } = await $nuxt.$api.post("/bases/recover/", payload);

      if (data) {
        $nuxt.$store.dispatch("recover.store/actResetState");

        Sweetalert.alert({
          title: "Excelente!",
          text: "Cliente registrado",
          timer: 1500,
        });
        return true;
        // $nuxt.$router.push({ name: "management" });
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
