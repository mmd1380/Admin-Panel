<template>
  <v-card dir="rtl" flat class="elevation-0 pa-2" height="100vh">
    <div class="d-flex justify-space-between align-center">
      <h1>اشخاص</h1>
      <div class="d-flex">
        <v-btn large color="primary">ایجاد شخص جدید</v-btn>
        <v-btn outlined min-width="50px" large class="mx-2 pa-0">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </div>
    </div>
    <v-tabs
      color="primary"
    >
      <v-tab>شخص حقیقی</v-tab>
      <v-tab>شخص حقوقی</v-tab>

      <v-tab-item
        v-for="n in 2"
        :key="n"
      >
        <AppSearchBox />
        <AppForm />
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import { AppForm, AppSearchBox } from "../components/compnents.js";

export default {
  components: { AppForm, AppSearchBox }
}
</script>

<style>

</style>