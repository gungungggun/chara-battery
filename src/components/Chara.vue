<template lang="pug">
  div.cp-chara
    div.chara
      img(:src="imgsrc")
    div.message
      p(:class="cls") {{ message }}
</template>

<script>
export default {
  props: {
    prefix: {
      type: String,
      default: 'test'
    },
    pattern: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      master: {
        test: {
          pattern1: {
            message: 'じゅうでんしてね',
            cls: 'blink'
          },
          pattern2: {
            message: 'じゅうでんちゅう'
          },
          pattern3: {
            message: 'げんきになるよ'
          },
          pattern4: {
            message: 'げんきです'
          }
        }
      }
    }
  },
  computed: {
    cls () {
      let pattern = 'pattern' + this.pattern
      return this.master[this.prefix][pattern].cls
    },
    message () {
      let pattern = 'pattern' + this.pattern
      return this.master[this.prefix][pattern].message
    },
    imgsrc () {
      return '/static/test.png'
    }
  }
}
</script>

<style lang="stylus" scoped>
@keyframes blink
  0%
    opacity 0
  30%
    opacity 1
  50%
    opacity 1
  70%
    opacity 1
  100%
    opacity 0

.blink
  animation-name blink
  animation-duration 1.5s
  animation-iteration-count infinite
  animation-play-state running

.cp-chara
  width 100vw
  height 100vh
  .chara
    width 100%
    height 80vh
    img
      height 100%
  .message
    width 100%
    height 20vh
    p
      text-align center
      font-size 25px
      font-weight bold
      color #BF0000
</style>
