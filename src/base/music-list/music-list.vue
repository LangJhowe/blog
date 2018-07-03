<template>
    <scroll class="music-list-scroll" :data="songs">
      <ul class="music-list">
        <music-item :isHeader="true"></music-item>
        <music-item v-for="(song, index) in songs" :key="index" :song="song" :number="index + 1"></music-item>
      </ul>
    </scroll>
</template>

<script>
import MusicItem from 'base/music-item/music-item'
import Scroll from 'base/scroll/scroll'
export default {
  props:{
    songs:{
      type:Array,
      default(){
        return []
      }
    }
  },
  created(){
    console.log(this.songs)
  },
  computed:{
  },
  components:{
    MusicItem,
    Scroll
  }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/variable.styl"
.music-list-scroll{
    position relative
    height 500px
    overflow hidden
}
</style>
