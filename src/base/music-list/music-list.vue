<template>
    <ul class="music-list">
        <music-item :isHeader="true"></music-item>
        
        <music-item v-for="(song, index) in songList" :key="index" :song="song" :number="index + 1"></music-item>
    </ul>
</template>

<script>
import MusicItem from 'base/music-item/music-item'
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
    MusicItem
  }
}
</script>

<style lang="stylus" scoped>
.music-list{
    
}
</style>
