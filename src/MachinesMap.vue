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
        v-for="(m, index) in machineDataMap"
        :position="{lat:Number(m.latitude), lng:Number(m.longitude)}"
        :clickable="true"
        @click="center=m.position"

      />

    </gmap-map>
    <!--</div>-->
    <!--</div>-->
    <h1>Carte des machines</h1>
  </div>
</template>

<script>

  export default {
    props: [
      'machineDataMap'
    ],
    name: "machines-map",
    data() {
      return {
        center: {lat: 10, lng: 10}

      }
    },

    created: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      })
    }
  }

</script>

<style scoped>
  div {
    margin-left: auto;
    margin-right: auto;

  }

</style>
