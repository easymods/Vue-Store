<template>
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="(link, i) in links"
        :key="i"
        color="black"
        text
        class="my-2 hidden-sm-and-down"
        :to="link.url"
      >
        {{ link.name }}
      </v-btn>
      <v-col 
        class="white py-4 text-center white--black"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>easymods</strong>
      </v-col>
    </v-row>
</template>

<script>
    export default {
        data: () => ({
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

<style lang="scss" scoped>

</style>