<template>
    <div class="container">
        <div class="row">
            <div class="sm-12">
                <h2>Payment</h2>
                <div class="row mb-3">
                    <div class="col-auto">
                        <label for="payment_quant" class="visually-hidden">Money Received</label>
                        <input type="number" step="0.01" min="0.00" class="form-control" id="payment_quant" placeholder="Money Received">
                    </div>
                    <div class="col-auto">
                        <button class="btn btn-success mb-3">Send Payment</button>
                    </div>
                </div>
                <div class="mb-3 row">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: 'Payment'
}
</script>

<style scoped>
</style>
