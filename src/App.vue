<template>
  <v-app>
    <layout>
      <transition name="slide">
        <router-view />
      </transition>
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
.slide-enter-active, .slide-leave-active {
  transition: all .5s;
}
.slide-enter-active {
  transition-delay: .5s;
}
.slide-enter
,.slide-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
.slide-enter-to,
.slide-leave {
  opacity: 1;
  transform: translateX(0px);
}
</style>
