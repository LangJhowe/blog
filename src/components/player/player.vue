<template>
    <div class="player">
        <transition name="bottom">
            <div class="wrapper">
                <div class="player-ctrl">
                    <div class="operator">
                        <div class="prev">
                            <i class="icon prev-icon"></i>
                        </div>
                        <div class="togglePlaying">
                            <i class="icon playing-icon"></i>
                        </div>
                        <div class="next">
                            <i class="icon next-icon"></i>
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progress-wrapper">
                            <div class="current-song">
                                <span class="song-info">currentSong.name - currentSong.singer</span>
                                <span class="song-time">02:00 / formatDuration</span>
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
            <img src="" alt="">
          </div>
        </transition>
    </div>
</template>

<script>
import { mapGetters, mapMutations} from 'vuex'
import {getSongVkey} from 'api/song.js'
import {ERR_OK} from 'api/config.js'
export default {
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/icon.styl"
@import "../../common/stylus/variable.styl"
.player{
    position fixed
    left 0
    bottom 0
    width 100%
    .wrapper{
        margin: 0 7.5%;
        min-width 968px
        .player-ctrl{
            width 100%
            .operator,.progress,.right{
                float left
                height 100px
                display flex
                justify-content center
                align-items center
            }
            .operator{
                width 25%
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
                width 50%
                background-color $test-color-2
                font-size $font-size-medium-x
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
