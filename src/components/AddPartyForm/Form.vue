<template>
  <v-expansion-panels v-model="open" multiple focusable>
    <v-expansion-panel
      v-for="(section, index) in forms"
      :key="index"
      style="width: 1000px;"
    >
      <v-expansion-panel-header style="text-align: right; direction: rtl">{{ section.title }}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row>
          <v-col
            cols="4"
            v-for="(input, index) in section.inputs"
            :key="index"
            :class="{ 'overlay' :input.inquired }"
          >
            <span v-if="input.type === 'text'">
              <v-text-field
                reverse
                :label="input.label"
                :rules="input.validations"
              ></v-text-field>
            </span>

            <span v-else-if="input.type === 'file'">
              <v-file-input
                :label="input.label"
              ></v-file-input>
            </span>

            <span v-else-if="input.type === 'autocomplete'">
              <v-autocomplete
                reverse
                :label="input.label"
                :items="input.Items"
              ></v-autocomplete>
            </span>

            <span v-else-if="input.type === 'select'">
              <v-select
                reverse
                :label="input.label"
                :items="input.Items"
              ></v-select>
            </span>

            <span v-else-if="input.type === 'combobox'">
              <v-combobox
                reverse
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
import Validations from "@/utils/validations.js"

export default {
  components: { Table },
  data: () => ({
    forms: [],
    open: [0,1,2,3],
    ...Validations
  }),
  created() {
    const db = require("@/apis/Inputs/PartyInfo.json");
    this.forms = [ ...db.PartyInfo ];
  }
}
</script>

<style>
.overlay {
  background-color: #ebf6ff;
}
</style>