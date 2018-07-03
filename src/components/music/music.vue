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
        <transition name="bottom">
            <div class="player-ctrl">
                <div class="wrapper">
                    <div class="operator">
                        <div class="prev">
                            <i class="icon prev-icon"></i>
                        </div>
                        <div class="togglePlaying">
                            <i class="icon toggle-icon"></i>
                        </div>
                        <div class="next">
                            <i class="icon next-icon"></i>
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progress-wrapper">
                            <div class="current-song">
                                <span class="song-info">{{currentSong.name}} - {{currentSong.singer}}</span>
                                <span class="song-time">02:00 / {{formatDuration}}</span>
                            </div>
                            <div class="xx">xxx

                            </div>
                        </div>
                    </div>
                    <div class="right">3</div>
                </div>
            </div>
        </transition>
        <transition name="opacity">
          <div class="player-cover">
            <img :src="currentSong.image" alt="">
          </div>
        </transition>
        <audio ref="audio" src=""></audio>
    </div>
</template>

<script>
import MusicList from 'base/music-list/music-list'
import {getSongVkey} from 'api/song.js'
import {ERR_OK} from 'api/config.js'
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
          this.songList.forEach((song,index)=>{
              getSongVkey(song.mid).then((res)=>{
                  if(res.code === ERR_OK){
                    let vkey = res.data.items[0].vkey
                    song.url = `http://dl.stream.qqmusic.qq.com/C400${song.mid}.m4a?vkey=${vkey}&guid=7433512452&uin=670347102&fromtag=66`
                  } 
              })
          })
        })
    },
    computed:{
      getSonglist(){
        return this.songList
      },
      formatDuration(){
        let time = this.currentSong.duration
        let min = Math.floor(time / 60)
        let second = time % 60
        min = min < 10 ? "0" + min : min
        second = second < 10 ? "0" + second : second
        return min + ":" + second
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
@import "../../common/stylus/icon.styl"
.player{
    font-size $font-size-medium
    .player-info{
        height 520px
        margin: 0 7.5%;
        min-width 968px
        .music-nav{
            height 50px
        }
        .main{
          .music-list{
            float left
            width 75%
          }
          .current-music-info{
            float left
            width 25%
            height 100%
            background-color rgba(150,0,0,0.5)
          }  
        }
    }
    .player-ctrl{
        position fixed
        left 0
        bottom 0
        width 100%
        margin: 0 7.5%;
        min-width 968px
        height 100px
        .wrapper{
            width 100%
            height 100%
            .operator,.progress,.right{
                float left
                height 100%
                display flex
                justify-content center
                align-items center
            }
            .operator{
                width 30%
                background-color $test-color-1
                .prev,.togglePlaying,.next{
                    display flex
                    align-items center
                    margin 0 10px
                    padding 20px
                    height 20px
                    cursor pointer
                }
            }
            .progress{
                width 30%
                background-color $test-color-2
                .progress-wrapper{
                    width 100%
                    .current-song{
                        display block
                        .song-info{

                        }
                        .song-time{
                            float right
                        }
                    }
                    .xx{
                        display block
                    }
                }
                
            }
            .right{
                width 25%
                background-color $test-color-3
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
