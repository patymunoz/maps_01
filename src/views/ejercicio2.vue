<template>
  <div class="home">
    <h1>Ejercicios</h1>
    <dai-mapa :zoom="8" :centro="[-99.13,19.43]">
      <dai-capa-xyz
      url="http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg"
      atribuciones="Tiles &copy; Esri &mdash; Source:Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
      />
    </dai-mapa>
  </div>
</template>

<script>


export default {
}   
</script>
