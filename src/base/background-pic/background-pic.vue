<template>
    <transition name="pic-opcity">
        <div class="background-pic">
            <img :src="pic.picUrl" alt="no-pic">
        </div>
    </transition>
</template>

<script>
export default {
    props:{
        pic:{
            type:Object,
            default:{}
        }   
    }
}
</script>

<style lang="stylus" scoped>
.background-pic{
    img{
        position absolute
        width 100%
        height 100%
    }
}
.pic-opcity-enter-active{
    transition-duration 2s
    opacity 1
}
.pic-opcity-leave-active{
    transition-duration 2s
    opacity 1
}
.pic-opcity-enter{
    opacity 0
}
.pic-opcity-leave-to{
    opacity 0
}

</style>
