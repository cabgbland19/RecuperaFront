<template>
  <v-row class="ma-0">
    <v-col
      class="d-flex justify-center align-center"
      style="background: #1178640f"
    >
      <v-row>
        <v-col cols="12" class="mb-5 text-center">
          <h3 class="primary--text">Cuenta</h3>
          <span v-text="manageGESUCSitemAccount" />
        </v-col>
      </v-row>
    </v-col>
    <v-col style="height: 100vh; overflow-y: scroll">
      <v-form ref="form" @submit.prevent="sendform" v-model="isFormValid">
        <!-- Informacion del asesor -->
        <v-row dense>
          <v-col cols="12" class="d-flex justify-center"
            ><h2 class="primary--text">Informacion de la cuenta</h2>
          </v-col>
          <v-col cols="6"
            ><Input
              label="Cuenta"
              :readonly="true"
              :model.sync="manageGESUCSitemAccount"
          /></v-col>
          <v-col cols="6"
            ><Input
              :readonly="true"
              label="Cantidad de servicios"
              :model.sync="manageGESUCSitemCanServ"
          /></v-col>

          <v-col cols="6"
            ><Input
              :readonly="true"
              label="Paquete"
              :model.sync="manageGESUCSitemPackage"
          /></v-col>
          <v-col cols="6">
            <Input
              :readonly="true"
              label="Aliado"
              :model.sync="manageGESUCSItemAlly"
          /></v-col>
          <v-col cols="6">
            <Input
              :readonly="true"
              label="Nivel"
              :model.sync="manageGESUCSitemlevel"
          /></v-col>
        </v-row>
        <!-- Informacion de la gestion-->
        <v-row dense>
          <v-col cols="12" class="d-flex justify-center"
            ><h2 class="primary--text">Informacion de la gestion</h2>
          </v-col>
          <v-col cols="6"
            ><Input
              :readonly="true"
              label="Subrazon"
              :model.sync="manageGESUCSitemSubReason"
          /></v-col>
          <v-col cols="6"
            ><Input
              :readonly="true"
              label="Fecha unica"
              :model.sync="manageGESUCSitemUniqueDate"
          /></v-col>
          <v-col cols="6"
            ><Input
              :readonly="true"
              label="Fecha caida"
              :model.sync="manageGESUCSitemFallDate"
          /></v-col>

          <v-col cols="6"
            ><Input
              :readonly="true"
              label="Mes gestion"
              :model.sync="manageGESUCSitemManageMonth"
          /></v-col>
          <v-col cols="6"
            ><Input
              :readonly="true"
              label="Dias"
              :model.sync="manageGESUCSitemDays"
          /></v-col>
          <v-col cols="6"
            ><Input
              :readonly="true"
              label="Mes marca"
              :model.sync="manageGESUCSitemMarkMonth"
          /></v-col>
          <v-col cols="6"
            ><Input
              :readonly="true"
              label="Gestor"
              :model.sync="manageGESUCSitemGestor"
          /></v-col>
        </v-row>
        <!-- Proceso -->
        <v-row dense>
          <v-col cols="12" class="d-flex justify-center"
            ><h2 class="primary--text">Proceso</h2>
          </v-col>
          <v-col cols="12"
            ><Select
              label="Estado de la gestion"
              :rules="rules.correct"
              :items="itemsSelectCorrect"
              :model.sync="manageGESUCSitemCorrect"
            ></Select
          ></v-col>
          <v-col cols="12">
            <Textarea
              label="Observacion"
              :model.sync="manageGESUCSitemObservation"
              :rules="rules.observation"
            ></Textarea
          ></v-col>

          <v-col cols="12">
            <Button
              label="Enviar"
              class="float-right"
              type="submit"
              :disabled="!isFormValid"
            />
          </v-col>
        </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
import Regex from "~/plugins/regex.js";
import { SubmitController } from "~/controllers/gtc/submit.controller";
import { propertiesGenerator } from "~/plugins/helpers";
import { VModelManageGESUCS } from "~/interfaces/manageGESUCS.interface";

export default {
  data() {
    return {
      isFormValid: true,
      rules: {
        correct: [(v) => !!v || "El estado de la gestion es requerido"],

        observation: [
          (v) => !!v || "La observacion es requerida",
          (v) =>
            Regex.onlyTextarea.test(v) || "Solo se aceptan letras y numeros",
          (v) => (!!v && v.length <= 400) || "Maximo 400 caracteres",
        ],
      },
      itemsSelectCorrect: [
        {
          text: "GESTION CORRECTA",
          value: "GESTION CORRECTA",
        },
        {
          text: "GESTION INCORRECTA",
          value: "GESTION INCORRECTA",
        },
      ],
      model: {
        cuenta: null,
        contacto: null,
        gtcaplica: null,
        tipo_solucion: null,
        motivo_gtc: null,
        campo_observacion: null,
        valor_diferencial: null,
        marcacion: null,
        solucionado: null,
        fecha_solcionado: new Date().toISOString().split("T")[0],
        gestor: null,
        valor_mensual: null,
        meses_ajuste: null,
        id_llamada: null,
        usuario_de_red: null,
        nombre_asesor: null,
        team_leader: null,
        gerente: null,
      },
    };
  },

  methods: {
    postGestion: SubmitController.post.gestion,

    sendform() {
      this.postGestion(this.manageGESUCSitem, "gesucs");
      // this.$refs.form.reset();
    },
  },

  computed: {
    // ...mapState("app", ["cuenta", "periodo", "notas_gtc"]),
    ...mapState("localStorage", ["username"]),

    ...propertiesGenerator([...VModelManageGESUCS], {
      path: "manageGESUCS",
      mut: "manageGESUCS/setProperty",
    }),
  },

  created() {
    // this.model.cuenta = this.cuenta;
    this.manageGESUCSitemGestor =
      this.username.name + " " + this.username.last_name;
  },

  watch: {
    manageGESUCSitemObservation(val) {
      if (val === null) {
        return;
      }
      this.manageGESUCSitemObservation = val.toUpperCase();
    },
  },
};
</script>

<style></style>
