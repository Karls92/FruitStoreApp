<template>
    <div class="container mt-3 mb-3">
        <div class="row">
            <div class="col col-sm-12 mb-3">
                <img alt="Store logo" class="logo-img" src="../assets/logo/shops-512.png">
                <h1>FRUIT STORE</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1{
font-size: 40px;
text-shadow: 0 0 5px #fff, 0 0 10px #000, 0 0 15px #000, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18, 2px 2px 2px rgba(82,227,32,0);
}

/* mobile */
img.logo-img {
width: 100%;
}

@media (min-width: 780px)
{
  img.logo-img {
  width: 40%;
  }
}
</style>