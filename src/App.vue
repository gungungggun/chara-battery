<template lang="pug">
  div#app
    h1 battery
    p {{ level }}
    div
      p(v-if="isPlugged") yes
      p(v-else) no
    p count {{ count }}
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  data () {
    return {
      level: null,
      isPlugged: false,
      count: 0
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
      cordova.plugins.backgroundMode.enable()
      cordova.plugins.backgroundMode.on('activate', () => {
        console.log('activate')
      })
      cordova.plugins.backgroundMode.on('enable', () => {
        console.log('enable')
        setInterval(this.loop, 1000)
      })
      cordova.plugins.backgroundMode.on('disable', () => {
        console.log('disable')
      })
      cordova.plugins.backgroundMode.on('deactivate', () => {
        console.log('deactivate')
      })
      cordova.plugins.backgroundMode.on('failure', () => {
        console.log('failure')
      })
      window.addEventListener('batterystatus', this.onBatteryStatus, false)
    },
    onBatteryStatus (status) {
      console.log('battery')
      this.level = status.level
      this.isPlugged = status.isPlugged
    },
    loop () {
      this.count++
      if (this.count === 100) cordova.plugins.backgroundMode.moveToForeground()
      if (this.count === 150) cordova.plugins.backgroundMode.moveToBackground()
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
