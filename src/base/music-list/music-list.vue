<template>
    <div class="music-list">
        <music-item :isHeader="true"></music-item>
        
        <music-item></music-item>
    </div>
</template>

<script>
import MusicItem from 'base/music-item/music-item'
export default {
    components:{
        MusicItem
    }
}
</script>

<style lang="stylus" scoped>
.music-list{
    
}
</style>
