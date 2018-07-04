<template>
    <div class="local-music">
      <music-list :songs="songs"></music-list> 
    </div>
</template>

<script>
import MusicList from 'base/music-list/music-list'
import { mapGetters, mapMutations } from 'vuex'
import { getSongVkey} from 'api/song'
export default {
    data(){
      return {
        songs:[]
      }
    },
    computed:{
      ...mapGetters(
        ['localList']
      )
    },
    created(){
      this._getLocalList()
    },
    methods:{
      _getLocalList(){
        this.$axios('/static/data/localSongList.json').then((res)=>{
          if(res.status === 200){
            let list = res.data.songList
            this.songs = list
            list.forEach((item) => {
              getSongVkey(item.mid).then((res) => {
                let vkey = res.data.items[0].vkey
                item.url = `http://dl.stream.qqmusic.qq.com/C400${item.mid}.m4a?vkey=${vkey}&guid=8282096940&uin=0&fromtag=66`
              })
            })
          }
        })
      },
      ...mapMutations({
        setLocalList:'SET_LOCAL_LIST',
      })
    },
    components:{
      MusicList
      
    }
}
</script>

<style lang="stylus" scoped>
.local-music{
  
}
</style>

