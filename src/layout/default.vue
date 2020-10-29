<template>
  <v-card style="height: 100vh" class="d-flex">
    <v-card width="100%" style="border-radius: 0;" class="d-flex flex-column overflow-y-auto" flat>
      <AppNavBar />
      <v-card min-height="100%" dir="rtl" class="content">
        <slot />
      </v-card>
    </v-card>
    <AppNavMenu />
  </v-card>
</template>

<script>
import { AppNavBar, AppNavMenu} from "../components/compnents.js";

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
  padding: 54px 20px 10px;
}
</style>