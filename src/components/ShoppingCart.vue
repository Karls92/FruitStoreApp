<template>
    <div class="container mt-3 mb-3">
       <div class="row">
           <div class="col-sm-12 mb-3">
                <h2>Shopping Cart</h2>
                 
                 <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product of shoppingCart" :key="product.id">
                        <td>{{fruits[product.fruitId].name}}</td> 
                        <td>{{product.quant}} Kg</td>
                        <td>{{product.subtotal.toFixed(2)}} $</td>
                        </tr>
                    </tbody>
                </table>
           </div>
           <div class="col-sm-12">
                <div class="alert alert-info" role="alert">
                    <h3>TOTAL TO PAY: </h3> 
                    <h4>{{totalToPay.toFixed(2)}} $</h4>
                </div>
           </div>
       </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
name: 'ShoppingCart',
computed: {
    ...mapState(['fruits', 'shoppingCart', 'totalToPay'])
 }
}
</script>

<style scoped>
</style>