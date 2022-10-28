import { Sweetalert } from "~/assets/sweetalert";

export const EndBaseController = {
  post: {
    endBase: async (payload) => {
      const { data } = await $nuxt.$api.post("/bases/finalbase/", payload);

      if (data) {
        $nuxt.$router.push({ name: "management" });
        $nuxt.$store.dispatch("recover.store/actResetState");
        Sweetalert.alert({
          title: "Excelente!",
          text: "Gestion terminada",
          timer: 1500,
        });
        return true;
      }
    },
  },
  //   put: {
  //     gestion: async (payload, base) => {
  //       await $nuxt.$api.put(`bases/enviar/${base}/${payload.id}/`, payload);
  //       $nuxt.refresh();
  //       $nuxt.$store.dispatch("app/actUpdateValue", {
  //         key: "isDialog",
  //         value: false,
  //       });
  //       $nuxt.$store.dispatch("manageGTC/actResetState");
  //       Sweetalert.alert({
  //         title: "Excelente!",
  //         text: "Registro Gestionado",
  //         timer: 1500,
  //       });
  //     },
  //   },
};
