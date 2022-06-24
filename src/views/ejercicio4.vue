<template>
  <div class="home">
    <h1>Ejercicios</h1>
    <dai-mapa :zoom="4" centro="[-99.13,19.43]">
      <dai-capa-xyz-osm/>
      <dai-capa-geojson
      url="/red_irag2.geojson"
      :reglas-estilo-capa="{
        clasificacion: 'categorias',
        columna: 'nivel_atencion',
        colores:'Accent',
        propiedadObjetivo:'relleno'
      }"
      :estilo-capa="{
        circle:{
            radius:10
        }
      }"
    />
    </dai-mapa>
  </div>
</template>

<script>


export default {
}   
</script>