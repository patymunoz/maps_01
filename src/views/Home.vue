<template>
  <div class="home">
    <h1>Ejercicios de DAIMAPS</h1>

    <!--el centro en coordenadas [x,y] , es decir [longitud,latitud]-->
    <dai-mapa :zoom="8" :centro="[-99.1332, 19.4326]">
      <dai-capa-xyz-osm />
      <!--aqui se pueden agregar mas capas-->
    </dai-mapa>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
