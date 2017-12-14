<template lang="pug">
  div#app
    h1 battery
    p {{ level }}
    div
      p(v-if="isPlugged") yes
      p(v-else) no
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  data () {
    return {
      level: null,
      isPlugged: false
    }
  },
  components: {
    HelloWorld
  },
  mounted () {
    document.addEventListener('deviceready', this.onDeviceReady, false)
  },
  methods: {
    onDeviceReady () {
      console.log('ready')
      window.addEventListener('batterystatus', this.onBatteryStatus, false)
    },
    onBatteryStatus (status) {
      console.log('battery')
      console.log(status)
      this.level = status.level
      this.isPlugged = status.isPlugged
    }
  }
}
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
</style>
