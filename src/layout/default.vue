<template>
  <v-card style="height: 100vh; border-radius: 0;" class="d-flex justify-end" flat>
    <AppNavBar />      
    <v-card dir="rtl" class="content overflow-y-auto">
      <div class="d-flex flex-column align-start pa-2">
        <h1>{{ title }}</h1>
        <slot />
      </div>
    </v-card>
    <AppNavMenu />    
  </v-card>
</template>

<script>
import { AppNavBar, AppNavMenu } from "@/components/components.js";

export default {
  components: { AppNavBar, AppNavMenu },
  data: () => ({
    title: ""
  }),
  watch: {
    $route: {
      deep: true,
      immediate: true,
      handler: function(to) {
        if(to.name == "Home") {
          this.title = "صفحه اصلی";
        } else if(to.name == "Party") {
          this.title = "اشخاص"
        }
      }
    }
  }
}
</script>

<style scoped>
.layout {
  margin: 54px 0 0 0;
  position: absolute;
}
.content {
  padding: 0 20px;
  margin: 60px 0 0 0;
  width: 100%;
}
</style>