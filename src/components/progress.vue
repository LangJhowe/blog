<template>
  <div
    class="progress"
    @click="changeProgress"
    ref="progress"
  >
    <div
      class="inner-line"
      :style="{width:this.percentProgress}"
    ></div>
    <div
      class="inner-pointer"
      :style="{left:this.pointPositionX}"
      @mousedown="pointSlide"
    >
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        percentProgress:'0',
        pointPositionX:'-7.5px',
      }
    },
    mounted(){

    },
    methods:{
      changeProgress(e){
        let t = e || window.event;
        let MAX_WIDTH = this.$refs.progress.getBoundingClientRect().width;
        let progress = t.clientX - this.$refs.progress.getBoundingClientRect().left;
        this.percentProgress = progress / MAX_WIDTH*100 + "%";
        this.pointPositionX = progress - 7.5 + 'px';
      },
      pointSlide(e){
        let MAX_WIDTH = this.$refs.progress.getBoundingClientRect().width;
        let disX = e.clientX - e.target.offsetLeft;
        let that = this;
        document.onmousemove = (e) =>{
          let width = e.clientX-disX;
          width = width < 0? 0:width;
          width = width > MAX_WIDTH? MAX_WIDTH:width;
          that.percentProgress = width/MAX_WIDTH*100 +'%';
          that.pointPositionX = width - 7.5 + 'px';
        };
        document.onmouseup = (e) => {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      },
    },
    computed:{
      getPointX(){

      }
    }
  }
</script>

<style scoped lang="stylus">
  .progress{
    position relative
    margin-top 10px
    height 3px
    padding 1px
    width 100%
    border-radius 3px
    background-color #666
    cursor pointer
    .inner-line{
      height 3px
      border-radius 3px
      background-color greenyellow
    }
    .inner-pointer{
      position absolute
      top -5px
      width 15px
      height 15px
      border-radius 50%
      background-color rgba(199,69,82,.5)
    }
  }
</style>
