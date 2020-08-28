<template>
    <v-col
    cols="12"
    md="4"
    sm="6"
    xs="1"
    >
        <v-card
        class="mx-auto"
        max-width="374"
    >
        <v-img
        height="250"
        :src="product.imageSrc"
        ></v-img>

        <v-card-title>{{ product.title }}</v-card-title>

        <v-card-text>
        <!-- <v-row
            align="center"
            class="mx-0"
        >
            <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
            ></v-rating>

            <div class="grey--text ml-4 mb-2">4.5 (413)</div>
        </v-row> -->


        <div>{{ product.description }}</div>

        <div class="my-4 subtitle-1 font-weight-bold">
            <span class="card-item-price text--blue">Price: </span>{{ product.price }}$
        </div>
        </v-card-text>


        <v-divider class="mx-4"></v-divider>

        <v-card-actions>
        <v-btn
            text
            color="deep-purple lighten-2"
            :to="'/product/' + product.id"
        >
            View
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
            color="green lighten-2"
            text
        >
            Add To Cart
        </v-btn>
        </v-card-actions>
    </v-card>
    </v-col>
</template>

<script>
    export default {
        props: ['product'],
        data: () => ({
            
        })
    }
</script>

<style scoped>

</style>