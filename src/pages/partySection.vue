<template>
  <v-card flat class="mt-12">
    <v-row no-gutters>
      <!-- <v-col cols="2" class="nav-links">
        <v-card flat tile>
          <v-list shaped>
            <v-list-item-group
              color="primary"
            >
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                color="primary"
                @click.native="scrollFix(item.link)"
                :id="item.link"
                style="min-width: 220px;"
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
        </v-card>
      </v-col> -->
      <v-col cols="12" class="px-4 py-2">
          <v-card flat v-for="item in items" :id="item.link" :key="item.text" dir="rtl" tile class="mb-6 elevation-0">
            <v-card flat class="elevation-0">
              <AppForm :section="item.link"/>
            </v-card>
          </v-card>
      </v-col>      
    </v-row>
  </v-card>
</template>

<script>
import AppForm from "../components/AppForm"

export default {
  components: {
    AppForm
  },
  data: () => ({
    items: [
      { text: 'مشخصات اصلی', icon: 'mdi-account', link: 'main' },
      { text: 'مشخصات تکمیلی', icon: 'mdi-check', link: 'complement' },
      { text: 'اطلاعات تماس ها', icon: 'mdi-phone', link: 'communicate' },
      { text: 'اطلاعات آدرس ها', icon: 'mdi-mail', link: 'address' },
    ],
  }),
}
</script>

<style>

</style>