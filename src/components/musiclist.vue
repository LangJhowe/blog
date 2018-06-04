<template>
  <table class="music-list">
    <tr>
      <th class="music-title">歌曲名</th>
      <th class="music-aritst">歌手</th>
      <th class="music-album">专辑</th>
      <th class="music-duration">时长</th>
    </tr>
    <MusicItem v-for="(music,index) in MUSIC_LIST" :music="music" :key="music.id"></MusicItem>
  </table>
</template>

<script>
  import MusicItem from './musicItem'
  export default {
    components:{
      MusicItem,
    },
    props:{
      MUSIC_LIST:{
        type:Array,
        required:true
      }
    },
    data(){
      return{
      }
    }
  }
</script>

<style scoped lang="stylus">
  .music-list{
    display block
    border 1px solid transparent
    border-radius 2px
    tr{
      display block
      font-size 0
    }
    tr th{
      display inline-block
      width 25%
      color rgba(172,172,172,.9)
      text-align left
      font-size 20px
    }
  }
</style>
