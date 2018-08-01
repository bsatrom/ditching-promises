<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="locate">Locate Me</button>
    <button v-on:click="getParticleDevices">Get Particle Devices</button>
    <button v-on:click="getOnlineDevices">Get Online Devices</button>
    <button v-on:click="getDeviceFunctions">Get Device Functions</button>
    <button v-on:click="getFunctionsAsync">Get Functions (Async)</button>
  </div>
</template>

<script>
import geolocation from '../geolocation';
import particle from '../particle';
let coords;

export default {
  name: 'HelloCallbacks',
  props: {
    msg: String,
    coords: {}
  },
  methods: {
    locate: function(event) {
      //geolocation.cbLocate(pos => console.log(pos), err => console.log(err));

      geolocation
        .promiseLocate()
        .then(pos => console.log(pos))
        .catch(err => console.log(err));
    },
    getParticleDevices: () => {
      particle.listDevices().then(devices => console.table(devices));
    },
    getOnlineDevices: () => {
      particle.onlineDevices().then(devices => console.table(devices));
    },
    getDeviceFunctions: () => {
      particle
        .deviceFunctions('trash-panda')
        .then(functions => console.table(functions))
        .catch(err => console.log(err));
    },
    getFunctionsAsync: () => {
      particle.deviceFunctionsAsync('trash-panda');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
