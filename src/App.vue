<template lang="pug">
  div#app
    div.normal(v-if="!isPlugged")
      div(v-if="level >= threshold")
        chara(:pattern="4")
      div(v-else)
        chara(:pattern="1")

    div.plug(v-else)
      div.ok(v-if="!isAnimation")
        chara(:pattern="2")

      div.action(v-else)
        chara.front(:pattern="3")
        div.rotate
          div.bg
            ul
              - for (var i = 0; i < 300; i++)
                li
</template>

<script>
import Chara from './components/Chara'
export default {
  components: {
    Chara,
  },
  data () {
    return {
      threshold: 50,
      isAnimation: true,
      level: null,
      isPlugged: false
    }
  },
  mounted () {
    document.addEventListener('deviceready', this.onDeviceReady, false)
  },
  methods: {
    onDeviceReady () {
      /* cordova.plugins.backgroundMode.enable()
      cordova.plugins.backgroundMode.on('enable', () => {
        setInterval(this.loop, 1000)
      }) */
      window.addEventListener('batterystatus', this.onBatteryStatus, false)
    },
    onBatteryStatus (status) {
      this.level = status.level
      if (!this.isPlugged && status.isPlugged) {
        this.isAnimation = true
        setTimeout(() => {
          navigator.vibrate([100, 100, 200, 100, 1000])
          this.isAnimation = false
        }, 3000)
      }
      this.isPlugged = status.isPlugged
    }
    /* loop () {
      if (this.count === 100) cordova.plugins.backgroundMode.moveToForeground()
      if (this.count === 150) cordova.plugins.backgroundMode.moveToBackground()
    } */
  }
}
</script>

<style lang="stylus">
html, body
  margin 0
  padding 0
  width 100vw
  height 100vh
  overflow hidden
@keyframes scroll
  100%
    transform translateY(-500vh)

#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  .normal
    width 100vw
    height 100vh
  .action
    width 100vw
    height 100vh
    position relative
    .front
      z-index 10
      position absolute
      top 0
      left 0
    .rotate
      position relative
      left -100vw
      width 400vw
      height 100vh
      transform rotate(30deg)
      .bg
        animation-name scroll
        animation-duration 10s
        animation-timing-function linear
        animation-iteration-count infinite
        ul
          margin 0
          padding 0
          li
            width 100%
            height 20px
            list-style none
            background #192a07
            &:nth-child(even)
              background #000
</style>
