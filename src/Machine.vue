<template>
  <div>
    <!--<h1>Machine {{name}}</h1>-->
    <!--<h2>Dernière vérification : {{checkedAt.toLocaleString()}}</h2>-->

    <!--<h3 class="green" v-if="status">Status OK</h3>-->
    <!--<h3 class="red" v-if="!status">Status KO</h3>-->

    <h1>Machine {{machineData.name}}</h1>
    <h2>Dernière vérification : {{machineData.checkedAt.toLocaleString()}}</h2>
    <h3 class="green" v-if="machineData.status">Status OK</h3>
    <h3 class="red" v-if="!machineData.status">Status KO</h3>

  </div>
</template>

<script>
  export default {
    name: "machineAlone",
    props: [
      'machineData'
    ],
    data() {
      return {}
    },

  }
</script>

<style scoped>
  div {
    border: solid medium;
  }
  .red {
    color: mediumvioletred;
  }

  .green {
    color: aqua;
  }
</style>
