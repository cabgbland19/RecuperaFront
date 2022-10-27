<template>
  <v-text-field
    v-model="localModel"
    rounded
    outlined
    :maxlength="maxlength"
    :counter="maxlength ? true : false"
    :label="label"
    :readonly="readonly"
    :rules="rules"
    :type="type"
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
    maxlength: {
      type: String,
      default: null,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: "text",
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
