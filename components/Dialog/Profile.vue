<template>
  <v-menu :close-on-content-click="false" :max-width="250" rounded="xl">
    <!-- Boton que abre el menu -->
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="ma-2 mt-2 white"
        color="white"
        rounded
        v-bind="attrs"
        v-on="on"
        style="position: absolute; left: 0"
      >
        <v-icon color="primary" left> mdi-account </v-icon>
        Perfil
      </v-btn>
    </template>

    <v-card min-height="240px" class="d-flex justify-center align-center">
      <v-row class="px-2">
        <!-- Campaña -->
        <v-col
          cols="12"
          class="text-center primary"
          style="position: absolute; top: 0; left: 0; right: 0"
        >
          <span
            v-text="convertFirstLetterUppercase(data.campaign)"
            class="white--text font-weight-bold"
          />
        </v-col>
        <!-- Nombre -->
        <v-col cols="12" class="text-center mt-12 field-name">
          <span v-text="convertFirstLetterUppercase(data.name)" />
        </v-col>
        <!-- Documento -->
        <v-col cols="12" class="text-center mt-n5 primary--text">
          <span v-text="data.document" />
        </v-col>

        <!-- Rol -->
        <v-col cols="12" class="text-center">
          <v-chip color="white">
            <v-icon left color="primary"> mdi-shield-account </v-icon>
            <span
              v-text="convertFirstLetterUppercase(data.rol)"
              class="text-body-1"
            />
          </v-chip>
        </v-col> </v-row
      ><datalist></datalist>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  // computed: {
  //   campaign() {
  //     const text = this.data.campaign.toLowerCase();
  //     return text[0].toUpperCase() + text.slice(1);
  //   },
  // },
  methods: {
    convertFirstLetterUppercase(val) {
      const text = val.toLowerCase();
      return text[0].toUpperCase() + text.slice(1);
    },
  },
};
</script>

<style>
.field-name {
  text-transform: capitalize !important;
}
/* .field-campaign {
  text-transform: lowercase !important;
}  */
/* .field-campaign::first-letter {
  text-transform: uppercase !important;
} */
/* .cash { */
/* background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 0, 0, 0.38139005602240894) 100%
  ); */
/* border: 5px solid red; */
/* } */
</style>
