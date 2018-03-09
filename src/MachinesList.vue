<template>
  <div>
    <h1>Liste des machines</h1>

    <MachineAlone

      v-for="machine in machineDataList"
      :key="machine.id"
      v-bind:machineData="machine">

    </MachineAlone>
  </div>
</template>

<script>

  import Axios from "axios"

  export default {
    props: [
      'machineDataList'
    ],
    name: "machines-list",
    data() {
      return {

      }
    },

  }
</script>

<style scoped>

</style>
