<template>
  <v-card style="overflow: hidden;" dir="rtl" flat>
    <v-row no-gutters justify="start" class="mt-2">
      <v-col cols="12">
        <v-row justify="space-between" align="center">
          <v-col cols="9">
            <v-text-field
              label="کد ملی"
              v-model="searchedValue"
              maxlength="12"
              outlined
              reverse
              hide-details="auto"
              append-icon="mdi-account-search"
              :prepend-inner-icon="btn"
              @click:prepend-inner="show = !show"
            ></v-text-field>
          </v-col>
          <v-col cols="3" class="text-center">
            <v-btn large color="primary" :to="{ name: 'AddParty' }">
              <v-icon right>mdi-plus</v-icon>
              <span>ایجاد شخص جدید</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="start">
      <v-col cols="9">
        <transition name="slide">
          <v-card class="drop-down pa-4" v-if="show">
            <v-row>
              <v-col
                v-for="input in inputs"
                :key="input"
                cols="6"
              >
                <v-row no-gutters>
                  <v-col cols="8">
                    <v-text-field
                      reverse
                      :label="input"
                      outlined
                      dense
                      style="border-radius: 0px 10px 10px 0px;"
                      v-model="inputValues[input]"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-select
                      dense
                      reverse
                      flat
                      :items="items"
                      label=">"
                      outlined
                      solo
                      style="border-radius: 10px 0px 0 10px;"
                    ></v-select>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn color="primary" class="mx-2" @click.stop="startSearch()">جستجو</v-btn>
                <v-btn text>دخیره جستجو</v-btn>
              </v-col>
            </v-row>
          </v-card>
        </transition>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-chip
          dir="ltr"
          class="ma-2"
          close
          color="primary"
          outlined
          @click:close="chip3 = false"
          v-for="(item, index) in getFilteredSearchData"
          :key="item"
        >{{ index }}: {{ item }}</v-chip>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    show: false,
    chip: true,
    btn: "mdi-arrow-down-drop-circle",
    inputs: ["نام خانوادگی", "نام", "شهر", "تاریخ تولد", "تست", "تست"],
    items: ["<", "==", ">", "!=", "<=", ">="],
    inputValues: {},
    searchedValue: "",
  }),
  computed: {
    getFilteredSearchData() {
      return this.$store.state.filteredSearch;
    }
  },
  methods: {
    getData() {
      this.$store.dispatch("fetchData");
      this.show = false;
    },
    startSearch() {
      this.$store.commit("SET_FILTERED_SEARCH", this.inputValues);
      this.show = false;
      console.log(this.$store.state.filteredSearch);
    }
  }
};
</script>

<style>
.drop-down {
  margin-top: -20px;
}
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s;
}
.slide-leave-to, .slide-enter {
  transform: translateY(-50px);
  opacity: 0;
}
.slide-enter-to, .slide-leave {
  transform: translateY(0px);
  opacity: 1;
}
</style>
