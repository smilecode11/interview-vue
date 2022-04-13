// import shop from '../../api/shop'

const state = {
    items: [],  // 购物车数据, [{id:1, identity:0}]
    checkoutStatus: null    //  结账的状态
}

const getters = {
    //  购物车产品
    cardProducts: (state, getters, rootState) => {
        // rootState 全局 state
        return state.items.map(item => {
            const prod = rootState.products.all.find(product => product.id === item.id);
            return {
                id: prod.id,
                title: prod.title,
                price: prod.price,
                quantity: item.quantity
            }
        })
    },
    //  总计价格
    cartTotalPrice: (state, getters) => (getters.cardProducts.reduce((totaA, curr) => totaA + curr.price * curr.quantity, 0)).toFixed(2)
}


/** 存放异步请求的 action*/
const actions = {
    /** 结算*/
    checkout() { },

    /** 添加到购物车*/
    addProdToCard({ state, commit }, product) {
        const cartItem = state.items.find(item => item.id === product.id)
        if (cartItem) { //  商品数量加一
            commit('incrementItemQuantity', { id: product.id })
        } else {    //  添加商品到购物车
            commit('pushProductToCart', { id: product.id })
        }
    },

    /** 从购物车中删除*/
    deleteProdFromCart({ state, commit }, product) {
        const cartItem = state.items.find(item => item.id === product.id)
        if (cartItem) {
            if (cartItem.quantity > 1) {
                commit('decrementItemQuantity', { id: cartItem.id })
            } else {
                commit('delProductFromCart', { id: cartItem.id })
            }
        } else {
            console.error("未找到指定 id 的商品")
        }
    }
}

const mutations = {
    /** 购物车商品数量增加*/
    incrementItemQuantity(state, { id }) {
        const cartItem = state.items.find(item => item.id === id)
        cartItem.quantity++;
    },
    /** 购物车商品数量减少*/
    decrementItemQuantity(state, { id }) {
        const cartItem = state.items.find(item => item.id === id)
        cartItem.quantity--;
    },
    /** 购物车添加商品*/
    pushProductToCart(state, { id }) {
        state.items.push({
            id,
            quantity: 1
        })
    },
    /** 购物车删除商品*/
    delProductFromCart(state, { id }) {
        let delIndex = state.items.findIndex(item => item.id === id)
        state.items.splice(delIndex, 1)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
