<template>
  <v-row ref="window">
    <v-col cols="9">
      <Form />
    </v-col>
    <v-col cols="3" class="context-menu">
      <v-list dir="ltr" shaped>
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="'#' + item.link"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
import Form from "@/components/AddPartyForm/Form";

export default {
  components: {Form },
  data: () => ({
    selectedItem: null,
    items: [
      { text: 'اطلاعات اصلی',   link: "main" },
      { text: 'اطلاعات تکمیلی', link: "complement" },
      { text: 'اطلاعات تماس ها',   link:  "communicate"},
      { text: 'آدرس ها', link: "address" },
      { text: 'حساب های بانکی',  link: "address" },
      { text: 'ارتباط با سایر اشخاص', link: "address" },
      { text: 'اطلاعات لاتین',   link: "address" },
    ],
    hashLinks: ["main", "complement", "communicate", "address"],
  })
}
</script>

<style>
.context-menu {
  position: fixed;
  left: 10px;
  top: 132px;
}
</style>