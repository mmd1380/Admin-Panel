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
          <v-card class="drop-down pa-4" tile v-if="show">
            <v-row>
              <v-col>
                <AppChip 
                  v-for="(item, index) in getSavedFilters"
                  :key="index"
                  :propertyName="item.FilterName"
                  @click-chip="selectFilters(index)"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col v-for="(input, index) in inputs" :key="index" cols="6">
                <AppSearchPartyInputs 
                  :label="input.label"
                  :conditionItems="input.condition"
                  :value="savedValues[index]"
                />
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
                      <transition-group name="slide">
                        <AppSortingSearch
                          v-for="(item, idx) in rows"
                          :key="item.id"
                          :priority="item.label"
                          sorting-priority="شرط"
                          @clicked="deleteItem(idx)"
                        />
                      </transition-group>
                      <v-btn
                        color="primary"
                        elevation="2"
                        outlined
                        @click="AddRow()"
                      >
                        <v-icon>mdi-plus</v-icon>
                        <span>افزودن ترتیب نمایش</span>
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
                <v-btn text @click.stop="showModal()">دخیره جستجو</v-btn>
                <AppDialog />
              </v-col>
            </v-row>
          </v-card>
        </transition>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <transition-group name="slideX">
          <AppChip 
            v-for="(item, index) in getFilteredSearchData"
            :key="index"
            :propertyName="index"
            :propertyValue="item"
            @remove-chip="removeChip(index)"
          />
        </transition-group>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import AppSearchPartyInputs from "../global/AppSearchPartyInputs"
import AppSortingSearch from "./AppSortingSearch";
import AppChip from "./AppChip";
import AppDialog from "../global/AppDialog";

export default {
  name: "AppSearchBox",
  components: { AppSortingSearch, AppChip, AppDialog, AppSearchPartyInputs },
  created() { 
    this.$store.dispatch("getSavedFilters"); 
    this.$store.dispatch("getSearchInputs");
    this.inputs = this.$store.state.searchInputs; 
  },
  data: () => ({
    show: false,
    btn: "mdi-arrow-down-drop-circle",
    inputs: [],
    searchedValue: "",
    savedValues: [],
    expand: false,
    rowsLabel: ["اول", "دوم", "سوم", "چهارم", "پنجم", "ششم"],
    rows: [
      {
        id: 1,
        label: "اولویت اول",
      },
    ],
  }),
  computed: {
    getFilteredSearchData() { 
      if(!this.show)
        return this.$store.state.searchValues;
      return undefined;
    },
    getSavedFilters() { return this.$store.state.filterChips },
  },
  methods: {
    startSearch() {
      this.show = false;
    },
    AddRow() {
      const numOfRows = this.rows.length;
      this.rows.push({
        label: `اولویت ${this.rowsLabel[numOfRows]}`,
        id: Symbol()
      });
    },
    deleteItem(id) {
      this.rows.splice(id, 1);
      this.rows.forEach((el, index) => el.label = `اولویت ${this.rowsLabel[index]}`);
    },
    removeChip(label) {
      this.$store.commit("SET_FILTERED_SEARCH", label);
    },
    showModal() {
      this.$store.commit("SET_ACTIVE_MODAL", true);
    },
    selectFilters(index) {
      this.savedValues = this.getSavedFilters[index].Where;
      console.log(this.savedValues);
    }
  },
};
</script>

<style>
.drop-down {
  margin-top: -20px;
}
.slide-enter-active,
.slideX-enter-active,
.slide-leave-active,
.slideX-leave-active {
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
.slideX-leave-to,
.slideX-enter {
  opacity: 0;
}
.slideX-enter-to,
.slideX-leave {
  opacity: 1;
}
.v-text-field input::placeholder {
  color: #323031 !important;
  opacity: 1;
}
</style>
