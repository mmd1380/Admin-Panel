<template>
  <v-row>
    <v-col cols="6">
      <v-autocomplete
        :items="Sorting.OrderBy"
        :label="priority"
        reverse
        style="direction: ltr"
      ></v-autocomplete>
    </v-col>

    <v-col cols="3">
      <v-select
        :items="Sorting.Order"
        :label="SortingPriority"
        reverse
        style="direction: ltr"
      >
      </v-select>
    </v-col>

    <v-col cols="3" center>
      <v-btn text color="error" @click="clicked">
        <v-icon>mdi-delete</v-icon>
        <span style="font-weight: bold"> حذف </span>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "AppSortingSearch",
  data: () => ({
    Sorting: {
      OrderBy: ["نام خانوادگی", "نام", "شهر", "تاریخ تولد", "تست"],
      Order: ["صعودی", "نزولی"],
    },
  }),
  props: {
    priority: {
      type: String,
      required: true,
    },
    SortingPriority: {
      type: String,
      required: true,
    },
    action: Boolean,
  },
  methods: {
    clicked() {
      this.$emit("clicked");
    },
  },
};
</script>

<style scoped></style>
