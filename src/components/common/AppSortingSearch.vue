<template>
  <v-row>
    <v-col cols="6"> 
      <v-autocomplete
        v-model="priorityName"
        :items="Sorting.OrderBy"
        :label="priority"
        reverse
        style="direction: ltr;"
      ></v-autocomplete>
    </v-col>

    <v-col cols="3">
      <v-select
        v-model="priorityCondition"
        :items="Sorting.Order"
        :label="SortingPriority"
        reverse
        style="direction: ltr"
      >
      </v-select>
    </v-col>
    
    <v-col cols="3" align-self="center">
      <v-btn text color="error" @click="$emit('clicked')">
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
    priorityCondition: "",
    priorityName: "",
    Sorting: {
      OrderBy: ["نام خانوادگی", "نام", "شهر", "تاریخ تولد", "نام پدر"],
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
  }
};
</script>