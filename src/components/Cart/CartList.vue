<template>
    <v-container>
        <v-layout>
            <v-flex sm12>
                
                <CartListItem v-for="(item, i) in cart" 
                :key="i"
                :item="item"
                />

                <v-card v-if="cart.length"
                class="mx-auto mt-5 d-flex align-items-center pa-2"
                max-width="600">
                <div class="ma-0 text-h6">Total: {{ cartTotal }}$</div>
                <v-spacer></v-spacer>
                <v-btn color="green" dark>Checkout</v-btn>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import CartListItem from './CartListItem'
    export default {
        data: () => ({
        
        }),
        computed: {
            ...mapGetters(['cart']),
            cartTotal() {
                let result = [];
                this.cart.map(item => {
                    result.push(item.price * item.quantity)
                });
                return result.reduce((sum, item )=> sum + item, 0);
            }
        },
        components: {
            CartListItem
        }
    }
</script>

<style scoped>
.list-item-price {
    display: inline-block;
    font-size: 15px;
    color: black;
}

.price-box {
    width: 10%;
    text-align: right;
}
</style>