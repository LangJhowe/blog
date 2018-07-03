<template>
  <div class="background" >
    <background-pic v-show="index === ActiveIdx" v-for="(pic, index) in bgdPicArr" :key="index" :pic="pic"></background-pic>
    <div class="bgd-cover"></div>
  </div>
</template>

<script>
import BackgroundPic from 'base/background-pic/background-pic'
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
      console.log('s')
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
  },
  components:{
    BackgroundPic
  }
}
</script>

<style scoped lang="stylus">
.background{
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  z-index -50
  .bgd-cover{
    background-color rgba(0,0,0,.3)
  }
}
</style>
