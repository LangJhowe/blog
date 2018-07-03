<template>
  <div class="header">
    <div class="header-wrap">
      <div class="header-left">
        <div class="logo">Jhowe</div>
        <HeaderNav></HeaderNav>
      </div>
      <div class="header-right">
        55
      </div>
    </div>
  </div>
</template>


<script>
import HeaderNav from 'base/header-nav/header-nav'
export default {
  components:{
    HeaderNav
  },
  data(){
    return{
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../common/stylus/variable.styl"
  .header{
    background-color rgba(0,0,0,.4)
    .header-wrap{
      min-width 968px
      margin 0 7.5%
      height 50px
      .header-left{
        float left
        .logo{
          float left
          padding 0 20px
          line-height 50px
          font-size $font-size-large-x
          font-weight bolder
          font-family:'ChannelSlanted2';
        }
      }
      .header-right{
        float right
      }
    }

  }
</style>
