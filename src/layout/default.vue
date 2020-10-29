<template>
  <v-card style="height: 100vh" class="d-flex">
    <v-card width="100%" style="border-radius: 0;" class="d-flex flex-column overflow-y-auto" flat>
      <AppNavBar />
      <slot />
    </v-card>
    <AppNavMenu />
  </v-card>
</template>

<script>
import AppNavBar from "../components/AppNav";
import AppNavMenu from "../components/AppNavMenu";

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { AppNavBar, AppNavMenu },
  data: () => ({
    tab: null,
    tabs: [
      {
        url: "/",
        name: "خانه"
      },
      {
        url: "/add-party",
        name: "اشخاص"
      }
    ]
  })
}
</script>

<style scoped>
.layout {
  margin: 54px 0 0 0;
  position: absolute;
}
</style>