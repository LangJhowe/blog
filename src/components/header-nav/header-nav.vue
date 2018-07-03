<template>
    <div class="header-nav">
      <router-link class="nav-item" tag="div" to="/home">
        <div>Home</div>
      </router-link>
      <router-link class="nav-item" tag="div" to="/music">
        <div>Music</div>
      </router-link>
      <router-link class="nav-item" tag="div" to="/todo">
        <div> Todo</div>
      </router-link>
    </div>
</template>

<script>
  export default {
    props:{
      navName:{
        type:String,
        default:''
      }
    },
  }
</script>

<style scoped lang="stylus">
@import "../../common/stylus/variable.styl"
.header-nav{
  overflow hidden
  .nav-item{
    float left
    font-size $font-size-large-x
    line-height 50px
    padding 0 20px
    border-radius 5px
    transition-duration 200ms
    &:hover{
      transform translate(-1px,-2px)
      background-color rgba(256,256,256,.3)
      box-shadow 1px 2px 5px rgba(256,256,256,1)
    }
  }
}
</style>
