<template>
    <li class="music-item">
        <div class="list-header" v-if="isHeader">
          <i class="music-item-line" v-if="isHeader"></i>
          <span class="list-name">歌曲</span>
          <span class="list-singer">歌手</span>
          <span class="list-time">时长</span>
          <i class="music-item-line" v-if="isHeader"></i>
        </div>

        <div class="music-info" v-if="!isHeader">
          <span class="list-number">{{number}}</span>
          <span class="list-name">{{song.title}}</span>
          <span class="list-singer">{{song.artist}}</span>
          <span class="list-time">2:00</span>
          <i class="music-item-line" v-if="!isHeader"></i>
        </div>
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
    }
}
</script>

<style lang="stylus" scoped>
.music-item{
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
      display block
      height 1px
      background-color rgba(255,255,255,.2)
    }
}
</style>
