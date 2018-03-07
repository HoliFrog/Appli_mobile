<template>
  <div>
    <!--<div class="row justify-content-md-center">-->
      <!--<div class="col">-->
        <gmap-map
          :center="center"
          :zoom="4"
          style="width: 50%; height: 800px"
        >
          <gmap-marker
            :key="index"
            v-for="(m, index) in machines"
            :position="{lat:m.latitude, lng:m.longitude}"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
          >lj</gmap-marker>

        </gmap-map>
      <!--</div>-->
    <!--</div>-->
    <h1>Carte des machines</h1>
  </div>
</template>

<script>
  export default {

    name: "machines-map",
    data() {
      return {
        center: {lat: 10.0, lng: 10.0},
        machines: [{
          id: 1,
          latitude: 10,
          longitude: 10,
        },
          {
            id: 2,
            latitude: 11,
            longitude: 9.6,
          }]
      }
    },
  }

</script>

<style scoped>
  div{
    margin-left: auto;
    margin-right: auto;

  }

</style>
