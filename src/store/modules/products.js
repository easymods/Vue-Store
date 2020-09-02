
const state = {
    products: [
        {id: '1',
        title: 'Lenovo Legion Y520',
        vendor: 'Lenovo',
        color: 'black',
        material: 'metal/plastic',
        description: 'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/1000Gb HDD/DVD нет/NVIDIA GeForce GTX 1050, 4096 МБ/Wi-Fi/Bluetooth/Win 10 Home',
        price: 760,
        promo: false,
        imageSrc: 'https://images.1a.ee/display/aikido/store/4cff799d01d57d07e108f36b64ac0612.jpg?h=2000&w=2000',
        popular: true
        },
        

        {id: '2',
        title: 'Asus FX503VD',
        vendor: 'Asus',
        color: 'white',
        material: 'plastic',
        description: 'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/256Gb SSD/DVD нет/NVIDIA GeForce GTX 1050/Wi-Fi/Bluetooth/Windows 10 Home',
        price: 984,
        promo: true,
        imageSrc: 'https://images.1a.ee/display/aikido/store/a2902448559ee2a242b5c887b25d29c9.jpg?h=2000&w=2000',
        popular: false,
        },

        {id: '3',
        title: 'ASUS TUF Gaming FX504GD',
        vendor: 'Asus',
        color: 'black',
        material: 'metal/plastic',
        description: 'Intel Core i7 8750H 2300 MHz/15.6"/1920x1080/12Gb/1000Gb HDD/DVD нет/NVIDIA GeForce GTX 1050, 4096 МБ/Wi-Fi/Bluetooth/Win 10 Home',
        price: 1220,
        promo: true,
        imageSrc: 'https://images.1a.ee/display/aikido/store/7d4adf682b8604a4592e6c517e0a1ede.jpg?h=2000&w=2000',
        popular: true
        },

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
        imageSrc: 'https://images.1a.ee/display/aikido/store/e997954172c5a81f6ab7aff9fea70340.jpg?h=2000&w=2000',
        popular: true
        },


        {id: '6',
        title: 'Apple MacBook (MLHC2RU/A)',
        vendor: 'Apple',
        color: 'silver',
        material: 'metal',
        description: 'Intel Core m3 1200 MHz/12"/2304x1440/8Gb/256Gb SSD/DVD нет/Intel HD Graphics 615/Wi-Fi/Bluetooth/MacOS X',
        price: 980,
        promo: true,
        imageSrc: 'https://images.1a.ee/display/aikido/store/a6305512fc25f7c0aec022449b395a3b.jpg?h=2000&w=2000',
        popular: true
        },
    ],
    vendors: [],
    colors: [],
}
const mutations = {
    updateVendors (state, value) {
        state.vendors = value
    },
    updateColors (state, value) {
        state.colors = value
    }
}
const actions = {

}

const getters = {
    products: (state) => state.products,
    popular:  (state) => state.products.filter(item => item.popular === true),
    computedProducts: function () {
        return state.products.filter((item) => {
            return (state.colors.length === 0 || state.colors.includes(item.color)) &&
                (state.vendors.length === 0 || state.vendors.includes(item.vendor))
        })
    },
}

export default  {
    state,
    actions,
    mutations,
    getters
}
