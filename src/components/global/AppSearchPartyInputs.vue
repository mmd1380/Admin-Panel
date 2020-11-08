<template>
  <v-row no-gutters>
    <v-col md="7">
      <v-text-field
        reverse
        flat
        :label="label"
        dense
        style="border-radius: 0px 10px 10px 0px;"
        :value="value"
        v-model="inputValues[label]"
      ></v-text-field>
    </v-col>
    <v-col md="3" class="mr-md-5">
      <v-select
        dense
        flat
        :items="conditionItems"
        label="شرط"
        reverse
        style="border-radius: 10px 0px 0 10px;direction: ltr"
      ></v-select>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SearchPartyInputs",
  data: function() {
    return {
      inputValues: this.$store.state.searchValues,
    }
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      required: false,
      default: () => ""
    },
    conditionItems: {
      type: Array,
      required: true
    }
  },
}
</script>