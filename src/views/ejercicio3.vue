<template>
  <div class="home">
    <h1>Ejercicios</h1>
    <dai-mapa :extension="[-101.2,18.3,-98.0,20.3]">
      <dai-capa-xyz-osm/>
      <dai-capa-geojson
      url="/movilidad_mun_2010_edos15_09.geojson"
      :reglas-estilo-capa="{
        clasificacion:'linear',
        clases:3,
        columna:'porc_n_mov',
        colores:['#edf8b1','#7fcdbb', '#2c7fb8']
      }"
    />
    </dai-mapa>
  </div>
</template>

<script>


export default {
}   
</script>
