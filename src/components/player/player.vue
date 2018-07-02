<template>
    <div class="player">
        <transition name="normal">
            <div class="player-info" v-show='fullScreen'>
                <div class="header">
                    header
                </div>
                <div class="main">
                    <music-list :songList="getSonglist"></music-list>
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
            <img :src="currentSong.cover" alt="">
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
      this.$axios.get('/static/data/music.json').then((res)=>{
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
    font-size $font-size-large
    .player-info{
        background rgba(0,0,150,0.5)
        width 1200px
        height 500px
        margin 0 auto
        .header{
        }
        .main{
          *{
            float left
          }
          .music-list{
            width 60%
            background-color rgba(0,150,0,0.5)
          }
          .current-music-info{
            width 40%
            height 100%
            background-color rgba(150,0,0,0.5)
          }  
        }
    }
    .player-cover{
      img{
        position absolute
        top 0
        width 100%
        height 100%
        z-index -50
        -webkit-filter blur(10px)
        -moz-filter blur(10px)
        -o-filter blur(10px)
        -ms-filter blur(10px)
        filter blur(10px)
      }
    }
}
</style>
