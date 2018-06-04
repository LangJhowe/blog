<template>
<div class="music-ctrl">
  <div class="ctrl-left">
    <div class="music-pic"><img width="85" height="85" :src="currentMusic.cover" alt="正在播放的音乐图片"></div>
    <div class="current-music-info">
      <div class="music-title"><strong>{{currentMusic.title}}</strong></div>
      <div class="music-artise">{{currentMusic.artist}}</div>
    </div>

  </div>
  <div class="ctrl-mid">
    <div class="progress">
      <Progress></Progress>
      <div>volume进度条</div>
    </div>
    <div class="change">
      <  ||  >
    </div>
  </div>
  <div class="ctrl-right">
    <div class="music-pic"><img src="" alt="正在播放的音乐图片"></div>
    <div class="mode">
      播放模式
    </div>

  </div>

</div>
</template>

<script>
import Progress from './progress'
export default {
  components:{
    Progress
  },
  props:{
    currentMusic:{
      type:Object,
      required:true
    }
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped lang="stylus">
.music-ctrl{
  color #fff
  font-size 0
  height 85px
  *{
    font-size 12px
  }
  .ctrl-left{
    float left
    width 20%
    height 100%
    .music-pic{
      float left
    }
    .current-music-info{
      float left
      *{
        font-size 12px
      }
      .music-title{
      }
      .music-artist{
      }
    }
  }
  .ctrl-mid{
    float left
    width 60%
    height 100%
  }
  .ctrl-right{
    float left
    width 20%
  }
}
</style>
