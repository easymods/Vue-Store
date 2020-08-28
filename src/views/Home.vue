<template>
  <div>
    <!-- SLIDER -->
      <v-container>
      <v-layout row>
        <v-flex xs12>
          <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
            :src="slide.src">
  
          </v-carousel-item>
        </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    
    <!-- PRODUCTS -->
    <ProductsList />
  </div>
</template>

<script>
import ProductsList from '../components/Products/ProductsList'
export default {
  name: 'Home',
  components: {
    ProductsList,
  },
  data: () => ({
    // colors: [
    //   'indigo',
    //   'warning',
    //   'pink darken-2',
    //   'red lighten-1',
    //   'deep-purple accent-4',
    // ],
    slides: [
      { src: 'https://promotions.newegg.com/sennheiser/20-1544/1920x360.jpg'},
      { src: 'https://promotions.newegg.com/apple/20-1089/1920x360.jpg'},
      { src: 'https://promotions.newegg.com/audio/20-1143/1920x360.jpg'},
      { src: 'https://promotions.newegg.com/samsung/20-1509/1920x360.jpg'},
      { src: 'https://promotions.newegg.com/TV/20-1529/1920x360.jpg'},
    ],
  })
}
</script>


<style scoped> 
  .container {
    max-width: 1100px;
  }
</style>