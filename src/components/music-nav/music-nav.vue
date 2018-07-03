<template>
    <div class="music-nav">
      <div class="nav-item">本地歌曲</div>
      <div class="nav-item">推荐歌单</div>
      <div class="nav-item"> 最新排行</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/variable.styl"
.music-nav{
    display flex
    align-items center
    padding 0 60px
    height 50px
    color $color-text-l
    .nav-item{
        float left
        margin-right 20px
        padding 5px 10px
        border 2px solid $line-color-l
        border-radius 15px
        cursor pointer
        &:hover{
            color $color-text-ll
            border 2px solid $line-color-ll
            background-color rgba(0,0,0,.3)
        }
    }
}
</style>
