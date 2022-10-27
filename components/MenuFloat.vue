<template>
  <v-menu bottom left rounded="xl">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>

    <slot />
    <!-- <v-row>
      <v-col>
        <Button />
      </v-col>
    </v-row> -->
  </v-menu>
</template>
