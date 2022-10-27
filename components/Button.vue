<template>
  <v-btn
    :color="color"
    :outlined="outlined"
    rounded
    @click="type !== 'submit' && action(param)"
    :type="type"
    :icon="isIcon"
    :param="param"
    :disabled="disabled"
    :fab="fab"
  >
    <template v-if="isIcon">
      <v-icon v-text="iconText" />
    </template>
    <template v-else>
      {{ label }}
    </template>
    <slot />
  </v-btn>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    isIcon: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: null,
    },
    action: {
      type: Function,
      default: () => null,
    },
    type: {
      type: String,
      default: "button",
    },
    param: {
      type: Number,
      default: null,
    },
    iconText: {
      type: String,
      default: "button",
    },
    color: {
      type: String,
      default: "primary",
    },
    fab: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
