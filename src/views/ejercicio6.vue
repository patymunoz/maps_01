<template>
  <div class="home">
    <h1>Ejercicios</h1>
    <dai-tarjeta-contenedor-mapa :permitir-colapso="false">
      <template #header>
        <div>Arrastra las capas</div>
        <draggable v-model="capas" class="lista-capas">
          <div v-for="capa in capas" :key="capa" class="item-capa">
            {{ capa }}
          </div>
        </draggable>
      </template>
      <dai-mapa :extension="[-117.6, 13.6, -86.5, 33.5]">
        <dai-capa-xyz-osm />
        <dai-capa-wms
          v-for="capa in capas"
          :key="capa"
          url="https://dadsigvisgeo.conacyt.mx/geoserver/vacunacion/wms"
          :parametros="{ layers: capa }"
          :z-index="zindexAsDict[capa]"
        />
      </dai-mapa>
    </dai-tarjeta-contenedor-mapa>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
  },
  data() {
    return {
      capas: [
        "aeropuertos_210429",
        "cabeceras",
        "corredores",
        "estados_210521",
        "hospitales_priv_210318",
      ],
    };
  },
  computed: {
    zindexAsDict() {
      return this.capas.reduce((acum, curren, idx, array_original) => {
        acum[curren] = array_original.length - idx;
        return acum;
      }, {});
    },
  },
};
</script>