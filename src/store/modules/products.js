import shop from '../../api/shop'

const state = {
    all: []
}

const getters = {}


const mutations = {
    setProducts(state, products) {
        state.all = products
    }
}

const actions = {
    /** 获取所有商品*/
    getAllProducts({ commit }) {
        shop.getProducts((products) => {
            commit('setProducts', products)
        })
    }
}


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}