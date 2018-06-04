<template>
  <div class="nav-left">
    <div class="logo">Jhowe</div>
    <div class="navbar">
      <div class="nav-tab" v-for="tab in this.navTabsArr">{{tab}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        navTabsArr:[
          "Home","Music","Todo",
        ]

      }
    }
  }
</script>

<style scoped lang="stylus">
.nav-left{
  height 50px
  *{
    display inline-block
    height 100%
  }
  .logo{
    padding 0 20px
    line-height 50px
    font-size 1.875em
    font-weight bolder
    font-family:'ChannelSlanted2';
  }
  .navbar{
    height 100%
    .nav-tab{
      font-size 1.5625em
      line-height 50px
      padding 0 20px
    }
    .nav-tab:hover{
      transform translate(-1px,-2px)
      background-color rgba(256,256,256,.3)
    }
  }
}
</style>
