<template>
  <div id="app">
    <Header></Header>
    <Background :bgdPicArr="bgdPicList"/>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>

import Background from 'components/background/background'
import Header from 'components/header/header'
import Player from 'components/player/player'

export default {
  name: 'App',
  components: {
    Background ,
    Header,
    Player
  },
  data(){
    return{
      bgdPicList:[]
    }
  },
  mounted(){
    this.getLocalBgdPic()
  },
  methods:{
    getLocalBgdPic(){
      this.$axios.get('/static/data/bgdPices.json').then(response =>{
        const res = response.data;
        if(res){
          this.bgdPicList = res.bgdPicList;
        }
      },response =>{
        alert("请求本地图片失败")
      })
    }
  },

}
</script>

<style lang="stylus" scoped>
@import "common/stylus/variable.styl"
#app {
  color: $color-theme
  font-size: $font-size-medium;
  overflow: hidden;
}
</style>
