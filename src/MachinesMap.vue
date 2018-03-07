<template>
  <div>
    <!--<div class="row justify-content-md-center">-->
      <!--<div class="col">-->
        <gmap-map
          :center="{lat:10, lng:10}"
          :zoom="4"
          style="width: 50%; height: 800px"
        >

        </gmap-map>
      <!--</div>-->
    <!--</div>-->
    <h1>Carte des machines</h1>
  </div>
</template>

<script>
  export default {
    name: "machines-map",

  }
</script>

<style scoped>
  div{
    margin-left: auto;
    margin-right: auto;

  }

</style>
