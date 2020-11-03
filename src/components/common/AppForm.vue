<template>
  <v-expansion-panels v-model="open" multiple focusable>
    <v-expansion-panel dir="ltr">
      <a name="main"><v-expansion-panel-header style="text-align: right; direction: rtl">
        <template v-slot:default="{ open }">
          <v-row>
            <v-col
                cols="3"
                style="
                font-weight: bolder;
                text-align: right;
                font-size: 28px;
                color: #2c2c72;
              "
            >
              مشخصات اصلی
            </v-col>
            <v-col cols="9" class="text--secondary mx-5 text-right rtl">
              <v-fade-transition leave-absolute>
                <span style="font-size: 20px" v-if="open" key="0">
                  مشخصات اصلی شخص را وارد کنید
                </span>
                <span v-else key="1">
                  {{ Party.name }} {{ Party.Lname }}
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header></a>
      <v-expansion-panel-content>
        <form>
          <v-row>
            <v-col>
              <v-menu
                  ref="endMenu"
                  :close-on-content-click="false"
                  :return-value.sync="Party.BirthDate"
                  offset-y
                  min-width="200px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                      v-model="Party.BirthDate"
                      label="تاریخ تولد"
                      prepend-icon="mdi-calendar"
                      reverse
                      readonly
                      v-bind="attrs"
                      class="pr-1"
                      v-on="on"
                      :rules="[() => !!Party.BirthDate || 'این قسمت باید پر شود']"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn
                      text
                      color="primary"
                      @click="$refs.endMenu.isActive = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                      text
                      color="primary"
                      @click="$refs.endMenu.save(date)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col>
              <v-text-field
                  v-model="Party.NationalID"
                  label="کد ملی"
                  counter="10"
                  maxlength="10"
                  required
                  reverse
                  hint="e.g : 002-144449-1"
                  :rules="[() => !!Party.NationalID || 'این قسمت باید پر شود']"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-autocomplete
                  style="direction: ltr"
                  v-model="Party.nation"
                  :items="Party.nations"
                  label="ملیت"
                  clearable
                  dense
                  reverse
                  filled
                  :rules="[() => !!Party.nation || 'این قسمت باید پر شود']"
              ></v-autocomplete>
            </v-col>
          </v-row>

          <br />

          <v-row
              style="
              direction: rtl;
              font-weight: bolder;
              font-size: large;
              padding-bottom: 15px;
            "
          >
            پس از استعلام
          </v-row>
          <v-row
              style="border-top: solid #aeaeae 1px; background-color: #ebf6ff"
              class="py-10"
          >
            <v-col>
              <v-text-field
                  class="rtl"
                  v-model="Party.Lname"
                  label="نام خانوادگی"
                  required
                  reverse
                  :rules="[() => !!Party.Lname || 'این قسمت باید پر شود']"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                  class="rtl"
                  v-model="Party.name"
                  label="نام"
                  required
                  reverse
                  :rules="[() => !!Party.name || 'این قسمت باید پر شود']"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                  class="rtl"
                  v-model="Party.FatherName"
                  label="نام پدر"
                  required
                  reverse
                  :rules="[() => !!Party.FatherName || 'این قسمت باید پر شود']"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row style="background-color: #ebf6ff" class="py-10">
            <v-col>
              <v-autocomplete
                  v-model="Party.IssuanceCity"
                  :items="Party.cities"
                  label="شهر محل صدور شناسنامه"
                  required
                  clearable
                  dense
                  reverse
                  filled
                  :rules="[() => !!Party.IssuanceCity || 'این قسمت باید پر شود']"
              ></v-autocomplete>
            </v-col>
            <v-col>
              <v-menu
                  ref="endMenu"
                  :close-on-content-click="false"
                  :return-value.sync="Party.IssuanceDate"
                  offset-y
                  min-width="200px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                      v-model="Party.IssuanceDate"
                      label="تاریخ صدور شناسنامه"
                      prepend-icon="mdi-calendar"
                      reverse
                      readonly
                      v-bind="attrs"
                      class="pr-1"
                      v-on="on"
                      :rules="[() => !!Party.IssuanceDate || 'این قسمت باید پر شود']"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn
                      text
                      color="primary"
                      @click="$refs.endMenu.isActive = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                      text
                      color="primary"
                      @click="$refs.endMenu.save(date)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col>
              <v-text-field
                  class="rtl"
                  v-model="Party.IdNo"
                  label="شماره شناسنامه"
                  required
                  reverse
                  :rules="[() => !!Party.IdNo || 'این قسمت باید پر شود']"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row
              style="
              border-bottom: solid #aeaeae 1px;
              background-color: #ebf6ff;
            "
              class="py-10"
          >
            <v-col>
              <v-autocomplete
                  v-model="Party.Prefix"
                  :items="Party.Prefixes"
                  label="پیشوند"
                  required
                  clearable
                  dense
                  reverse
                  filled
                  :rules="[() => !!Party.Prefix || 'این قسمت باید پر شود']"
              ></v-autocomplete>
            </v-col>
            <v-col>
              <v-autocomplete
                  v-model="Party.Gender"
                  :items="Party.Genders"
                  label="جنسیت"
                  required
                  clearable
                  dense
                  reverse
                  filled
              ></v-autocomplete>
            </v-col>
            <v-col>
              <v-autocomplete
                  v-model="Party.BirthCity"
                  :items="Party.cities"
                  label="شهر محل تولد"
                  required
                  clearable
                  dense
                  reverse
                  filled
                  :rules="[() => !!Party.BirthCity || 'این قسمت باید پر شود']"
              ></v-autocomplete>
            </v-col>
          </v-row>

          <v-row class="py-10">
            <v-col>
              <v-autocomplete
                  v-model="Party.LivingCity"
                  :items="Party.cities"
                  label="شهر محل سکونت"
                  required
                  clearable
                  dense
                  reverse
                  filled
                  :rules="[() => !!Party.LivingCity || 'این قسمت باید پر شود']"
              ></v-autocomplete>
            </v-col>
            <v-col>
              <v-text-field
                  v-model="Party.NationalID"
                  label="نام مستعار"
                  counter="20"
                  required
                  reverse
                  :rules="[() => !!Party.NationalID || 'این قسمت باید پر شود']"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-autocomplete
                  style="direction: ltr"
                  v-model="Party.Religion"
                  :items="Party.Religions"
                  label="دین"
                  clearable
                  dense
                  reverse
                  filled
                  :rules="[() => !!Party.Religion || 'این قسمت باید پر شود']"
              ></v-autocomplete>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-file-input
                  v-model="files"
                  color="deep-purple accent-4"
                  counter
                  label="آپلود فایل عکس"
                  multiple
                  placeholder="فایل خود را آپلود کنید"
                  prepend-icon="mdi-paperclip"
                  outlined
              >
                <template v-slot:selection="{ index, text }">
                  <v-chip
                      v-if="index < 2"
                      color="deep-purple accent-4"
                      dark
                      label
                      large
                  >
                    {{ text }}
                  </v-chip>
                  <span
                      v-else-if="index === 2"
                      class="overline grey--text text--darken-3 mx-2"
                  >
                    +{{ files.length - 2 }} File(s)
                  </span>
                </template>
              </v-file-input>
            </v-col>
          </v-row>
        </form>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel dir="ltr">
      <a name="complement"><v-expansion-panel-header style="text-align: right; direction: rtl">
        <template v-slot:default="{ open }">
          <v-row>
            <v-col
                cols="3"
                style="
                font-weight: bolder;
                text-align: right;
                font-size: 28px;
                color: #2c2c72;
              "
            >
              اطلاعات تکمیلی
            </v-col>
            <v-col cols="9" class="text--secondary mx-5 text-right rtl">
              <v-fade-transition leave-absolute>
                <span style="font-size: 20px" v-if="open" key="0">
                  اطلاعات تکمیلی را وارد کنید.
                </span>

                <span v-else>
                    <span v-if="Party.Role.length !== 0">نقش ها : </span>
                    <span class="mx-2" v-for="role in Party.Role" :key="role">{{ role }}</span>
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header></a>
      <v-expansion-panel-content>
        <form>
          <v-row>
            <v-col>
              <v-menu
                  ref="endMenu"
                  :close-on-content-click="false"
                  :return-value.sync="Party.RetirementDate"
                  offset-y
                  min-width="200px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                      v-model="Party.RetirementDate"
                      label="تاریخ تقریبی بازنشستگی"
                      prepend-icon="mdi-calendar"
                      reverse
                      readonly
                      v-bind="attrs"
                      class="pr-1"
                      v-on="on"
                      :rules="[() => !!Party.RetirementDate || 'این قسمت باید پر شود']"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn
                      text
                      color="primary"
                      @click="$refs.endMenu.isActive = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                      text
                      color="primary"
                      @click="$refs.endMenu.save(date)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col>
              <v-text-field
                  v-model="Party.ChildrenNo"
                  label="تعداد فرندان"
                  type="number"
                  min="0"
                  max="10"
                  required
                  reverse
                  :rules="[() => !!Party.ChildrenNo || 'این قسمت باید پر شود']"
              ></v-text-field>
            </v-col>

            <v-col>
              <v-combobox
                  v-model="Party.Role"
                  :items="Party.Roles"
                  label="نقش ها"
                  multiple
                  reverse
                  chips
                  large
                  :rules="[() => Party.Role.length != 0 || 'این قسمت باید پر شود']"
              ></v-combobox>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-menu
                  ref="endMenu"
                  :close-on-content-click="false"
                  :return-value.sync="Party.PassportExpiryDate"
                  offset-y
                  min-width="200px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                      v-model="Party.PassportExpiryDate"
                      label="تاریخ انقضا پاسپورت"
                      prepend-icon="mdi-calendar"
                      reverse
                      readonly
                      v-bind="attrs"
                      class="pr-1"
                      v-on="on"
                      :rules="[() => !!Party.PassportExpiryDate || 'این قسمت باید پر شود']"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn
                      text
                      color="primary"
                      @click="$refs.endMenu.isActive = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                      text
                      color="primary"
                      @click="$refs.endMenu.save(date)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>

            <v-col>
              <v-text-field
                  v-model="Party.PassportNo"
                  label="شماره پاسپورت"
                  counter="10"
                  maxlength="10"
                  required
                  reverse
                  :rules="[() => !!Party.PassportNo || 'این قسمت باید پر شود']"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-autocomplete
                  style="direction: ltr"
                  v-model="Party.Degree"
                  :items="Party.Degrees"
                  label="مدرک تحصیلی"
                  clearable
                  dense
                  reverse
                  filled
                  :rules="[() => !!Party.Degree || 'این قسمت باید پر شود']"
              ></v-autocomplete>
            </v-col>
          </v-row>
        </form>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel dir="ltr">
      <a name="communicate"><v-expansion-panel-header style="text-align: right; direction: rtl">
        <template v-slot:default="{}">
          <v-row>
            <v-col
                cols="3"
                style="
                font-weight: bolder;
                text-align: right;
                font-size: 28px;
                color: #2c2c72;
              "
            >
              اطلاعات تماس ها
            </v-col>
            <v-col cols="9" class="text--secondary mx-5 text-right rtl">

            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header></a>
      <v-expansion-panel-content>
        <v-form ref="form">
          <v-row>
            <v-col>
              <v-row justify="center">
                <v-col cols="8">
                  <v-combobox
                      v-model="Party.CommunicateWay"
                      :items="Party.CommunicationWays"
                      label="کانال تماس"
                      multiple
                      reverse
                      chips
                      large
                      :rules="[() => Party.CommunicateWay.length != 0 || 'این قسمت باید پر شود']"
                  ></v-combobox>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="6" v-for="(input) in Party.CommunicateWay" :key="input">
                  <v-text-field
                      :label="input"
                      filled
                      v-model="Party.CommunicateData[input]"
                      reverse
                      chips
                      :type="inputType(input)"
                      :rules="[v => !!v || 'این قسمت باید پر شود']"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="12">
                  <div class="text-center">
                    <v-btn
                        v-if="Party.CommunicateWay.length !== 0"
                        large
                        color="primary"
                        @click="validate()"
                    >ثبت</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-form>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel dir="ltr">
      <a name="address"><v-expansion-panel-header style="text-align: right; direction: rtl">
        <template>
          <v-row>
            <v-col
                cols="3"
                style="
                font-weight: bolder;
                text-align: right;
                font-size: 28px;
                color: #2c2c72;
              "
            >
              اطلاعات آدرس ها
            </v-col>
            <v-col cols="9" class="text--secondary mx-5 text-right rtl">

            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-header></a>
      <v-expansion-panel-content>
        <AppFormAddress />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import { AppFormAddress } from "@/components/components.js"

export default {
  components: { AppFormAddress },
  name: "AppForm",
  data: () => ({
    open: [0, 1, 2, 3],
    date: null,
    files: [],
    Party: {
      name: "",
      Lname: "",
      BirthDate: null,
      IdNo: null,
      NationalID: null,
      BirthCity: null,
      FatherName: null,
      IssuanceCity: null,
      IssuanceDate: null,
      Gender: null,
      Genders: ["زن", "مرد"],
      Prefix: null,
      Prefixes: ["جناب آقای", "سرکار خانم"],
      location: null,
      start: null,
      end: null,
      email: "",
      nation: null,
      nations: [
        "ایرانی",
        "افغانستانی",
        "ارمنستانی",
        "ترک",
        "پاکستانی",
        "عراقی",
      ],
      Religion: null,
      Religions: ["اسلام", "مسیحیت", "یهودیت", "زرتشتی"],
      LivingCity: null,
      select: null,
      cities: ["تهران", "تبریز", "شیراز", "همدان"],
      checkbox: false,
      Role: [],
      Roles: [
        "کارشناس ",
        "بیمه‌گر اتکایی",
        "مرکز درمانی",
        "بازاریاب",
        "ذینفع",
        "بیمه شده",
        "بیمه گذار",
        "نماینده/شعبه",
      ],
      RetirementDate: null,
      PassportNo: "",
      PassportExpiryDate: null,
      ChildrenNo: null,
      Degree: null,
      Degrees: ["دکتری", "فوق لیسانس", "لیسانس", "فوق دیپلم", "دیپلم"],
      Job: null,
      Jobs: [],
      CommunicationWays: ["موبایل", "تلفن", "شبکه اجتماعی", "ایمیل"],
      CommunicateWay: [],
      CommunicateData: {}
    },
  }),
  computed: {
    validateEmail() {
      // eslint-disable-next-line no-useless-escape
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)
    }
  },
  methods: {
    inputType(type) {
      let InputType = "";
      switch(type) {
        case "ایمیل":
          InputType = "email";
          break;
        case "شبکه اجتماعی":
          InputType = "text";
          break;
        default:
          InputType = "number";
          break;
      }
      return InputType
    },
    validate () {
      this.$refs.form.validate()
    },
  }
};
</script>
