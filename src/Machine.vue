<template>
  <div>
    <h1>Machine {{name}}</h1>
    <h2>{{checkedAt.toLocaleString()}}</h2>

    <h3 class="green" v-if="status">Status OK</h3>
    <h3 class="red" v-if="!status">Status KO</h3>

  </div>
</template>

<script>
  export default {
    name: "machine",
    data() {
      return {

        name: 'Good Machine',
        status: false,
        checkedAt: new Date(),


      }
    },

  }
</script>

<style scoped>
.red{
  color: mediumvioletred;
}
  .green{
    color: aqua;
  }
</style>
