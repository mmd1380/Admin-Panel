<template>
  <v-app>
    <layout>
      <router-view />Hello world
    </layout>
  </v-app>
</template>

<script>
import layout from "./layout/default";

export default {
  name: 'App',
  components: {
    layout
  }
};
</script>
