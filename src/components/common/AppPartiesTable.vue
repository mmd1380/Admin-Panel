<template>
  <v-row>
    <v-col>
      <v-data-table
        :headers="headers"
        :items="desserts"
        class="elevation-3"
        hide-default-footer
      ></v-data-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    desserts: [],
    headers: [
      {
        text: "نام",
        align: "start",
        sortable: false,
        value: "name"
      },
      { text: "کد ملی", value: "id" },
      { text: "نام پدر", value: "fatherName" },
      { text: "تاریخ تولد", value: "birthDate" },
      { text: "شهر محل تولد", value: "city" },
      { text: "شغل", value: "job" }
    ]
  }),
  created() {
    const db = require("@/apis/parties.json");
    db.forEach(el => {
      this.desserts.push({
        name: el.FullName,
          id: el.NationalID,
          fatherName: el.FatherName,
          birthDate: el.BirthDate,
          city: el.BirthCity,
          job: el.Job
      })
    });
  }
}
</script>