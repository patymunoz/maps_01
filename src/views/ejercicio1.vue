<template>
  <div class="home">
    <h1>Ejercicios</h1>
    <dai-mapa :extension="[-101.2,18.3,-98.0,20.3]">
      <dai-capa-xyz-osm/>
      <dai-capa-geojson
        url="/movilidad_mun_2010_edos15_09.geojson"
        :reglas-estilos-capa="{
          clasificacion:'cuantiles',
          columna:'porc_n_mov',
          colores:'PuRd'
        }"
        :contenido-tooltip="f=>`porc_n_mov ${f.porc_n_mov}`"
      />    
    </dai-mapa>
  </div>
</template>

<script>


export default {
}   
</script>
