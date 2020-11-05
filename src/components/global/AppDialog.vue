<template>
  <v-dialog width="360" v-model="$store.state.activeModal">
    <v-card tile dir="rtl" class="px-4 py-2">
      <v-card-title>ذخیره فیلتر جستجو</v-card-title>
      <v-divider></v-divider>
      <v-card-text class="my-2 text-subtitle">
        با ذخیره کردن فیلتر جستجو امکان دسترسی به فیلتر مورد نظر در سریع ترین حالت ممکن خواهید داشت
      </v-card-text>
      <v-text-field
        label="فیلتر جستجو"
        reverse
      ></v-text-field>
      <v-card-actions>
        <v-btn color="primary" @click="setModal()">ثبت فیلتر</v-btn>
        <v-btn color="primary" text class="mx-2" @click="setModal()">انصراف</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "AppDialog",
  methods: {
    setModal() {
      this.$store.commit("SET_ACTIVE_MODAL", false)
    }
  }
}
</script>