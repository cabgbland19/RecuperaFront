<template>
  <div>
    <!-- Formularios de administrador -->
    <FormLogin v-if="nameForm === 'login'" />
    <FormUser v-if="nameForm === 'user'" />
    <!-- Formulario de base -->
    <FormManageGTC v-if="nameForm === 'manageGTC'" />
    <FormManageGESUCS v-if="nameForm === 'manageGESUCS'" />
  </div>
</template>

<script>
export default {
  props: {
    nameForm: {
      type: String,
      default: "login",
    },
  },
};
</script>

<style></style>
