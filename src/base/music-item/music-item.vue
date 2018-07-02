<template>
    <div class="music-item">
       <ul class="list-header" v-if="isHeader">
            <li class="list-header-name">歌曲</li>
            <li class="list-header-singer">歌手</li>
            <li class="list-header-time">时长</li>
        </ul>
        <ul class="music-info" v-if="!isHeader">
            <li class="list-header-name">你好啊</li>
            <li class="list-header-singer">jhowe</li>
            <li class="list-header-time">2:00</li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        isHeader:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style lang="stylus" scoped>
.music-item{
    .list-header,.music-info{
        overflow hidden
        li{
            float left 
        }
        .list-header-name{
            width 60%
        }
        .list-header-singer{
            width 30%
        }
        .list-header-time{
            width 10%
        }
    }
}
</style>
