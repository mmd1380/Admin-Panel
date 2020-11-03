<template>
  <v-app-bar
    dense
    min-height="60px"
    class="py-2"
    fixed
    flat
  >
    <v-toolbar-title>پنل ادمین</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-cog</v-icon>
    </v-btn>
    <v-btn icon class="mx-2">
      <v-badge
        color="green"
        content="6"
        left
      >
        <v-icon>
          mdi-bell
        </v-icon>
      </v-badge>
    </v-btn>
    <v-menu
      left
      bottom
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="n in 5"
          :key="n"
          @click="() => {}"
        >
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city', link: "/" },
          { title: 'Parties', icon: 'mdi-account', link: "/add-party" }
        ],
        mini: true,
      }
    },
  }
</script>