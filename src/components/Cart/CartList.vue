<template>
    <v-container>
        <v-layout>
            <v-flex sm12>
                <v-card v-for="(item, i) in items" :key="i"
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
                        <v-btn small>Remove</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn text x-small fab>-</v-btn>

                        <div color="grey">
                            1
                        </div>

                        </v-badge>
                        <v-btn text x-small fab>+</v-btn>
                    </v-card-actions>
                </v-card>
                
                <v-card 
                class="mx-auto mt-5 d-flex align-items-center pa-2"
                max-width="600">
                <div class="ma-0 text-h6">Total: 5000$</div>
                <v-spacer></v-spacer>
                <v-btn color="green" dark>Checkout</v-btn>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            items: [
                {id: '1',
                title: 'Lenovo Legion Y520',
                vendor: 'Lenovo',
                color: 'black',
                material: 'metal/plastic',
                description: 'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/1000Gb HDD/DVD нет/NVIDIA GeForce GTX 1050, 4096 МБ/Wi-Fi/Bluetooth/Win 10 Home',
                price: 760,
                promo: false,
                imageSrc: 'https://images.1a.ee/display/aikido/store/4cff799d01d57d07e108f36b64ac0612.jpg?h=2000&w=2000'},

                {id: '2',
                title: 'Asus FX503VD',
                vendor: 'Asus',
                color: 'white',
                material: 'plastic',
                description: 'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/256Gb SSD/DVD нет/NVIDIA GeForce GTX 1050/Wi-Fi/Bluetooth/Windows 10 Home',
                price: 984,
                promo: true,
                imageSrc: 'https://images.1a.ee/display/aikido/store/a2902448559ee2a242b5c887b25d29c9.jpg?h=2000&w=2000'},

                {id: '3',
                title: 'ASUS TUF Gaming FX504GD',
                vendor: 'Asus',
                color: 'black',
                material: 'metal/plastic',
                description: 'Intel Core i7 8750H 2300 MHz/15.6"/1920x1080/12Gb/1000Gb HDD/DVD нет/NVIDIA GeForce GTX 1050, 4096 МБ/Wi-Fi/Bluetooth/Win 10 Home',
                price: 1220,
                promo: true,
                imageSrc: 'https://images.1a.ee/display/aikido/store/7d4adf682b8604a4592e6c517e0a1ede.jpg?h=2000&w=2000'},

                {id: '4',
                title: 'HP Omen 17',
                vendor: 'Hp',
                color: 'black',
                material: 'metal/plastic',
                description: 'Intel Core i7 7700HQ 2800 MHz/17.3"/1920x1080/12Gb/1128Gb HDD+SSD/DVD-RW/NVIDIA GeForce GTX 1060/Wi-Fi/Bluetooth/Windows 10 Home',
                price: 1600,
                promo: false,
                imageSrc: 'https://images.1a.ee/display/aikido/store/055184dea972e85327ca7f10e8a20ec7.jpg?h=2000&w=2000'},

                {id: '5',
                title: 'Acer Swift 5 SF514',
                vendor: 'Acer',
                color: 'gold',
                material: 'metal',
                description: 'Intel Core i7 8550U 1800 MHz/14"/1920x1080/16Gb/512Gb SSD/DVD нет/Intel HD Graphics 620/Wi-Fi/Bluetooth/Windows 10 Home',
                price: 1100,
                promo: true,
                imageSrc: 'https://images.1a.ee/display/aikido/store/e997954172c5a81f6ab7aff9fea70340.jpg?h=2000&w=2000'},


                {id: '6',
                title: 'Apple MacBook (MLHC2RU/A)',
                vendor: 'Apple',
                color: 'silver',
                material: 'metal',
                description: 'Intel Core m3 1200 MHz/12"/2304x1440/8Gb/256Gb SSD/DVD нет/Intel HD Graphics 615/Wi-Fi/Bluetooth/MacOS X',
                price: 980,
                promo: true,
                imageSrc: 'https://images.1a.ee/display/aikido/store/a6305512fc25f7c0aec022449b395a3b.jpg?h=2000&w=2000'},
            ],
        })
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