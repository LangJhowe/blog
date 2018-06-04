<template>
  <div class="header">
    <div class="header-wrap">
      <div class="header-left">
        <HeaderNav></HeaderNav>
      </div>
      <div class="header-right">
        55
      </div>
    </div>
  </div>
</template>


<script>
  import HeaderNav from './headerNav'
export default {
  components:{
    HeaderNav
  }
}
</script>

<style scoped lang="stylus">
  .header{
    position fixed
    display block
    width 100%
    height 50px
    background-color rgba(0,0,0,.4)
    color #fff
    .header-wrap{
      height 100%
      margin 0 50px
      .header-left{
        float left
        width 70%
      }
      .header-right{
        float right
        width 30%
      }
    }

  }
</style>
