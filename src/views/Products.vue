<template>
    <div>
        <v-layout>
            <v-flex sm12>
                <v-row>
                    <v-col class="d-flex ut-padding" cols="12" sm="12" md="4"
                    >
                        <v-select
                        :items="colorItems"
                        :menu-props="{ maxHeight: '400' }"
                        label="Select"
                        multiple
                        v-model="colors"
                        :hint="'Choose your color'"
                        persistent-hint
                        ></v-select>
                    </v-col>

                    <v-col class="d-flex ut-padding" cols="12" sm="12" md="4"
                    >
                        <v-select
                        :items="vendorItems"
                        :menu-props="{ maxHeight: '400' }"
                        label="Select"
                        multiple
                        v-model="vendors"
                        :hint="'Choose your vendor'"
                        persistent-hint
                        ></v-select>
                    </v-col>
                </v-row>
            </v-flex>
        </v-layout>
        <ProductsList
        />
    </div>
</template>

<script>

import ProductsList from '../components/Products/ProductsList'
import { mapGetters, mapState } from 'vuex'
    export default {
        
        data: () => ({
            colorItems: ['black', 'gold', 'metal', 'white'],
            vendorItems: ['Asus', 'Hp', 'Acer', 'Apple'],
        }),
        components: {
            ProductsList
        },
        computed: {
            vendors: {
                get () {
                    return this.$store.state.vendors
                },
                set (value) {
                    this.$store.commit('updateVendors', value)
                }
            },
            colors: {
                get () {
                    return this.$store.state.color
                },
                set (value) {
                    this.$store.commit('updateColors', value)
                }
            }
        },
    }
</script>

<style scoped>
.ut-padding {
    padding-top: 0px;
    padding-bottom: 0px;
}
</style>