<template>
  <v-app>
    <layout>
      <router-view />
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
