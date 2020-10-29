<template>
  <v-card style="overflow: hidden;" flat>
    <v-row no-gutters justify="center" class="search-box">
      <v-col cols="12">
        <v-text-field
          label="کد ملی"
          v-model="searchedValue"
          dir="ltr"
          maxlength="12"
          @keyup="filterNationalId()"
          @keyup.enter="startSearch()"
          outlined
        ></v-text-field>
        <div class="arrow-icon">
          <v-icon @click="openFilterField()" v-text="btn"> </v-icon>
        </div>
      </v-col>
    </v-row>
    <transition name="slide">
      <v-row justify="center" class="drop-down-menu" v-if="show">
        <v-col cols="12">
          <v-card class="d-flex flex-wrap justify-center align-content-around ">
            <v-row>
              <v-col
                v-for="input in inputs"
                :key="input"
                cols="6"
                class="d-flex justify-center align-center pa-0 mt-2"
              >
                <div class="input-search">
                  <v-text-field
                    :label="input"
                    outlined
                    dense
                    class="input-search"
                  ></v-text-field>
                </div>

                <div class="input-select">
                  <v-select
                    dense
                    flat
                    :items="items"
                    label=">"
                    outlined
                    solo
                    dir="ltr"
                  ></v-select>
                </div>
              </v-col>
            </v-row>
            <v-btn class="my-2" @click="getData()">ثبت</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </transition>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    show: false,
    btn: "mdi-arrow-down-drop-circle-outline",
    inputs: ["1نام خانوادگی", "نام", "شهر", "تاریخ تولد", "تست", "تست"],
    items: ["<", "==", ">", "!=", "<=", ">="],
    searchedValue: ""
  }),
  methods: {
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
.drop-down-menu {
  margin-top: -35px;
}
.input-fields {
  width: calc(95% / 2);
  text-align: center;
  margin: 0 8px;
}
.input-select {
  width: 80px;
  /* margin: 0 10px; */
  direction: ltr;
}
.slide-enter-active {
  transition: all 0.3s ease-in-out;
}
.slide-leave-active {
  transition: all 0.3s ease-in;
}
.slide-leave-to {
  transform: translateY(-50%);
  opacity: 0;
}
.slide-enter {
  transform: translateY(-50%);
  opacity: 1;
}
.input-search {
  width: 160px;
  height: auto;
}
</style>