<template>
  <v-row>
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
    <!-- <v-col class="mb-n16 ma-8"> -->
    <!-- :content="messages"
        :value="messages" -->
    <template v-if="getBaseByRol() === 'gtc'">
      <v-badge
        color="green"
        overlap
        class="display-1"
        v-if="!isSideBar"
        :content="item2DataEarring.length"
        style="position: absolute; top: 130px; left: 32px"
      >
        <v-btn
          icon
          color="primary"
          class="pa-7"
          @click="isSideBar = !isSideBar"
        >
          <v-icon x-large> mdi-calendar </v-icon>
        </v-btn>
      </v-badge>
    </template>

    <!-- </v-col> -->
    <v-col cols="2" style="border-right: 1px solid #117864" v-if="isSideBar">
      <v-list-item>
        <v-list-item-content>
          <h1 class="ml-4 primary--text">Pendientes</h1>
        </v-list-item-content>
        <v-list-item-avatar>
          <v-btn
            icon
            color="primary"
            class="ma-15 display: flex"
            @click="isSideBar = !isSideBar"
          >
            <v-icon> mdi-close-box </v-icon>
          </v-btn>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item
        v-for="(item, i) in item2DataEarring"
        :key="i"
        style="border-top: 1px solid #117864"
      >
        <v-list-item-content>
          <v-list-item-title>Cuenta: {{ item.cuenta }}</v-list-item-title>
          <v-list-item-title
            >Fecha gestion: {{ item.fecha_solcionado }}</v-list-item-title
          >
        </v-list-item-content>
        <v-list-item-avatar>
          <v-btn icon color="primary" class="pa-7" @click="manageEarring(item)">
            <v-icon large> mdi-arrow-right-bold </v-icon>
          </v-btn>
        </v-list-item-avatar>
      </v-list-item>
    </v-col>
    <v-col
      class="d-flex justify-center align-center"
      style="height: calc(100vh - 90px)"
    >
      <div class="text-center">
        <v-card
          width="350"
          height="350"
          class="rounded-circle d-flex flex-row justify-center align-center mt-12 mb-15"
        >
          <h1
            v-text="itemsDataGestion.length"
            class="primary--text display-3"
          />
        </v-card>

        <Button label="Gestionar" :action="manage" />
        <!-- <Button label="Cancelar" :outlined="true" :action="cancel" /> -->
      </div>
    </v-col>

    <!-- <v-col cols="4"> </v-col> -->
    <Dialog />
    <!-- <v-col cols="8">
      <Form />
    </v-col> -->
    <v-btn
      color="primary"
      dense
      rounded
      @click="postOutBreak"
      style="position: absolute; top: 900px; right: 40px"
    >
      <v-icon left> mdi-coffee-to-go </v-icon>Salir a Break
    </v-btn>
  </v-row>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { RecievedController } from "~/controllers/gtc/recieved.controller";
import { Sweetalert } from "~/assets/sweetalert";
import { LoginController } from "~/controllers/login.controller";
import { UsersBreakController } from "~/controllers/userBreak.controller";

export default {
  layout: "empty",
  middleware: "auth",
  data() {
    return {
      viewTitle: "Gestion base de datos",
      items: [],
      items2: [],
      isSideBar: false,
    };
  },
  async fetch() {
    const data1 = await this.getRecievedBase(this.getBaseByRol());
    const data2 = await this.getSubmitBase(this.getBaseByRol());
    this.items2 = data2.rows;

    this.items = data1.rows;
  },
  methods: {
    ...mapActions("manageGESUCS", ["actUpdateValue", "actResetState"]),

    getRecievedBase: RecievedController.get.recievedbase,
    getSubmitBase: RecievedController.get.submitBase,
    putRecievedBase: RecievedController.put.recievedbase,
    postLogout: LoginController.post.logout,
    postBreak: UsersBreakController.post.user,

    manage() {
      const register = this.itemsDataGestion[this.itemsDataGestion.length - 1];
      if (register) {
        const { cuenta, periodo, notas_gtc } = register;
        const dataGestion = { cuenta, periodo, notas_gtc };
        for (const key in dataGestion) {
          $nuxt.$store.dispatch("app/actUpdateValue", {
            key: key,
            value: dataGestion[key],
          });
        }
        this.actUpdateValue({
          key: `editedManage${this.getBaseByRol().toUpperCase()}`,
          value: register,
        });

        this.putRecievedBase(register, this.getBaseByRol());
        $nuxt.$router.push({ name: "managementForm" });
      } else {
        Sweetalert.alert({
          icon: "warning",
          title: "Ups!",
          text: "No hay gestiones disponibles",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    },
    postOutBreak() {
      const date = new Date(new Date().setSeconds(-36000));
      const datebreak = date.toISOString().split("T").join(" ").slice(0, -2);

      this.postBreak({
        user: this.username.name + " " + this.username.last_name,
        state: "salida break",
        datetimes: datebreak,
      });
      $nuxt.$emit("openWallBreak", true);
    },
    manageEarring(item) {
      const { cuenta, periodo, notas_gtc } = item;
      const dataGestion = { cuenta, periodo, notas_gtc };
      for (const key in dataGestion) {
        $nuxt.$store.dispatch("app/actUpdateValue", {
          key: key,
          value: dataGestion[key],
        });
      }
      $nuxt.$store.dispatch("manageGTC/actUpdateValue", {
        key: `editedManage${this.getBaseByRol().toUpperCase()}`,
        value: item,
      });
      $nuxt.$store.dispatch("app/actUpdateValue", {
        key: "isDialog",
        value: true,
      });
      $nuxt.$store.dispatch("app/actUpdateValue", {
        key: "nameFormDialog",
        value: "manageGTC",
      });
      $nuxt.$store.dispatch("app/actUpdateValue", {
        key: "widthDialog",
        value: "1800px;",
      });
      // this.actUpdateValue({
      //   key: `editedManage${this.getBaseByRol().toUpperCase()}`,
      //   value: item,
      // });
      // $nuxt.$router.push({ name: "managementForm" });
    },
    closeDialog() {
      $nuxt.$store.dispatch("manageGTC/actResetState");
      $nuxt.$store.dispatch("app/actUpdateValue", {
        key: "isDialog",
        value: false,
      });
    },
    cancel() {
      console.log("Cancelar");
    },
    logout() {
      this.postLogout(this.token);
    },
    getBaseByRol() {
      const { rol, cost_center } = this.username;
      let base;

      if (rol === "BACKOFFICE GESUCS") {
        if (cost_center === 160) {
          base = "gesucs";
        }

        if (cost_center === 162) {
          base = "gesucs";
        }
      }

      if (rol === "BACKOFFICE GTC") {
        if (cost_center === 160) {
          base = "gtc";
        }

        if (cost_center === 162) {
          base = "gtc";
        }
      }

      return base;
    },
  },
  computed: {
    ...mapState("localStorage", ["token", "username"]),

    itemsDataGestion() {
      if (!this.username) return [];

      return this.items.filter((v) => {
        let item;

        if (v.is_active === false) {
          const campaign = this.username.campaign
            .split(" ")
            .join("_")
            .toLowerCase();

          if (v.level.toLowerCase() === campaign) {
            item = v;
          }
        }

        return item;
      });
      // return this.items;
    },

    item2DataEarring() {
      if (!this.username) return [];

      return this.items2.filter((v) => {
        let item;

        // if (v.is_active === false) {
        //   const campaign = this.username.campaign
        //     .split(" ")
        //     .join("_")
        //     .toLowerCase();

        //   if (v.level.toLowerCase() === campaign) {
        //     item = v;
        //   }
        // }
        const name = this.username.name + " " + this.username.last_name;
        // console.log(
        //   "🚀 ~ file: management.vue ~ line 180 ~ returnthis.items.filter ~ name",
        //   name.toLowerCase()
        // );

        if (name.toLowerCase() === v.gestor.toLowerCase()) {
          item = v;
        }

        return item;
      });
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

<style>
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 5px 3px 0px rgb(17 120 100),
    0px 1px 5px 0px rgb(0 0 0 / 12%);
}
.v-badge__badge {
  font-size: 22px;
  padding: 21px 16px;
  border-radius: 100%;
  display: flex;
  align-items: center;
}
</style>
