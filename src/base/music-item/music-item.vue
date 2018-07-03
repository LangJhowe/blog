<template>
    <li class="music-item">
        <i class="music-item-line top"></i>
        <div class="list-header" v-if="isHeader">
          <span class="list-name">歌曲</span>
          <span class="list-singer">歌手</span>
          <span class="list-time">时长</span>
        </div>
        <div class="music-info" v-if="!isHeader">
          <span class="list-number">{{number}}</span>
          <span class="list-name" v-html="song.name"></span>
          <span class="list-singer" v-html="song.singer"></span>
          <span class="list-time" v-html="duration"></span>     
        </div>
        <i class="music-item-line"></i>
    </li>
</template>

<script>
export default {
    props:{
        isHeader:{
            type:Boolean,
            default:false
        },
        song:{
          type:Object,
          default:function(){
            return {}
          }
        },
        number:{
          type:Number,
          default: 0
        }
    },
    computed:{
        name(){
            return song.name
        },
        duration(){
            let time = this.song.duration
            let min = Math.floor(time / 60)
            let second = time % 60
            min = min < 10 ? "0" + min : min
            second = second < 10 ? "0" + second : second
            return min + ":" + second
        }
    },
    methods:{
        _formatDuration(time){
            
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/variable.styl"
.music-item{
    color $color-text-l
    position relative
    .list-header,.music-info{
        padding-left 62px
        padding-right 32px
        overflow hidden
        position relative
        span{
            float left 
            height 50px
            line-height 50px
        }
        .list-number{
          position absolute
          top 0
          left 45px
        }
        .list-name{
            width 60%
        }
        .list-singer{
            width 30%
        }
        .list-time{
            width 10%
        }
    }
    .music-info{
    }
    .music-item-line{
      position absolute
      width 100%
      bottom 0
      height 1px
      background-color $line-color
    }
    .top{
        top 0
    }
    &:hover{
        background-color rgba(255,255,255,.1)
    }
}
</style>
