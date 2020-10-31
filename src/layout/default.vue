<template>
  <v-card style="height: 100vh; border-radius: 0;" class="d-flex justify-end" flat>
    <AppNavBar />      
    <v-card dir="rtl" class="content overflow-y-auto">
      <slot />
    </v-card>
    <AppNavMenu />    
  </v-card>
</template>

<script>
import { AppNavBar, AppNavMenu } from "../components/components.js";

export default {
  components: { AppNavBar, AppNavMenu },
}
</script>

<style scoped>
.layout {
  margin: 54px 0 0 0;
  position: absolute;
}
.content {
  padding: 0 20px;
  margin: 54px 0 0 0;
  width: 100%;
}
</style>