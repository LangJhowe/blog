<template>
    <ul class="switches">
        <li class="switch-item" v-for="(item, index) in switches" :key="index" @click="switchItem(index)"></li>
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

</style>

