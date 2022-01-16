<template>
    <div class="container mt-3 mb-3">
        <div class="row">
            <div class="col-sm-12">
                <h2>Payment</h2>
                <div class="row mb-2">
                    <div class="col-sm-12 col-md-7 d-grid">
                        <input type="text" :value="totalToPay.toFixed(2)" class="form-control" id="payment_quant" placeholder="Money Received" disabled>
                    </div>
                    <div class="col-sm-12 col-md-5 d-grid">
                        <button class="btn btn-success" @click="proccessPayment">Send Payment</button>
                    </div>
                </div>
        
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
name: 'Payment',
computed: {
    ...mapState(['totalToPay'])
 },
 methods: {
    ...mapMutations(['proccessPayment']) 
 }
}
</script>

<style scoped>
</style>
