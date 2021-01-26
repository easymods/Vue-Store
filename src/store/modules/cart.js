
const state = {
    cart: [],
}

const mutations = {
    addToCart(state, item) {
        state.cart.push(item)
    },
    removeFromCart(state, id){
        state.cart = state.cart.filter(cartItem => cartItem.id !== id)
    }
}
const actions = {
    addToCart({ commit }, item) {
        if(state.cart.includes(item)) return false;
        commit('addToCart', item)
    },
    removeFromCart({ commit }, id) {
        commit('removeFromCart', id)
    }
}

const getters = {
    cart: (state) => state.cart
}

export default  {
    state,
    actions,
    mutations,
    getters
}
