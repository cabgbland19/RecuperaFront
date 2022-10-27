<template>
  <v-container
    transition="dialog-bottom-transition"
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
      transition: opacity 2s;
    "
  >
    <v-row>
      <v-col class="d-flex flex-column justify-center align-center">
        <!-- <FulfillingBouncingCircleSpinner
          :animation-duration="1000"
          :size="100"
          :color="'#117864'"
        /> -->
        <v-img src="/img/hang_out.svg" max-height="500" max-width="500" />
        <Button label="Volver de break" class="mt-10" :action="postOutBreak" />
        <!-- <span class="text-h5 mt-8"> Cargando... </span> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import { UsersBreakController } from "~/controllers/userBreak.controller";

// import { FulfillingBouncingCircleSpinner } from "epic-spinners";
// import { mapState } from "vuex";

export default {
  //   components: {
  //     FulfillingBouncingCircleSpinner,
  //   },
  //   computed: {
  //     ...mapState("app", ["isLoading"]),
  //   },
  data() {
    return {
      isLoading: false,
    };
  },

  created() {
    $nuxt.$on("openWallBreak", (val) => {
      this.isLoading = val;
    });
  },
  computed: {
    ...mapState("localStorage", ["token", "username"]),
  },
  methods: {
    postBreak: UsersBreakController.post.user,

    postOutBreak() {
      const date = new Date(new Date().setSeconds(-36000));
      const datebreak = date.toISOString().split("T").join(" ").slice(0, -2);
      this.postBreak({
        user: this.username.name + " " + this.username.last_name,
        state: "entrada break",
        datetimes: datebreak,
      });
      this.isLoading = false;
    },
  },
};
</script>

<style></style>
