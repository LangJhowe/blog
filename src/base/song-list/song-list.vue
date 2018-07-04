<template>
    <div class="song-list">
        <ul>
            <li class="item">
                <i class="item-line top"></i>
                <div class="header">
                    <span class="name">歌曲</span>
                    <span class="singer">歌手</span>
                    <span class="time">时长</span>
                </div>
            </li>
            <li class="item"
                v-for="(song,index) in songs"
                @click.stop="selectItem(song, index)"
                :key="index">
                <i class="item-line top"></i>
                <div class="item-info">
                    <span class="number">{{index + 1}}</span>
                    <span class="name" v-html="song.name"></span>
                    <span class="singer" v-html="song.singer"></span>
                    <span class="time" v-html="format(song.duration)"></span>     
                </div>
                <i class="item-line"></i>
            </li>
        </ul>
    </div>
    
</template>

<script>
export default {
    props:{
        songs:{
          type:Array,
          default(){
              return []
          }
        }
    },
    computed:{
        name(){
            return song.name
        },
    },
    methods:{
        selectItem(item, index){
            this.$emit('select',item, index)
        },
        format(time){
            let min = Math.floor(time / 60)
            let second = time % 60
            min = min < 10 ? "0" + min : min
            second = second < 10 ? "0" + second : second
            return min + ":" + second
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/variable.styl"
.song-list{
    .item{
    color $color-text-l
    position relative
    &:hover{
        color $color-text-ll
    }
    .header,.item-info{
        padding-left 62px
        padding-right 32px
        overflow hidden
        position relative
        span{
            float left 
            height 50px
            line-height 50px
        }
        .number{
          position absolute
          top 0
          left 45px
        }
        .name{
            width 60%
        }
        .singer{
            width 30%
        }
        .time{
            width 10%
        }
    }
    .item-info{
    }
    .item-line{
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
}
</style>
