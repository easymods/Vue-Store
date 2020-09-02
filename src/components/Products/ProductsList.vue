<template>
    <v-container>
      <v-layout row>
        <v-flex xs12>
            <v-row>
                <ProductsListItem v-for="product in computedProducts" 
                :key="product.id"
                :product="product"
                />
            </v-row>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import ProductsListItem from '../Products/ProductsListItem'
import { mapGetters } from 'vuex'
    export default {
        data: () => ({
        }),
        components: {
            ProductsListItem,
        },
        computed: {
            ...mapGetters([ 'computedProducts']),

        }
    }
</script>

<style lang="scss" scoped>

</style>