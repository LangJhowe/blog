<template>
    <scroll class="music-list-scroll" :data="songList">
      <ul class="music-list">
        <music-item :isHeader="true"></music-item>
        <music-item v-for="(song, index) in songList" :key="index" :song="song" :number="index + 1"></music-item>
      </ul>
    </scroll>
</template>

<script>
import MusicItem from 'base/music-item/music-item'
import Scroll from 'base/scroll/scroll'
export default {
  props:{
    songList:{
      type:Array,
      default:[]
    }
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
    height 500px
    overflow hidden
}
</style>
