<template>
  <v-expansion-panels v-model="open" multiple focusable>
    <v-expansion-panel
      v-for="(section, index) in forms"
      :key="index"
      class="section"
    >
      <v-expansion-`panel-header style="text-align: right; direction: rtl">{{ section.title }}</v-expansion->
      <v-expansion-panel-content>
        <v-row>
          <v-col
            cols="4"
            v-for="(input, index) in section.inputs"
            :key="index"
            :class="{ 'overlay' :input.inquired }"
            style="direction: ltr;"
          >
            <span v-if="input.type === 'text'">
              <v-text-field
                reverse
                :label="input.label"
                v-model="values[input.label]"
                :rules="[required()]"
              ></v-text-field>
              salam
            </span>

            <span v-else-if="input.type === 'file'">
              <v-file-input
                reverse
                :label="input.label"
                v-model="values[input.label]"
              ></v-file-input>
            </span>

            <span v-else-if="input.type === 'autocomplete'">
              <v-autocomplete
                reverse
                :label="input.label"
                :items="input.Items"
                v-model="values[input.label]"
              ></v-autocomplete>
            </span>

            <span v-else-if="input.type === 'select'">
              <v-select
                reverse
                :label="input.label"
                v-model="values[input.label]"
                :items="input.Items"
              ></v-select>
            </span>

            <span v-else-if="input.type === 'combobox'">
              <v-combobox
                reverse
                v-model="values[input.label]"
                :label="input.label"
                :items="input.Items"
              ></v-combobox>
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-if="section.name === 'address' || section.name === 'contact'">
            <Table :type="section.name"/>
          </v-col>
          <v-col v-if="section.name === 'mainInfo'">
            <span class="mx-2">استعلام گیری مجدد</span>
            <v-icon>mdi-refresh</v-icon>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import Table from "./Table";
import Validations from "@/utils/validations.js";

export default {
  components: { Table },
  data: () => ({
    forms: [],
    open: [0,1,2,3,4],
    values: {},
    ...Validations
  }),
  created() {
    const db = require("@/apis/Inputs/PartyInfo.json");
    this.forms = [ ...db.PartyInfo ];
  },
  computed: {
    valid() {
      return v => !!v || "پر کنید"
    }
  }
}
</script>

<style>
.section {
  width: 1000px;
}
.overlay {
  background-color: #ebf6ff;
}
</style>