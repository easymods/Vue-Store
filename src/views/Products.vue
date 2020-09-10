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

                    <v-col class="d-flex ut-padding" cols="12" sm="12" md="4"
                    >
                        <v-range-slider
                        v-model="range"
                        :max="1500"
                        :min="0"
                        :hint="'Choose your price'"
                        hide-details
                        class="align-center"
                    >
                        <template v-slot:prepend>
                        <v-text-field
                            :value="range[0]"
                            class="mt-0 pt-0"
                            hide-details
                            single-line
                            type="number"
                            style="width: 60px"
                            @change="$set(range, 0, $event)"
                        ></v-text-field>
                        </template>
                        <template v-slot:append>
                        <v-text-field
                            :value="range[1]"
                            class="mt-0 pt-0"
                            hide-details
                            single-line
                            type="number"
                            style="width: 60px"
                            @change="$set(range, 1, $event)"
                        ></v-text-field>
                        </template>
                    </v-range-slider>
                    </v-col>
                </v-row>
            </v-flex>
        </v-layout>
        <ProductsList/>
    </div>
</template>

<script>

import ProductsList from '../components/Products/ProductsList'
import { mapGetters, mapState, mapMutations} from 'vuex'
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
                    return this.$store.state.colors
                },
                set (value) {
                    this.$store.commit('updateColors', value)
                }
            },
            range: {
                get() {
                    return this.$store.getters.range
                },
                set(value) {
                    this.$store.commit('setRange', value)
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