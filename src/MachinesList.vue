<template>
  <div>
    <h1>Liste des machines</h1>
    <MachineAlone
      v-for="machine in machines"
    :key="machine.id"
    v-bind:machineData="machine">

    </MachineAlone>
  </div>
</template>

<script>
  export default {
    name: "machines-list",
    data() {
      return {
        machines: [{
          id: 1,
          name: 'Good Machine',
          status: true,
          checkedAt: new Date()

        }, {
          id: 2,
          name: 'Machine in burn out',
          status:false,
          checkedAt: new Date()

        }]
      }
    },
  }
</script>

<style scoped>

</style>
