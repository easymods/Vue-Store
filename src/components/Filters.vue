<template>
    <div>
        <v-layout>
            <v-flex sm12>
                <v-row>
                    <v-col class="d-flex ut-padding" cols="12" sm="12" md="4"
                    v-for="(item, i) in items" :key="i"
                    >
                        <v-select
                        :items="item.items"
                        filled
                        :label="item.label"
                        dense
                        ></v-select>
                    </v-col>
                </v-row>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        data: () => ({
            items: [
                { label: 'Price', items: ['None' ,'>500' , '>900', '>2000']},
                { label: 'Color', items: ['None' ,'red' , 'green', 'black']},
                { label: 'Label', items: ['None' ,'Asus' , 'HP', 'Acer']},
            ],
        })
    }
</script>

<style scoped>
.ut-padding {
    padding-top: 0px;
    padding-bottom: 0px;
}
</style>