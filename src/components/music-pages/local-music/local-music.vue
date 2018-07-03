<template>
    <div class="local-music">
        <music-list :songs="songs"></music-list>
    </div>
</template>

<script>
import MusicList from 'base/music-list/music-list'
export default {
    data(){
      return {
        songs:[]
      }
    },
    created(){
      this._getLocalList()
    },
    methods:{
      _getLocalList(){
        this.$axios('/static/data/localSongList.json').then((res)=>{
          console.log(res.data.songList)
          
          if(res.data === 200){
            this.songs = res.data.songList
            console.log(res.data.songList)
          }
        })
      }
    },
    components:{
      MusicList
    }
}
</script>

<style lang="stylus" scoped>

</style>

