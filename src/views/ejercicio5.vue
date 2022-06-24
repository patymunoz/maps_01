<template>
  <div class="home">
    <h1>Ejercicios</h1>
    <dai-mapa :extension="[-117.6,13.6,-86.5,33.5]">
    <dai-capa-xyz-osm/>
    <dai-capa-geojson
      :datos="{'type': 'FeatureCollection', features:datos_base}"
    />
    </dai-mapa>
  </div>

  
</template>

<script>
export default {
    data(){
        return {
            datos_base:[]
        }
    },
    mounted(){
        fetch('/centroides_poblacion.geojson').then(response=>response.json()).then(data=>{
            this.datos_base = data.features
        })
    }
}
</script>