<template>
    <div class="music" >
        <transition name="normal">
            <div class="music-show">
                <div class="music-header">
                    <!-- <music-nav></music-nav> -->
                    <switches :switches="switches"></switches>
                </div>
                <div class="main">
                    <local-music v-if="true"></local-music>
                    <recommend v-if="false"></recommend>
                    <rank v-if="false"></rank >
                    <!-- <music-list class="music-list"></music-list>
                    <div class="current-music-info">
                        current-music
                    </div> -->
                </div>
            </div>
        </transition>
        
    </div>
</template>

<script>
import MusicList from 'base/music-list/music-list'
import MusicNav from 'components/music-nav/music-nav'
import Switches from 'base/switches/switches'
import LocalMusic from 'components/music-pages/local-music/local-music'
import Recommend from 'components/music-pages/recommend/recommend'
import Rank from 'components/music-pages/rank/rank'

import { mapGetters, mapMutations} from 'vuex'
export default {
    data(){
        return {
            switches:['本地歌单','推荐歌单','最新排行']
        }
    },
    components:{
        MusicList,
        MusicNav,
        Switches,
        LocalMusic,
        Recommend,
        Rank
    }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/variable.styl"
.music{
    margin-top 30px
    font-size $font-size-medium
    .music-show{
        height 520px
        margin: 0 7.5%;
        min-width 968px
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
    
}
</style>
