<template>
  <div id="app">
    <img src="./assets/images.png">
    <h1>{{ msg }}</h1>

    <p>
      <!-- utilisez le composant router-link pour la navigation. -->
      <!-- spécifiez le lien en le passant à la prop `to` -->
      <!-- `<router-link>` sera rendu en tag `<a>` par défaut -->
      <router-link to="/ListMachines">La liste ici</router-link>
      <router-link to="/Map">La carte ici</router-link>
      <router-link to="/Machine">La machine ici</router-link>
    </p>
    <!-- balise pour le composant router-view -->
    <!-- le composant correspondant à la route sera rendu ici -->
    <div>
      <button @click="onMachinesListClick">affiche moi un message d'alerte , merci</button>
    </div>
    <router-view></router-view>

    <div>
      <button @click="onMapClick">affiche moi la carte, merci</button>

      <div v-if="img.show">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRwu0xIO9bn5T1ItgbobQH-0QkKuszmNJSfBxfkyv08YrsDohknQ"
          alt="carte">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {

        img: {
          show: true
        },
        msg: 'Welcome to Your Vue.js App'
      }
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
