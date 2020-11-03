<template>
  <v-card dir="rtl" width="100%" class="elevation-0 pa-2" height="100vh">
    <v-tabs
      color="primary"
    >
      <v-tab class="font-weight-bold">شخص حقیقی</v-tab>
      <v-tab class="font-weight-bold">شخص حقوقی</v-tab>
      
      <v-tab-item
        v-for="n in 2"
        :key="n"
      >
        <v-divider></v-divider>
        <AppSearchBox />
        <AppPartiesTable />
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import { AppSearchBox, AppPartiesTable } from "../components/components.js";

export default {
  components: { AppSearchBox, AppPartiesTable }
}
</script>