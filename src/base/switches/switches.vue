<template>
    <ul class="switches">
        <li class="switch-item" :class="{'active':currentIndex === index}" v-for="(item, index) in switches" :key="index" @click="switchItem(index)">{{item}}</li>
    </ul>
</template>

<script>
export default {
    props:{
        switches:{
            type:Array,
            default:[]
        },
        currentIndex:{
            type:Number,
            default:0
        }
    },
    methods:{
        switchItem(index){
            this.$emit('switch',index)
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/variable.styl"
.switches{
    display flex
    align-items center
    padding 0 60px
    height 50px
    color $color-text-l
    .switch-item{
        float left
        margin-right 20px
        padding 5px 10px
        border 2px solid $line-color-l
        border-radius 15px
        cursor pointer
        &:hover{
            color $color-text-ll
            border 2px solid $line-color-ll
            background-color rgba(0,0,0,.3)
            animation shake .3s 
        }
    }
    .active{
      color $color-text-ll
      border 2px solid $line-color-ll
      background-color rgba(0,0,0,.3)
    }
}
@keyframes shake {
  0%{
    transform translate3d(0,0,0)
    box-shadow 5px -5px 5px rgba(150,0,0,1)
  }
  20%{
    transform translate3d(5px,2px,0)
    box-shadow -4px 4px 4px rgba(0,150,0,1)
  }
  40%{
    transform translate3d(-4px,-1px,0)
    box-shadow 3px -3px 3px rgba(0,0,150,1)
  }
  60%{
    transform translate3d(3px,1px,0)
    box-shadow -2px 2px 4px rgba(150,150,0,1)
  }
  80%{
    transform translate3d(-2px,0px,0)
    background-color 1px -1px 5px rgba(150,0,150,1)
  }
  100%{
    transform translate3d(1px,1px,0)
  }
}
</style>

