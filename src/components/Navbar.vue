<template>
    
    <div>

      <v-navigation-drawer
        v-model="drawer"
        app
        temporary
        >
        <v-list dense>
          <v-list-item link v-for="(link, i) in links" :key="i" :to="link.url">
            <v-list-item-action>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class='u-uc'>{{ link.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar flat app>
        <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase grey--text " style="width: 218px">
          <span class="font-weight-light">Online</span>
          <span>STORE</span> 
        </v-toolbar-title>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text v-for="(link, i) in links" :key="i" :to="link.url"
            text
            color="grey darken-2">
            {{ link.name }}
          </v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>
        <v-badge
        bordered
        color="green"
        overlap
      >
        <template v-slot:badge>
          <p class="bold-badge-counter">6</p>
        </template>

        <v-btn
          fab
          small
          class="white--text"
          color="grey"
          depressed
          :to="'/cart'"
        >
            <v-icon>mdi-shopping cart</v-icon>
          </v-btn>
        </v-badge>

        <v-btn
        fab
        small
        class="white--text u-ml"
        color="grey"
        depressed
        :to="'/login'"
        >
          <v-icon>mdi-face</v-icon>
        </v-btn>
      </v-app-bar>
    </div>

</template>

<script>
    export default {
      data: () => ({
        drawer: false,
        links: [
          { name: 'home', icon: 'mdi-home', url: '/' },
          { name: 'products', icon: 'mdi-store', url: '/products' },
          { name: 'about', icon: 'mdi-help outline', url: '/about' },
          { name: 'contacts', icon: 'mdi-email', url: '/contacts' },
          { name: 'register', icon: 'mdi-face', url: '/register' },
        ]
      })
    }
</script>

<style  scoped>
.bold-badge-counter {
  font-weight: bold;
}

.u-ml {
  margin-left: 10px;
}

.u-uc {
  text-transform: uppercase;
}
</style>