<template>
  <v-card dir="rtl" class="elevation-0">
    <v-row no-gutters justify="start" class="mt-2">
      <v-col cols="12">
        <v-row justify="space-between" align="center">
          <v-col cols="9">
            <v-text-field
              v-model="searchedValue"
              placeholder="جستجو در بین افراد حقیقی"
              maxlength="12"
              outlined
              reverse
              hide-details="auto"
              append-inner-icon="mdi-account-search"
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
              <v-col v-for="input in inputs" :key="input" cols="6">
                <v-row no-gutters>
                  <v-col md="7">
                    <v-text-field
                      reverse
                      flat
                      :label="input"
                      dense
                      style="border-radius: 0px 10px 10px 0px"
                      v-model="inputValues[input]"
                    ></v-text-field>
                  </v-col>
                  <v-col md="3" class="mr-md-5">
                    <v-select
                       dense
                       flat
                      :items="items"
                      label="شرط"
                      reverse
                      style="border-radius: 10px 0px 0 10px;direction: ltr"
                    ></v-select>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-col class="shrink">
                  <v-btn text color="indigo" @click="expand = !expand">
                    <v-icon> mdi-arrow-down-drop-circle </v-icon>
                    <span style="font-size: medium; font-weight: bold">
                      تنظیمات ترتیب نمایش سطری اطلاعات
                    </span>
                  </v-btn>

                  <v-expand-transition>
                    <v-card flat v-show="expand" class="mx-auto">
                      <AppSortingSearch
                        v-for="(item, id) in rows"
                        :key="id"
                        :priority="item.label"
                        sorting-priority="شرط"
                        @clicked="deleteItem(id)"
                      />

                      <v-btn
                        color="primary"
                        elevation="2"
                        outlined
                        @click="AddRow()"
                      >
                        <v-icon>mdi-plus</v-icon>
                        افزودن ترتیب نمایش
                      </v-btn>
                    </v-card>
                  </v-expand-transition>
                </v-col>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn color="primary" class="mx-2" @click.stop="startSearch()"
                  >جستجو</v-btn
                >
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
          >{{ index }}: {{ item }}</v-chip
        >
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import AppSortingSearch from "./AppSortingSearch";
export default {
  components: { AppSortingSearch },
  data: () => ({
    show: false,
    chip: true,
    btn: "mdi-arrow-down-drop-circle",
    inputs: ["نام خانوادگی", "نام", "شهر", "تاریخ تولد"],
    items: ["کوچکتر از", "مساوی", "بزرگتر از", "مخالف", "شروع با", "پایان با"],
    inputValues: {},
    searchedValue: "",
    expand: false,
    rowsLabel: ["اول", "دوم", "سوم", "چهارم", "پنجم"],
    rows: [
      {
        id: 1,
        label: "اولویت اول",
      },
    ],
  }),
  computed: {
    getFilteredSearchData() {
      return this.$store.state.filteredSearch;
    },
    sortRows() {
      return 1
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
    },
    AddRow() {
      //let arr = ["اول", "دوم", "سوم", "چهارم", "پنجم"];
      let numOfRows = this.rows.length;
      this.rows.push({
        label: `اولویت ${this.rowsLabel[numOfRows]}`,
        id: numOfRows + 1,
      });
    },
    deleteItem(id) {
      this.rows.splice(id, 1)
    },
  },
};
</script>

<style>
.drop-down {
  margin-top: -20px;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}
.slide-leave-to,
.slide-enter {
  transform: translateY(-50px);
  opacity: 0;
}
.slide-enter-to,
.slide-leave {
  transform: translateY(0px);
  opacity: 1;
}
.v-text-field input::placeholder {
  color: #323031 !important;
  opacity: 1;
}
</style>
