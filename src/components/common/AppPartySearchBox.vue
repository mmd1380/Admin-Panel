<template>
  <v-card style="overflow: hidden;" dir="rtl" flat>
    <v-row no-gutters justify="start" class="search-box">
      <v-col cols="9" dir="ltr">
        <v-text-field
          label="کد ملی"
          v-model="searchedValue"
          maxlength="12"
          @keyup="filterNationalId()"
          @keyup.enter="startSearch()"
          outlined
          append-icon="mdi-account-search"
          :prepend-icon="btn"
          @click:prepend="openFilterField()"
          @click:append="search()"
          style="text-align: right !important;"
        ></v-text-field>
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
                    :label="input"
                    outlined
                    dense
                    style="border-radius: 0px 10px 10px 0px;"
                  ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-select
                      dense
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
                <v-btn color="primary" class="mx-2">
                  جستجو
                </v-btn>
                <v-btn text>
                  دخیره جستجو
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </transition>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    show: false,
    btn: "mdi-arrow-down-drop-circle",
    inputs: ["نام خانوادگی", "نام", "شهر", "تاریخ تولد", "تست", "تست"],
    items: ["<", "==", ">", "!=", "<=", ">="],
    searchedValue: ""
  }),
  methods: {
    search() {
      console.log("Hello World")
    },
    openFilterField() {
      this.show = !this.show;
    },
    getData() {
      this.$store.dispatch("fetchData");
      this.show = false;
    },
    startSearch() {
      const db = this.$store.state.data;
      const filteredArr = db.find(el => el.NationalID == this.searchedValue);
      this.$store.commit("SET_DATA_TABLE", filteredArr);
    },
    filterNationalId() {
      if (this.searchedValue.length === 3 || this.searchedValue.length === 10) {
        this.searchedValue += "-";
      }
    }
  }
};
</script>

<style>
.arrow-icon {
  width: 20px;
  height: 20px;
  position: relative;
  top: -67%;
  right: 20px;
  cursor: pointer;
}
.search-box {
  height: 80px;
  margin-top: 10px;
}
.drop-down {
  margin-top: -36px;
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
