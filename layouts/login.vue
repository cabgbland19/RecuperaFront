<template>
  <v-app>
    <v-main>
      <!-- <v-container fill-height fluid class="primary"> -->
      <v-row class="fill-height ma-0">
        <v-col class="primary d-flex justify-center align-center">
          <v-img src="/img/nakamoto.svg"></v-img>
        </v-col>
        <v-col class="d-flex flex-column justify-center align-center" cols="5">
          <h1 class="primary--text display-3 mb-15">GBO</h1>
          <Nuxt />
        </v-col>
      </v-row>
      <!-- </v-container> -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "layoutLogin",
};
</script>
