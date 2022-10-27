<template>
  <v-row>
    <!-- header -->
    <v-col cols="12" class="primary d-flex justify-center">
      <h1 v-text="viewTitle" class="white--text mt-3" />
      <v-btn
        class="ma-2 mt-4 white"
        color="primary"
        outlined
        rounded
        @click="logout"
        style="position: absolute; right: 0"
      >
        Cerrar sesion
        <v-icon right> mdi-exit-run </v-icon>
      </v-btn>
    </v-col>
    <!-- users -->
    <v-col cols="12">
      <v-row class="mx-5 mt-3">
        <template v-for="user in itemsUsers">
          <v-col
            cols="3"
            :key="user.id"
            class="mb-5"
            v-if="username && username.cost_center === user.cost_center"
          >
            <v-card
              min-height="200px"
              rounded="xl"
              style="box-shadow: 0px 2px 2px 0px rgb(17 120 100)"
            >
              <v-row class="pa-5">
                <v-col>
                  <v-chip
                    class="ma-2"
                    :color="user.is_active ? 'success' : 'error'"
                    outlined
                  >
                    <v-icon left> mdi-brightness-1 </v-icon>
                    {{ user.is_active ? "Activo" : "Inactivo" }}
                  </v-chip>
                </v-col>
                <!-- Menu flotante -->
                <v-col class="d-flex justify-end mb-n10">
                  <MenuFloat>
                    <v-list>
                      <v-list-item>
                        <!-- <Button
                          :isIcon="true"
                          color="#F39C12"
                          iconText="mdi-pencil"
                          :action="edit(user)"
                        /> -->

                        <v-btn @click="edit(user)">Editar </v-btn>
                      </v-list-item>
                    </v-list>
                  </MenuFloat>
                </v-col>
                <!-- Nombre -->
                <v-col cols="12" class="text-center">
                  <span class="primary--text">Nombre</span> <br />
                  <span v-text="user.name" />
                </v-col>
                <!-- Apellido -->
                <v-col cols="12" class="text-center">
                  <span class="primary--text">Apellido</span> <br />
                  <span v-text="user.last_name" />
                </v-col>
                <!-- Campaña -->
                <v-col cols="12" class="text-center">
                  <span class="primary--text">Campaña</span> <br />
                  <!-- <span>Segundo Anillo</span> -->
                  <v-chip class="ma-2" color="primary">
                    <v-icon left class="mb-1"> mdi-hoop-house </v-icon>
                    <span v-text="user.campaign" />
                  </v-chip>
                </v-col>
                <!-- Correo -->
                <v-col cols="12" class="text-center">
                  <span class="primary--text">Correo</span> <br />
                  <span v-text="user.email" />
                </v-col>
                <!-- Nombre del usuario -->
                <v-col cols="12" class="text-center">
                  <span class="primary--text">Nombre del usuario</span> <br />
                  <span v-text="user.username" />
                </v-col>
                <!-- Rol -->
                <v-col cols="12" class="text-center">
                  <span class="primary--text">Rol</span> <br />
                  <!-- <span>Admin</span> -->
                  <v-chip class="ma-2" color="primary">
                    <v-icon left> mdi-shield-account </v-icon>
                    <span v-text="user.rol" />
                  </v-chip>
                </v-col>
              </v-row> </v-card
          ></v-col>
        </template>
      </v-row>
    </v-col>
    <!-- modal formulario -->
    <Dialog />
    <!-- Boton de agregar -->
    <Button
      :fab="true"
      style="position: fixed; right: 10px; bottom: 10px"
      :action="edit"
    >
      <v-icon dark> mdi-plus </v-icon>
    </Button>
  </v-row>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import { UsersController } from "~/controllers/user.controller";
import { LoginController } from "~/controllers/login.controller";
import { VModelUserInterface } from "~/interfaces/user.interface";
import { propertiesGenerator } from "~/plugins/helpers";

export default {
  layout: "empty",
  middleware: "auth",

  data() {
    return {
      viewTitle: "Usuarios",
      itemsUsers: [],
    };
  },

  async fetch() {
    const data = await this.getUsers();
    this.itemsUsers = data;
  },

  computed: {
    ...mapState("localStorage", ["token", "username"]),
    ...mapGetters("user.store", ["editedUser"]),

    ...propertiesGenerator([...VModelUserInterface], {
      path: "user.store",
      mut: "user.store/setProperty",
    }),

    // filterItemsUsers() {
    //   const { campaign } = this.username;
    // },
  },

  methods: {
    ...mapActions("user.store", ["actUpdateValue", "actResetState"]),
    // ...mapActions("app", ["actUpdateValue"]),
    getUsers: UsersController.get.users,
    postLogout: LoginController.post.logout,

    logout() {
      this.postLogout(this.token);
    },

    edit(user) {
      $nuxt.$store.dispatch("app/actUpdateValue", {
        key: "isDialog",
        value: true,
      });
      $nuxt.$store.dispatch("app/actUpdateValue", {
        key: "nameFormDialog",
        value: "user",
      });
      $nuxt.$store.dispatch("app/actUpdateValue", {
        key: "widthDialog",
        value: "500px",
      });
      // $nuxt.$emit("changeDialog", true);
      if (user) {
        this.actUpdateValue({ key: "editedUser", value: user });
      } else {
        this.$nextTick(() => {
          this.userItemIsActive = true;
        });
        this.actResetState();
      }
    },
  },

  watch: {
    "$fetchState.pending"(val) {
      $nuxt.$store.dispatch("app/actUpdateValue", {
        key: "isLoading",
        value: val,
      });
    },
  },
};
</script>

<style></style>
