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
import HeaderNav from 'base/header-nav/header-nav'
export default {
  components:{
    HeaderNav
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
      }
      .header-right{
        float right
      }
    }

  }
</style>
