<template>
  <div id="app">
    <img src="./assets/images.png">
    <h1>{{ msg }}</h1>
    <h2 v-if="loading != false">chargeeeeeeezz!!!</h2>
    <h2 v-if="error != null">{{error}}</h2>
    <p>
      <!-- utilisez le composant router-link pour la navigation. -->
      <!-- spécifiez le lien en le passant à la prop `to` -->
      <!-- `<router-link>` sera rendu en tag `<a>` par défaut -->
      <router-link to="/ListMachines">
       La liste ici
      </router-link>

      <router-link to="/Map">La carte ici</router-link>
      <router-link to="/CreateMachine">La création ici</router-link>

    </p>
    <!-- balise pour le composant router-view -->
    <!-- le composant correspondant à la route sera rendu ici -->

    <router-view v-bind:machineDataMap="machines"
                 v-bind:machineDataList="machines"
    />


  </div>
</template>

<script>


  import Axios from 'axios'

  export default {
    name: 'app',
    data() {
      return {

        machines: [{}],
        loading: false,
        error: null,
        img: {
          show: true
        },
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created: function () {
      Axios.get('https://machine-api-campus.herokuapp.com/api/machines')
        .then((response) => {
          console.log(response);
          this.error = null;
          this.machines = response.data;
          // this.selected = response.data;


        })
        .catch((error) => {
          console.log(error);
          this.error = error;
        });

    },
    methods: {
      onMachinesListClick: function () {
        window.alert('vous êts bien sur la listes des machines!!')
      },
      onMapClick: function () {
        this.img.show = !this.img.show;
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
