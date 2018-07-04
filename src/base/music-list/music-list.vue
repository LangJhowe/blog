<template>
    <div class="music-list">
      <div class="main">
        <scroll class="music-list-scroll" :data="songs">
          <song-list :songs="songs" @select="selectItem"></song-list>
        </scroll>
      </div>
      <div class="current-music-info">
        <div class="image">
          <div class="wrapper">
            <img :src="currentSong.image" alt="">
          </div>
        </div>
        <div class="text">
          <div class="wrapper">
            <div class="name">
              <span>歌曲名 : </span><span v-html="currentSong.name"></span>
            </div>
            <div class="singer">
              <span>歌手名 : </span><span v-html="currentSong.singer"></span>
            </div>
            <div class="album">
              <span>专辑名 : </span><span v-html="currentSong.album"></span>
            </div>
          </div>
        </div>
        <div class="lyric">
          <div class="wrapper">
            歌词
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Scroll from 'base/scroll/scroll'
import SongList from 'base/song-list/song-list'
import {mapActions, mapGetters} from 'vuex'
export default {
  props:{
    songs:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
    }
  },
  created(){
  },
  computed:{
    currentSongInfo(){
    },
    ...mapGetters([
      'currentSong'
    ])
  },
  methods:{
    selectItem(item, index){
      this.selectPlay({
        list: this.songs,
        index: index
      })
    },
    ...mapActions([
      'selectPlay'
    ])
  },
  components:{
    SongList,
    Scroll
  }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/variable.styl"
.music-list{
  .main{
    float left
    width 70%
    .music-list-scroll{
      position relative
      height 500px
      overflow hidden
    }
  }
  .current-music-info{
    float left
    width 30%
    height 500px
    color $color-text-l
    .image,.text,.lyric{
      display flex
      justify-content center
      align-items center
      .wrapper{
        text-align center
        img{
          width 200px
          height 200px
          border-radius 30px
          border 10px solid rgba(255,255,255,.3)
        }
      }
    }
    .image{
      height 45%
    }
    .text{
      height 15%
    }
    .lyric{
      height 40%
      background $test-color-5
    }
  }
}
</style>
