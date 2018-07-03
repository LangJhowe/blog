<template>
    <div class="navbar">
      <router-link tag="div" :to="`/${navName}`">
        <div class="nav-tab" v-html="navName"></div>
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
.navbar{
    .nav-tab{
      font-size $font-size-large-x
      line-height 50px
      padding 0 20px
      border-radius 5px
      transition-duration 200ms
    }
    .nav-tab:hover{
      transform translate(-1px,-2px)
      background-color rgba(256,256,256,.3)
      box-shadow 1px 2px 5px rgba(256,256,256,1)
    }
}
</style>
