<template>
    <v-card
        class="mx-auto mb-2"
        max-width="600"
        outlined
    >
        <v-list-item three-line>
        <v-list-item-content>
            <!-- <div class="overline mb-4">OVERLINE</div> -->
            <v-list-item-title class="headline mb-1 text-h6">{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle class="mb-3">{{ item.description }}</v-list-item-subtitle>
            <div class="item-price">
                <p>{{ item.price }}$</p>
            </div>
        </v-list-item-content>

        <v-list-item-avatar
            tile
            size="80"
        ><v-img :src="item.imageSrc"></v-img></v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
            <v-btn small @click="removedFromCart">Remove</v-btn>
            <v-spacer></v-spacer>
            <v-btn text x-small fab @click="decreaseCount">-</v-btn>

            <div color="grey">
                {{ item.quantity }}
            </div>

            </v-badge>
            <v-btn text x-small fab @click="increaseCount">+</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
    export default {
        props: ['item'],
        data: () => ({
            count: 1,
        }),
        methods: {
            ...mapActions(['removeFromCart']),
            removedFromCart() {
                this.removeFromCart(this.item.id);
            },
            increaseCount() {
                this.item.quantity++
            },
            decreaseCount() {
                if(this.item.quantity == 1){
                    return false;
                }else {
                    this.item.quantity--
                }
            }
        },
        computed: {
            ...mapGetters(['cart']),
        }
    }
</script>

<style lang="scss" scoped>

</style>