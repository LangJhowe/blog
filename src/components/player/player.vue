<template>
    <div class="player">
        <transition name="normal">
            <div class="player-info" v-show='fullScreen'>
                <div class="music-nav">
                    music-nav
                </div>
                <div class="main">
                    <music-list class="music-list" :songList="getSonglist"></music-list>
                    <div class="current-music-info">
                        current-music
                    </div>
                </div>
            </div>
        </transition>
        <transition>
            <div class="player-ctrl" v-show='!fullScreen'>

            </div>
        </transition>
        <transition name="opacity">
          <div class="player-cover">
            <img :src="currentSong.image" alt="">
          </div>
        </transition>
    </div>
</template>

<script>
import MusicList from 'base/music-list/music-list'
export default {
    props:{
        fullScreen:{
            type:Boolean,
            default:true
        }
    },
    data(){
      return {
        songList:[],
        currentSong:{}
      }
    },
    mounted(){
      this.$axios.get('/static/data/localSongList.json').then((res)=>{
          console.log(res)
          this.songList = res.data.songList
          this.currentSong = this.songList[0]
        })
    },
    computed:{
      getSonglist(){
        return this.songList
      }
    },
    methods:{

    },
    components:{
        MusicList
    }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/variable.styl"
.player{
    font-size $font-size-medium
    .player-info{
        width 1560px
        height 520px
        margin 0 auto
        .music-nav{
            height 50px
        }
        .main{
          *{
            float left
          }
          .music-list{
            width 75%
          }
          .current-music-info{
            width 25%
            height 100%
            background-color rgba(150,0,0,0.5)
          }  
        }
    }
    .player-cover{
      img{
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        z-index -50
        -webkit-filter blur(30px)
        -moz-filter blur(30px)
        -o-filter blur(30px)
        -ms-filter blur(30px)
        filter blur(30px)
      }
    }
}
</style>
