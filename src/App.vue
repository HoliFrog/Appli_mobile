<template>
  <div id="app">
    <img src="./assets/images.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
<List></List>
    <div>
      <button @click="onMachinesListClick">affiche moi un message d'alerte , merci</button>
    </div>
<Map></Map>
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
