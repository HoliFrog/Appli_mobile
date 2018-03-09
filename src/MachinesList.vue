<template>
  <div>
    <h1>Liste des machines</h1>
    <select v-model="selected"
            @click="filterByStatus"
    >
      <option v-for="option in options" v-bind:option="option.value">

        {{ option.text }}
      </option>
    </select>
    <span>   <br> Sélectionné : {{ selected }}</span>
    <MachineAlone

      v-for="machine in filtre"
      :key="machine.id"
      v-bind:machineData="machine">

    </MachineAlone>
  </div>
</template>

<script>

  export default {
    props: [
      'machineDataList'
    ],
    name: "machines-list",
    data() {
      return {
        selected: 'All',
        options: [
          {text: 'All', value: '*'},
          {text: 'Status OK', value: 'true'},
          {text: 'Status KO', value: 'false'}
        ],
        filtre: this.machineDataList
      }
    },
    methods: {
      filterByStatus: function () {
        console.log(this.machineDataList);
        if (this.selected === 'Status OK') {
          this.filtre = this.machineDataList.filter(machine => {
            return machine.status === 'true'
          })
        }
        else if (this.selected === 'Status KO') {
          this.filtre = this.machineDataList.filter(machine => {
            return machine.status === 'false'
          })
        }
        else{
            this.filtre = this.machineDataList;
        }
      }
    }
  }
</script>

<style scoped>

</style>
