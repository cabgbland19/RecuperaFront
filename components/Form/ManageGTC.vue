<template>
  <v-row class="ma-0">
    <!-- Cuadro informacion -->
    <v-col
      class="d-flex justify-center align-center"
      style="background: #1178640f"
    >
      <v-row>
        <v-col cols="12" class="mb-5 text-center">
          <h3 class="primary--text">MCH Cuenta</h3>
          <span>{{ cuenta }}</span>
        </v-col>
        <v-col cols="12" class="mb-5 text-center" v-if="periodo">
          <h3 class="primary--text">Periodo</h3>
          <span>{{ periodo }}</span>
        </v-col>
        <v-col
          cols="12"
          class="text-center px-15"
          v-if="transformText !== null"
        >
          <h3 class="primary--text">Nota</h3>
          <span>{{ transformText }}</span>
        </v-col>
      </v-row>
    </v-col>
    <!-- Formulario -->
    <v-col class="container-form">
      <v-form ref="form" @submit.prevent="sendform" v-model="isFormValid">
        <!-- Informacion del asesor -->
        <v-row>
          <v-col cols="12" class="d-flex justify-center"
            ><h2 class="primary--text">Informacion del asesor</h2>
          </v-col>
          <v-col cols="6"
            ><Input
              label="Gestor"
              :readonly="true"
              :model.sync="manageGTCitemGestor"
          /></v-col>
          <v-col cols="6"
            ><Input
              label="Usuario de red"
              :rules="rules.userRed"
              :model.sync="manageGTCitemNetworkUser"
          /></v-col>
          <v-col cols="6"
            ><Input
              label="Nombre del asesor"
              :rules="rules.asesorName"
              :model.sync="manageGTCitemAsesorName"
          /></v-col>
          <v-col cols="6"
            ><Input
              label="Team leader"
              :rules="rules.teamLeader"
              :model.sync="manageGTCitemTeamleader"
          /></v-col>
          <v-col cols="6">
            <Input
              label="Gerente"
              :rules="rules.boss"
              :model.sync="manageGTCitemBoss"
          /></v-col>
        </v-row>
        <!-- Informacion de la gestion-->
        <v-row>
          <v-col cols="12" class="d-flex justify-center"
            ><h2 class="primary--text">Informacion de la gestion</h2>
          </v-col>
          <v-col cols="6"
            ><Input
              label="Cuenta"
              :readonly="true"
              :model.sync="manageGTCitemAccount"
          /></v-col>
          <v-col cols="6"
            ><Select
              label="Contacto"
              :rules="rules.contact"
              :items="itemsContacts"
              :model.sync="manageGTCitemContact"
            ></Select
          ></v-col>
          <v-col cols="6"
            ><Input
              label="Id de llamada"
              :rules="rules.callId"
              :model.sync="manageGTCitemCallId"
          /></v-col>
          <v-col cols="6"
            ><Select
              label="GTC aplica"
              :rules="rules.gtcApply"
              :items="itemsApplyGtc"
              :model.sync="manageGTCitemApplyGtc"
            ></Select
          ></v-col>
          <v-col cols="6"
            ><Select
              label="Motivo GTC"
              :rules="rules.gtcReason"
              :items="itemsGtcReason"
              :model.sync="manageGTCiteMotiveGtc"
            ></Select
          ></v-col>
          <v-col cols="6">
            <Input
              label="Marcacion"
              maxlength="9"
              :rules="rules.mark"
              :model.sync="manageGTCitemMark"
          /></v-col>
          <v-col cols="6"
            ><Select
              label="Solucionado"
              :rules="rules.solution"
              :items="itemsSolution"
              :model.sync="manageGTCitemSolution"
            ></Select
          ></v-col>
          <v-col cols="6"
            ><Select
              label="Tipo de solucion"
              :rules="rules.typeSolution"
              :items="itemsTypeSolution"
              :model.sync="manageGTCItemTypeSolution"
            ></Select
          ></v-col>
          <v-col cols="6">
            <Input
              label="Fecha solucion"
              :readonly="true"
              :model.sync="manageGTCitemSolutionDate"
          /></v-col>
          <v-col cols="12">
            <Textarea
              label="Observacion"
              :rules="rules.observation"
              :model.sync="manageGTCitemObservation"
            ></Textarea
          ></v-col>
        </v-row>
        <!-- Ajuste -->
        <v-row>
          <v-col cols="12" class="d-flex justify-center"
            ><h2 class="primary--text">Ajuste:</h2>
          </v-col>
          <v-col cols="6"
            ><Input
              label="Valor diferencial"
              :rules="rules.differenceValue"
              :model.sync="manageGTCitemDifferenceValue"
          /></v-col>
          <v-col cols="6"
            ><Input
              label="Valor Mensual"
              :rules="rules.monthlyValue"
              :model.sync="manageGTCitemMonthValue"
          /></v-col>
          <v-col cols="6"
            ><Input
              label="Meses ajuste"
              :rules="rules.monthsAdjustments"
              :model.sync="manageGTCitemMonthadjust"
          /></v-col>
          <v-col cols="12" class="d-flex justify-end">
            <Button
              label="Gestion pendiente"
              v-if="route !== 'management'"
              color="warning"
              :action="sendform"
              :param="0"
              class="mr-4"
              :disabled="!isFormValid"
            />
            <Button
              v-if="route === 'management'"
              label="Cancelar"
              :outlined="true"
              :action="closeDialog"
            />
            <Button
              class="ml-4"
              label="Finalizar gestion"
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
import { SubmitController } from "~/controllers/gtc/submit.controller";
import Regex from "~/plugins/regex.js";
import { VModelManageGTC } from "~/interfaces/manageGTC.interface";
import { propertiesGenerator } from "~/plugins/helpers";

export default {
  data() {
    return {
      isFormValid: true,
      rules: {
        userRed: [
          (v) => !!v || "El campo usuario de red es requerido",
          (v) =>
            Regex.onlylettersAndNumbers.test(v) ||
            "Solo se aceptan letras y numeros",
        ],
        asesorName: [
          (v) => !!v || "El campo Nombre del asesor es requerido",
          (v) => Regex.onlyLetters.test(v) || "Solo se aceptan letras",
        ],
        teamLeader: [
          (v) => !!v || "El campo Team leader es requerido",
          (v) => Regex.onlyLetters.test(v) || "Solo se aceptan letras",
        ],
        boss: [
          (v) => !!v || "El campo Gerente es requerido",
          (v) => Regex.onlyLetters.test(v) || "Solo se aceptan letras",
        ],
        account: [(v) => !!v || "El campo Cuenta es requerido"],
        contact: [(v) => !!v || "El campo Contacto es requerido"],
        callId: [
          (v) => !!v || "El campo Id de llamada es requerido",
          (v) => Regex.onlyNumber.test(v) || "Solo se aceptan numeros",
        ],
        gtcApply: [(v) => !!v || "El campo GTC aplica es requerido"],
        gtcReason: [(v) => !!v || "El campo Motivo GTC es requerido"],
        mark: [
          (v) => !!v || "El campo Marcacion es requerido",
          (v) => Regex.onlyLetters.test(v) || "Solo se aceptan letras",
        ],
        solution: [(v) => !!v || "El campo Solucionado es requerido"],
        typeSolution: [(v) => !!v || "El campo Tipo de solucion es requerido"],
        observation: [
          (v) => !!v || "El campo Observacion es requerido",
          (v) =>
            Regex.onlyTextarea.test(v) || "Solo se aceptan letras y numeros",
          (v) => (!!v && v.length <= 400) || "Maximo 400 caracteres",
        ],
        differenceValue: [
          (v) => !!v || "El campo Valor diferencial es requerido",
          (v) => Regex.onlyNumber.test(v) || "Solo se aceptan numeros",
        ],
        monthlyValue: [
          (v) => !!v || "El campo Valor Mensual es requerido",
          (v) => Regex.onlyNumber.test(v) || "Solo se aceptan numeros",
        ],
        monthsAdjustments: [
          (v) => !!v || "El campo Meses ajuste es requerido",
          (v) => Regex.onlyNumber.test(v) || "Solo se aceptan numeros",
        ],
      },
      itemsContacts: [
        {
          text: "SI",
          value: "SI",
        },
        {
          text: "NO",
          value: "NO",
        },
      ],
      itemsApplyGtc: [
        {
          text: "SI",
          value: "SI",
        },
        {
          text: "NO",
          value: "NO",
        },
      ],
      itemsGtcReason: [
        {
          text: "NO REALIZA CAMBIO DE TARIFA",
          value: "NO REALIZA CAMBIO DE TARIFA",
        },
        {
          text: "NO CORRESPONDE A UNO27",
          value: "NO CORRESPONDE A UNO27",
        },
        {
          text: "NO APLICA CAMPAÑA",
          value: "NO APLICA CAMPAÑA",
        },
        {
          text: "NO REALIZA AJUSTE",
          value: "NO REALIZA AJUSTE",
        },
        {
          text: "COBROS ADICIONALES",
          value: "COBROS ADICIONALES",
        },
        {
          text: "CANCELACION NO EJECUTADA",
          value: "CANCELACION NO EJECUTADA",
        },
        {
          text: "GTC ESCALADA ERRONEAMENTE",
          value: "GTC ESCALADA ERRONEAMENTE",
        },
        {
          text: "TARIFA ERRADA",
          value: "TARIFA ERRADA",
        },
        {
          text: "INFORMACION ERRADA",
          value: "INFORMACION ERRADA",
        },
        {
          text: "NO REALIZA SUSPENSION",
          value: "NO REALIZA SUSPENSION",
        },
      ],
      itemsTypeSolution: [
        {
          text: "NO CORRESPONDE A UNO27",
          value: "NO CORRESPONDE A UNO27",
        },
        {
          text: "GTC NO APLICA",
          value: "GTC NO APLICA",
        },
        {
          text: "SE APLICA CAMPAÑA",
          value: "SE APLICA CAMPAÑA",
        },
        {
          text: "YA GESTIONADO POR OTRO CANAL",
          value: "YA GESTIONADO POR OTRO CANAL",
        },
        {
          text: "SE REALIZA AJUSTE",
          value: "SE REALIZA AJUSTE",
        },
        {
          text: "RETENCION POSTERIOR",
          value: "RETENCION POSTERIOR",
        },
        {
          text: "SE APLICA CAMBIO DE TARIFA",
          value: "SE APLICA CAMBIO DE TARIFA",
        },
        {
          text: "CANCELACION POSTERIOR",
          value: "CANCELACION POSTERIOR",
        },
        {
          text: "SE REALIZA CANCELACION",
          value: "SE REALIZA CANCELACION",
        },
        {
          text: "SE AGENDA VISITA",
          value: "SE AGENDA VISITA",
        },
        {
          text: "YA CANCELADO",
          value: "YA CANCELADO",
        },
        {
          text: "SE GENERA RETENCION CRUZADA",
          value: "SE GENERA RETENCION CRUZADA",
        },
        {
          text: "ACLARACION DE INFORMACION",
          value: "ACLARACION DE INFORMACION",
        },
        {
          text: "PROCESO PQR",
          value: "PROCESO PQR",
        },
        {
          text: "NO ES PROCEDENTE",
          value: "NO ES PROCEDENTE",
        },
      ],
      itemsSolution: [
        {
          text: "SI",
          value: "SI",
        },
        {
          text: "NO",
          value: "NO",
        },
      ],
    };
  },

  methods: {
    postGestion: SubmitController.post.gestion,
    putGestion: SubmitController.put.gestion,

    sendform(val) {
      if (this.route === "management") {
        this.manageGTCitemState = true;
        this.putGestion(this.manageGTCitem, "gtc");
        return;
      }
      if (val === 0) {
        this.manageGTCitemState = false;
      } else {
        this.manageGTCitemState = true;
      }
      this.postGestion(this.manageGTCitem, "gtc");
      this.$refs.form.reset();
    },
    closeDialog() {
      $nuxt.$store.dispatch("manageGTC/actResetState");
      $nuxt.$store.dispatch("app/actUpdateValue", {
        key: "isDialog",
        value: false,
      });
    },
  },

  computed: {
    route() {
      return $nuxt.$route.name;
    },
    ...mapState("app", ["cuenta", "periodo", "notas_gtc"]),
    ...mapState("localStorage", ["username"]),

    ...propertiesGenerator([...VModelManageGTC], {
      path: "manageGTC",
      mut: "manageGTC/setProperty",
    }),

    transformText() {
      if (this.notas_gtc === undefined) {
        return null;
      }
      return (
        this.notas_gtc !== null &&
        this.notas_gtc[0] +
          this.notas_gtc.slice(1, this.notas_gtc.length).toLowerCase()
      );
    },
  },

  created() {
    this.manageGTCitemGestor =
      this.username.name + " " + this.username.last_name;

    this.manageGTCitemAccount = this.cuenta;
  },

  watch: {
    manageGTCitemGestor(val) {
      if (val === null) {
        return;
      }
      this.manageGTCitemGestor = val.toUpperCase();
    },
    manageGTCitemNetworkUser(val) {
      if (val === null) {
        return;
      }
      this.manageGTCitemNetworkUser = val.toUpperCase();
    },
    manageGTCitemAsesorName(val) {
      if (val === null) {
        return;
      }
      this.manageGTCitemAsesorName = val.toUpperCase();
    },
    manageGTCitemTeamleader(val) {
      if (val === null) {
        return;
      }
      this.manageGTCitemTeamleader = val.toUpperCase();
    },
    manageGTCitemBoss(val) {
      if (val === null) {
        return;
      }
      this.manageGTCitemBoss = val.toUpperCase();
    },
    manageGTCitemMark(val) {
      if (val === null) {
        return;
      }
      this.manageGTCitemMark = val.toUpperCase();
    },
    manageGTCitemObservation(val) {
      if (val === null) {
        return;
      }
      this.manageGTCitemObservation = val.toUpperCase();
    },
  },
};
</script>

<style>
.container-form {
  height: calc(100vh - 200px);
  overflow-y: scroll;
}
.container-form::-webkit-scrollbar {
  width: 4px; /* Tamaño del scroll en vertical */
  height: 8px; /* Tamaño del scroll en horizontal */
}
.container-form::-webkit-scrollbar-thumb {
  background: #117864;
  border-radius: 4px;
}
</style>
