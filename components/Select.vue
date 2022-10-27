<template>
  <v-select
    :label="label"
    rounded
    outlined
    :rules="rules"
    :items="items"
    v-model="localModel"
    dense
  />
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "label",
    },
    rules: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
      default: () => [],
    },
    model: {
      type: [String, Number, Boolean],
      default: null,
    },
  },
  data() {
    return {
      localModel: this.model,
    };
  },
  watch: {
    model(val) {
      this.localModel = val;
    },
    localModel(val) {
      this.$emit("update:model", val);
    },
  },
};
</script>

<style></style>
