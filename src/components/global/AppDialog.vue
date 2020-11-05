<template>
  <v-dialog width="360" v-model="$store.state.activeModal">
    <v-card tile dir="rtl" class="py-2 font-weight-bold">
      <v-card-title>ذخیره فیلتر جستجو</v-card-title>
      <v-divider></v-divider>
      <v-card-text class="mt-2 mb-5">
        با ذخیره کردن فیلتر جستجو امکان دسترسی به فیلتر مورد نظر در سریع ترین حالت ممکن خواهید داشت.
      </v-card-text>
      <v-text-field
          v-model="filter"
          class="mx-md-6"
          label="نام فیلتر"
          outlined
          dense
          reverse
      ></v-text-field>
      <v-card-actions  class="mx-md-3">
        <v-btn class="green lighten-2 white--text " @click="setModal();successfullySaved()">ثبت فیلتر</v-btn>
        <v-btn class="red lighten-2 mx-2 white--text"  @click="setModal()">انصراف</v-btn>
      </v-card-actions>


    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "AppDialog",
  data: () => ({
    filter: ""
  }),
  methods: {
    setModal() {
      this.$store.commit("SET_ACTIVE_MODAL", false);

    },
    successfullySaved(){
      this.$store.commit("SET_SNACKBAR", this.filter);
    }
  }
}
</script>