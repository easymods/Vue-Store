<template>
  <v-app>
    <Navbar />  
    
    <v-main>
        <div class="container">
          <router-view></router-view>
        </div>
    </v-main>

    <v-footer
    color="grey lighten-3"
    padless>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
export default {
  name: 'App',

  components: {
    Navbar,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.container {
  max-width: 1100px;
  margin: 0 auto;
  height: 100%;
}
</style>
