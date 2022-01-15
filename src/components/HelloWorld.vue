<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Es un jugador empedernido de Free Fire, que juega todo el tiempo, es un gran jugador, esta matandome en estos momentos en su mente porque quiere jugar al juego y estoy utilizando el celular.
    </p>
    <h3>Habilidades de Samuel</h3>
    <ul>
      <li>1. Gran habilidad para matar a su enemigo</li>
      <li>2. Es bueno trabajando en equipo</li>
      <li>3. Tiene una buena punteria</li>
      <li>4. Tiene tacnicas ofensivas avanzadas</li> 
    </ul>
    <h3>PLataformas donde suele jugar</h3>
    <ul>
      <li><a>Movil</a></li>
      <li><a>PC</a></li>
    </ul>
    <h3>Info de Contacto</h3>
    <ul>
      <li><a href="#" target="_blank">Facebook</a></li>
      <li><a href="#" target="_blank">Instagram</a></li>
      <li><a href="#" target="_blank">Twitter</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
font-size: 40px;
text-shadow: 0 0 5px #fff, 0 0 10px #000, 0 0 15px #000, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18, 2px 2px 2px rgba(82,227,32,0);
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/* all devices */
p{
font-size: 18px;
font-weight: 600;
font-style: italic;
width: 100%;
}

/* big screen */
@media (min-width: 768px) {
p {
width: 50%;
margin: 0 auto;
}
}
</style>
