<template>
  <v-card dir="rtl" flat class="elevation-0" height="100vh">
    <v-tabs
      color="primary"
    >
      <v-tab>شخص حقیقی</v-tab>
      <v-tab>شخص حقوقی</v-tab>

      <v-tab-item
        v-for="n in 2"
        :key="n"
      >
        <AppForm />
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import { AppForm } from "../components/compnents.js";

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    AppForm
  }
}
</script>

<style>

</style>