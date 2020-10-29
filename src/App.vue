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

<style scoped>
html {
  scroll-behavior: smooth;
}
@font-face {
  font-family: 'b nazanin';
  src: url('http://cdn.bayan.ir/blog/templates/shared/fonts/BNazanin.eot?view#iefix') format('embedded-opentype'),
  url('http://cdn.bayan.ir/blog/templates/shared/fonts/BNazanin.woff?view') format('woff'),
  url('http://cdn.bayan.ir/blog/templates/shared/fonts/BNazanin.ttf?view') format('truetype');
}

#app {
  font-family: 'b nazanin';
}
</style>
