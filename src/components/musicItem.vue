<template>
  <tr class="music-item">
    <td>{{music.title}}</td>
    <td>{{music.artist}}</td>
    <td>专辑</td>
    <td>2:00</td>
  </tr>
</template>

<script>
  export default {
    props:{
      music:{
        type:Object,
        required:true
      }
    }
  }
</script>

<style scoped lang="stylus">
.music-item{
  font-family "Microsoft YaHei"
  color rgba(172,172,172,.9)
  display block
  font-size 0
  padding-left  0 10px
  td{
    display inline-block
    width 25%
    font-size 15px
    padding:10px 0
  }
}
.music-item:hover{
  background-color rgba(256,256,256,.1)
}
</style>
