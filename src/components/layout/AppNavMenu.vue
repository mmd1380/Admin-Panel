<template>
  <v-card dir="rtl" flat class="nav-container">
    <v-navigation-drawer
      max-height="100vh"
      :mini-variant.sync="mini"
      permanent
      style="border-radius: 0;"
      class="pa-2"
    >
      <v-list-item class="px-2">
        <v-list-item-title class="mx-2">{{ user.name }}</v-list-item-title>
        <v-list-item-avatar>
          <v-img :src="user.avatar"></v-img>
        </v-list-item-avatar>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.link"
          color="primary"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    user: {
      avatar: "https://randomuser.me/api/portraits/men/85.jpg",
      name: "محمد محمدی"
    },
    items: [
      { title: 'صفحه اصلی', icon: 'mdi-home-city', link: "/" },
      { title: 'اشخاص', icon: 'mdi-account', link: "/party-page", items: [{ name: "اضافه کردن شخص", link: "/add-party", icon: "mdi-plus" }] },
      { title: 'بیمه نامه ها', icon: 'mdi-book', link: "/test" },
      { title: 'خروج', icon: 'mdi-door', link: "/test2" }
    ],
    mini: false,
  })
}
</script>

<style scoped>
.nav-container {
  margin: 60px 0 0 0;
  border-left: solid 1px #ccc;
}
</style>