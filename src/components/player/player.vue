<template>
    <div class="player">
        <transition name="bottom">
            <div class="wrapper">
                <div class="player-ctrl">
                    <div class="operator">
                        <div class="prev" @click="prev">
                            <i class="icon prev-icon"></i>
                        </div>
                        <div class="togglePlaying" @click="togglePlaying">
                            <i class="icon" :class="playIcon"></i>
                        </div>
                        <div class="next" @click="next">
                            <i class="icon next-icon"></i>
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progress-wrapper">
                            <div class="current-song">
                                <span class="song-info" v-html="currentSong.name+ ' - ' + currentSong.singer"></span>
                                <span class="song-time">{{format(currentTime)}} / {{format(currentSong.duration)}}</span>
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
        <audio ref="audio" :src="currentSong.url" @play="ready" @error="error" @timeupdate="updateTime" @ended="end" ></audio>
    </div>
</template>

<script>
import { mapGetters, mapMutations} from 'vuex'
import {getSongVkey} from 'api/song.js'
import {ERR_OK} from 'api/config.js'
import {playMode} from 'common/js/config'
export default {
    data(){
        return {
            songReady:false,
            currentTime: 0,
            currentLyric: null,
            currentLinenNum: 0,
            curretnShow: 'cd',
            playingLyric: '',
            noLyricText: ''
        }
    },
    computed:{
        playIcon(){
            return this.playing ? 'pause-icon' : 'playing-icon'
        },
        ...mapGetters([
            'currentIndex',
            'play',
            'sequenceList',
            'playlist',
            'currentSong',
            'mode',
            'playing'
        ])
    },
    methods:{
        ready() {
            this.songReady = true
        },
        togglePlaying(){
            if(!this.songReady){
                return
            }
            this.setPlayState(!this.playing)
        },
        error(){

        },
        updateTime(e){
            this.currentTime = e.target.currentTime
        },
        end(){
            if (this.mode === playMode.loop) {
                this.loop()
             } else {
                this.next()
             }
        },
        prev() {
            if (!this.songReady) {
                return
            }
            if (this.playlist.length === 1) {
                // 当歌单只有一首歌的时候
                // currentSong不会改变也不会执行watch里的内容
                this.loop()
            } else {
                let index = this.currentIndex - 1
                if (index === -1) {
                    index = this.playlist.length - 1
                }
                 this.setCurrentIndex(index)
                // 播放时 切换歌曲 同时改变playing状态 开始
                if (!this.playing) {
                    this.togglePlaying()
                }
                // 播放时 切换歌曲 同时改变playing状态 结束
            }
            this.songReady = false
        },
        next() {
            if (!this.songReady) {
                return
            }
            if (this.playlist.length === 1) {
                // 当歌单只有一首歌的时候
                // currentSong不会改变也不会执行watch里的内容
                this.loop()
                return // 当列表只有一首歌的时候 切歌 那么control都会disable
            } else {
                let index = this.currentIndex + 1
                if (index === this.playlist.length) {
                    index = 0
                }
                this.setCurrentIndex(index)
                if (!this.playing) {
                    this.togglePlaying()
                }
            }
            this.songReady = false
        },
        format(time){
            if(!time){
                return '00:00'
            }
            let min = Math.floor( time / 60)
            let second = (time % 60).toFixed(0)
            min = min < 10 ? "0" + min : min
            second = second < 10 ? "0" + second : second
            return min + ":" + second
        },
        ...mapMutations({
            setPlayState:'SET_PLAYING_STATE',
            setCurrentIndex:'SET_CURRENT_INDEX'
        })
    },
    watch:{
        currentSong(newSong, oldSong){
            if(!newSong.id){
                reuturn
            }
            if(newSong.id === oldSong.id){
                return
            }
            clearTimeout(this.timer)
            this.timer = setTimeout(()=>{
                this.$refs.audio.play()
            },1000)
        },
        playing(newPlaying) {
            this.$nextTick(() => {
                const audio = this.$refs.audio
                newPlaying ? audio.play() : audio.pause()
            })
        }
    }
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
