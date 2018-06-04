<template>
  <div class="background" >
    <transition-group name="bgd-slide">
      <div
        class="pic-wrap"
        v-for="(pic,index) in bgdPicArr"
        :key="pic.picId"
        v-show="index === ActiveIdx"
      >
        <img
          :src="pic.picImage"
        />
      </div>
    </transition-group>
    <div class="bgd-cover"></div>
  </div>
</template>

<script>
export default {
  props:{
    bgdPicArr:{
      type:Array,     //type必须传进来的data中bgdPicList:[]的一样
      required:true
    }
  },
  data(){
    return{
      //静态图片 放在static文件夹下 使用绝对路径
      ActiveIdx:0,
      lock:true
    }
  },
  mounted(){
    setInterval(()=>{     //不能常规的，建议使用箭头函数
      this.changeBgdPic()
    },10000)
    //或
    // setInterval(this.changeBgdPic,2000)
  },
  computed:{

  },
  methods:{
    //bug,一开始进入页面，第一张图未完成动画时，点击图片触发方法会使全部图片小时
    changeBgdPic(){
      // this.lock = !this.lock;
      let picArrLength = this.bgdPicArr.length;
      this.ActiveIdx = (this.ActiveIdx + 1)%picArrLength;
      this.picSrc = this.bgdPicArr[this.ActiveIdx].picImage;
    },
  }
}
</script>

<style scoped lang="stylus">
.background{
  position absolute
  top 0
  width 100%
  height 100%
  z-index -50
  .pic-wrap{
    width 100%
    height 100%
    img{
      position absolute
      width 100%
      height 100%
    }
  }
  .bgd-slide-enter-active{
    position absolute
    transition-duration 2s
    opacity 1
  }
  .bgd-slide-leave-active{
    position absolute
    transition-duration 2s
    opacity 1
  }
  .bgd-slide-enter{
    opacity 0
  }
  .bgd-slide-leave-to{
    opacity 0
  }
  .bgd-cover{
    position absolute
    top 0
    width 100%
    height 100%
    background-color rgba(0,0,0,.3)
  }
}
</style>
