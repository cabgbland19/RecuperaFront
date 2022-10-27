<template>
  <div>
    <Form nameForm="manageGTC" v-if="rol === 'GTC'" />
    <Form nameForm="manageGESUCS" v-if="rol === 'GESUCS'" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  layout: "empty",
  middleware: "auth",

  computed: {
    ...mapState("localStorage", ["username"]),

    rol() {
      const { rol } = this.username;
      return rol.split(" ")[1];
    },
  },
};
</script>

<style></style>
