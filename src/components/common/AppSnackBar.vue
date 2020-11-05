<template>
  <v-snackbar
    v-model="snackbar"
    :timeout="timeout"
    color="primary"
    elevation="40"
    rounded="pill"
    class="text-lg-h6 font-weight-bold"
    dir="rtl"
  >
    جستجو با عنوان
    {{ searchName }}
    با موفقیت ذخیره شد.
    <v-icon left class="mr-4">mdi-check</v-icon>
  </v-snackbar>
</template>

<script>
export default {
  data: () => ({
    searchName:'',
    snackbar: false,
    timeout: 2000,
  }),
  created() {
    this.$store.subscribe((mutation, state) => {
      if(mutation.type === "SET_SNACKBAR") {
        this.snackbar = true;
        this.searchName = state.snackbar;
      }
    })
  }
}
</script>