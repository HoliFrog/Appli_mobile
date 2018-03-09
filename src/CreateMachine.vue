<template>
  <div>
  <form action="#">
    <input v-model="creationForGod" placeholder="Nom">
    <input v-model="creationForGod" placeholder="statut">
    <toggle-button :value="value" @change="value=!value"/>
    <toggle-button :value="false"
                   :labels='{checked:"fucking machine",unchecked:"good machine"}'
                   :width="200"
                   :height="40"
                   class="gros"
    />
    <input v-model="creationForGod" placeholder="Latitude">
    <input v-model="creationForGod" placeholder="Longitude">
  </form>
  <h1>coucou</h1>
  </div>
</template>

<script>
    export default {
      NewMachine:[],
      value: false,
      props : [
        'creationForGod'
      ],
        name: "create-machine"
    }
</script>

<style scoped>

</style>
