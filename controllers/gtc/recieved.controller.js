export const RecievedController = {
  //   post: {
  //     login: async (payload) => {
  //       const { data } = await $nuxt.$api.post("login/", payload);

  //       if (data.token) {
  //         $nuxt.$store.dispatch("localStorage/actUpdateValue", {
  //           key: "token",
  //           value: data.token,
  //         });
  //         $nuxt.$store.dispatch("localStorage/actUpdateValue", {
  //           key: "username",
  //           value: data.username,
  //         });
  //         $nuxt.$router.push({ name: "management" });
  //       }
  //     },
  //   },
  get: {
    recievedbase: async (base) => {
      const { data } = await $nuxt.$api.get(`bases/recibida/${base}`);
      return data;
    },
    submitBase: async (base) => {
      const { data } = await $nuxt.$api.get(`bases/enviar/${base}`);
      return data;
    },
  },
  put: {
    recievedbase: async (payload, base) => {
      delete payload.is_active;
      payload.is_active = true;

      $nuxt.$store.dispatch("manageGTC/actUpdateKey", {
        object: "editedManageGTC",
        key: "fecha_solcionado",
        value: new Date().toISOString().split("T")[0],
      });

      await $nuxt.$api.put(`bases/recibida/${base}/${payload.id}/`, payload);
    },
  },
};
