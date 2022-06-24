<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/ejercicio1">Ejercicio 1</router-link> |
      <router-link to="/ejercicio2">Ejercicio 2</router-link> |
      <router-link to="/ejercicio3">Ejercicio 3</router-link> |
      <router-link to="/ejercicio4">Ejercicio 4</router-link> |
      <router-link to="/ejercicio5">Ejercicio 5</router-link> |
      <router-link to="/ejercicio6">Ejercicio 6</router-link> |
      <router-link to="/ejercicio7">Ejercicio 7</router-link> |
      <router-link to="/ejercicio8">Ejercicio 8</router-link> |
      <router-link to="/ejercicio9">Ejercicio 9</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.home{
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
}
</style>
