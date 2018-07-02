<template>
    <div class="player">
        <transition name="normal">
            <div class="player-info" v-show='fullScreen'>
                <div class="header">
                    header
                </div>
                <div class="main">
                    <music-list></music-list>
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
                background-color rgba(150,0,0,0.5)
            }
        }
    }
}
</style>
