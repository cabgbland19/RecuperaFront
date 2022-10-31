<template>
  <v-app>
    <v-main>
      <!-- <v-container fill-height fluid class="primary"> -->
      <v-row class="fill-height ma-0">
        <v-col class="d-flex justify-center align-center mr-n16">
          <v-img
            src="/img/interview.svg"
            max-height="550"
            max-width="550"
          ></v-img>
        </v-col>
        <v-col class="d-flex flex-column justify-center align-center">
          <div class="elevation-2 pa-4 rounded-xl pa-8 text-center py-16">
            <h1 class="primary--text display-1 mb-15">Recover</h1>
            <Nuxt />
          </div>
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
