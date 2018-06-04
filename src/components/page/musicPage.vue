<template>
  <div class="music-player">
    <div class="music-wrap">
      <MusicList :MUSIC_LIST="MUSIC_LIST"></MusicList>
      <MusicCtrl :currentMusic="currentMusic"></MusicCtrl>
      </div>
    </div>
</template>

<script>
import { MUSIC_LIST} from "../../assets/data/musiclist";
import MusicList from '../musiclist'
import MusicCtrl from '../musicCtrl'
export default {
  components:{
    MusicList,
    MusicCtrl,
  },
  data(){
    return{
      MUSIC_LIST:MUSIC_LIST,
      currentMusic:MUSIC_LIST[0],
    }
  },
  methods:{

  }

}
</script>

<style scoped lang="stylus">
  .music-player{
    padding 0 50px
    height 70%
    .music-wrap{
      margin 150px 50px 0 50px
      background-color rgba(0,0,0,.2)
    }
  }
</style>
