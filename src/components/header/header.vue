<template>
  <div class="header">
    <div class="header-wrap">
      <div class="header-left">
        <div class="logo">Jhowe</div>
        <HeaderNav class="header-nav" v-for="(nav, index) in navs" :key="index" :navName="nav"></HeaderNav>
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
      navs:["Home","Music","Todo"]
    }
  }
}
</script>

<style scoped lang="stylus">
  .header{
    background-color rgba(0,0,0,.4)
    .header-wrap{
      width 1200px
      margin 0 auto
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
        .header-nav{
          float left
        }
      }
      .header-right{
        float right
      }
    }

  }
</style>
