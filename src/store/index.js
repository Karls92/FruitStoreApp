import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fruits: [
      {id: 1, name : 'Apple', quant : 10, price: 5.90, img: require('../assets/stock/apple.png')},
      {id:2, name : 'Pear', quant : 5, price: 7.90, img: require('../assets/stock/pear.png')},
      {id: 3, name : 'Strawberry', quant : 25, price: 10.00, img: require('../assets/stock/strawberry.png')},
      {id: 4, name : 'Grapes', quant : 3, price: 6.75, img: require('../assets/stock/grapes.png')}
    ],
    shoppingCart: [], 
    totalToPay: 0.00
  }, 
  mutations: {
    getFruitToCart(state, index) {
      if(state.fruits[index].quant <= 0) {
        alert("Sold Out!")
      } else {
        state.fruits[index].quant--
        const indexCart = state.shoppingCart.findIndex(el => el.fruitId === index)
        indexCart === -1 ? state.shoppingCart.push({fruitId: index, quant: 1, subtotal: state.fruits[index].price}) : (state.shoppingCart[indexCart].quant++, state.shoppingCart[indexCart].subtotal += state.fruits[index].price);
        state.totalToPay += state.fruits[index].price
      }      
    },
    proccessPayment(state) {
        if(state.shoppingCart !== [] && state.totalToPay > 0){
          alert("payment processed successfully. Thanks for your purchase!");
          state.shoppingCart = []
          state.totalToPay = 0.00
          state.fruits[0].quant = 10, state.fruits[1].quant = 5, state.fruits[2].quant = 25, state.fruits[3].quant = 3;
        }
        else{
          alert("Select some products to buy!");
        }
    }
  },
  actions: {
  },
  modules: {
  }
})
