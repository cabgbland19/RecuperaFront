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

    <v-card min-height="250px" class="cash d-flex justify-center align-center">
      <v-row>
        <!-- Nombre -->
        <v-col cols="12" class="text-center">
          <span v-text="data.name" />
        </v-col>
        <!-- Documento -->
        <v-col cols="12" class="text-center">
          <span v-text="data.document" />
        </v-col>
        <!-- Campaña -->
        <v-col cols="12" class="text-center">
          <span
            v-text="data.campaign"
            class="primary--text text-overline font-weight-bold"
          />
        </v-col>
        <!-- Rol -->
        <v-col cols="12" class="text-center">
          <v-chip color="white">
            <span v-text="data.rol" />
            <v-icon right color="primary"> mdi-shield-account </v-icon>
          </v-chip>
        </v-col>
      </v-row>
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
};
</script>

<style>
.cash {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 0, 0, 0.38139005602240894) 100%
  );
}
</style>
