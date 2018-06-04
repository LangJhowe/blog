<template>
  <div id="app">
    <Header></Header>
    <Body></Body>
    <Background :bgdPicArr="bgdPicList"/>
  </div>
</template>

<script>

import Background from './components/background'
import Header from './components/header'
import Body from './components/body'

export default {
  name: 'App',
  components: {
    Background ,
    Header,
    Body
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
      this.$http.get('/static/data/bgdPices.json').then(response =>{
        const res = response.body;
        if(res){
          this.bgdPicList = res.allPics.picList;
        }
      },response =>{
        alert("请求本地图片失败")
      })
    }
  },

}
</script>

<style>
#app {
  position: absolute;
  top :0;
  right :0;
  left :0;
  bottom :0;
  width: 100%;
  height: 100%;
  font-size: 12px;
}
</style>
