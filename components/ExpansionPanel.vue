<template>
  <v-expansion-panel>
    <v-expansion-panel-header> {{ label }} </v-expansion-panel-header>
    <v-expansion-panel-content>
      <slot />
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "label",
    },
  },
};
</script>
