<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    props:{
        probeTybe:{
            type:Number,
            default: 1
        },
        click:{
            type:Boolean,
            default: true
        },
        listenScroll:{
            type:Boolean,
            default:false
        },
        data:{
            type:Array,
            default: null
        },
        pullup: {// 上拉刷新
            type: Boolean,
            default: false
        },
        beforeScroll: {// 在滚动开始派发一个beforeScroll时间
            type: Boolean,
            default: false
        },
        refreshDelay: {
            type: Number,
            default: 20
        }
    },
    mounted(){
        setTimeout(()=>{
            this._initScroll()
        },20)
    },
    methods:{
        _initScroll(){
            if(!this.$refs.wrapper){
                return
            }
            this.scroll = new BScroll(this.$refs.wrapper,{
                probeType: this.probeType,
                click: this.click,
                mouseWheel: {
                    speed: 20,
                    invert: false,
                    easeTime: 300
                },
                scrollbar: {
                    fade: true,
                    interactive: true // 1.8.0 新增
                }
            })

            if(this.pullup){
                this.scroll.on('scrollEnd', () => {
                    if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
                    this.$emit('scrollToEnd')// 滚动到底部
                    }
                })
            }

            if (this.beforeScroll) {
                this.scroll.on('beforeScrollStart', () => {
                    this.$emit('beforeScroll')
                })
            }
        },
        // 代理
        disable() {
          this.scroll && this.scroll.disable()
        },
        enable() {
          this.scroll && this.scroll.enable()
        },
        // 刷新 scroll
        refresh() {
          this.scroll && this.scroll.refresh()
        },
        // 歌手列表点击字母 跳转到 对应group
        scrollTo() {
          this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
        },
        scrollToElement() {
          this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
        }
    },
    watch:{
        data(){
            setTimeout(()=>{
                this.refresh
            },this.refreshDelay)
        }
    }
}
</script>

<style lang="stylus" scoped>
.scroll{

}
</style>
