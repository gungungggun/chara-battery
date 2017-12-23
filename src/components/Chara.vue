<template lang="pug">
  div.cp-chara
    div.chara
      img(:src="imgsrc")
    div.message
      p(:class="cls" :style="style") {{ message }}
</template>

<script>
export default {
  props: {
    prefix: {
      type: String,
      default: 'droid'
    },
    pattern: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      master: {
        droid: {
          pattern1: {
            message: 'じゅうでんしてね',
            cls: 'blink'
          },
          pattern2: {
            message: 'じゅうでんちゅう'
          },
          pattern3: {
            message: 'げんきになるよ',
            style: {
              color: '#c2f290'
            }
          },
          pattern4: {
            message: 'げんきです'
          }
        }
      }
    }
  },
  computed: {
    pt () {
      let pattern = 'pattern' + this.pattern
      return this.master[this.prefix][pattern]
    },
    cls () {
      return this.pt.cls
    },
    style () {
      return this.pt.style
    },
    message () {
      return this.pt.message
    },
    imgsrc () {
      return 'static/' + this.prefix + this.pattern + '.png'
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
    display flex
    align-items center
    img
      width 100%
  .message
    width 100%
    height 20vh
    p
      text-align center
      font-size 25px
      font-weight bold
      color #BF0000
</style>
