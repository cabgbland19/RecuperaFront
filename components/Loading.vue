<template>
  <v-container
    v-if="isLoading"
    fluid
    fill-height
    style="
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      background: none;
      backdrop-filter: blur(10px);
    "
  >
    <v-row>
      <v-col class="d-flex flex-column justify-center align-center">
        <FulfillingBouncingCircleSpinner
          :animation-duration="1000"
          :size="100"
          :color="'#117864'"
        />
        <span class="text-h5 mt-8"> Cargando... </span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { FulfillingBouncingCircleSpinner } from "epic-spinners";
import { mapState } from "vuex";

export default {
  components: {
    FulfillingBouncingCircleSpinner,
  },
  computed: {
    ...mapState("app", ["isLoading"]),
  },
};
</script>

<style></style>
