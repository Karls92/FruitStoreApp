<template>
    <div class="container">
       <div class="row">
           <div class="col">
                <h2>Stock List</h2>
                 <ul class="list-group">
                    <li v-for="(item, index) of fruits" :key='item.id' class="list-group-item d-flex justify-content-between align-items-center">
                        <img :src="item.img" alt="Fruit Logo" />
                        {{item.name}}  {{item.price.toFixed(2)}} $ / Kg
                        <span class="badge bg-primary rounded-pill">Stock: {{item.quant}}</span>
                        <button class="btn btn-success" @click="getFruitToCart(index)">+</button>
                    </li>
                </ul>
           </div>
       </div>
    </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
    name: "StockList",
    computed: {
       ...mapState(['fruits'])
    },
    methods: {
    ...mapMutations(['getFruitToCart'])
    }    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>