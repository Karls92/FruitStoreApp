<template>
    <div class="container mt-3 mb-3">
        <div class="row">
            <div class="col-sm-12">
                <h2>Payment</h2>
                <div class="row mb-2">
                    <div class="col-sm-12 col-md-8">
                        <input type="number" step="0.01" min="0.00" class="form-control" id="payment_quant" placeholder="Money Received">
                    </div>
                    <div class="col-sm-12 col-md-4 d-grid">
                        <button class="btn btn-success">Send Payment</button>
                    </div>
                </div>
                <div class="row">
                    
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
