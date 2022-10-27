<template>
  <v-textarea
    :label="label"
    rounded
    outlined
    :rules="rules"
    v-model="localModel"
    maxlenght="400"
    counter
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
    model: {
      type: [String, Number],
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
