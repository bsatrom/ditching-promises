<template>
  <div id="app">
    <img class="rotate" src="./assets/spark.png">
    <HelloWorld msg="The Amazing Callback, Promise &amp; Async Generator"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.rotate {
  animation-name: rotate;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  -webkit-animation-name: rotate;
  -webkit-animation-duration: 10s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
}

@-webkit-keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@import url('https://fonts.googleapis.com/css?family=Varela+Round');

button {
  display: block;
  margin: auto;
  margin-top: 15px;
  width: 20vw;
  height: 6vw;
  font-family: 'Varela Round', sans-serif;
  font-size: 2vw;
  letter-spacing: 0.1em;
  color: #e8e8e8;
  border: none;
  border-radius: 10px;
  outline: none;
  background: linear-gradient(45deg, #d350db, teal, #d350db);
  background-size: 400% 400%;
  box-shadow: 1vw 1vw 0 #00a5ed;
  cursor: pointer;
  transition: all 0.3s ease;
}
button:hover {
  animation: gradient 10s ease infinite;
  font-size: 2.05vw;
  box-shadow: 0.2vw 0.2vw 0 #00a5ed;
}

@keyframes gradient {
  50% {
    background-position: 100% 0;
  }
}
</style>
