<template>
  <div class="background" >
    <background-pic v-show="index === ActiveIdx" v-for="(pic, index) in bgdPicArr" :key="index" :pic="pic"></background-pic>
    <div class="bgd-cover"></div>
  </div>
</template>

<script>
import BackgroundPic from 'base/background-pic/background-pic'
export default {
  props:{
    bgdPicArr:{
      type:Array,     //type必须传进来的data中bgdPicList:[]的一样
      required:true
    }
  },
  data(){
    return{
      //静态图片 放在static文件夹下 使用绝对路径
      ActiveIdx:0,
      lock:true
    }
  },
  mounted(){
    setInterval(()=>{     //不能常规的，建议使用箭头函数
      this.changeBgdPic()
    },10000)
    let s = '{"code":0,"subcode":0,"msg":"","data":{"creator":{"nick":"丶彐MoHf丨","headpic":"http://thirdqq.qlogo.cn/g?b=sdk&k=BaKibyic5RyFOw8uGYpPN5Qg&s=140&t=1488561005","ifpic":"","uin":670347102,"forbidden":0,"is_bind_weibo":0,"weibo_uid":"","weibo_nick":"","extra":"","singerinfo":{"singerid":0},"uin_web":"670347102","encrypt_uin":"7wSzoivloKnA","isfollow":0,"islock":0,"shareurl":"http://y.qq.com/m/share/profile/index.html?userid=670347102","share_bykey":{"url_key":"share_profile_index","url_params":"userid=670347102"},"jumpkey":"ia_share_profile","typeinfo":{"type":0,"jumpurl":"http://y.qq.com/m/client/profile/prefer.html?ADTAG=share&_wv=1&userid=670347102#wechat_redirect","cfinfo_bykey":{"url_key":"profile_prefer","url_params":"ADTAG=share&userid=670347102"},"jumpkey":"ia_taste_info_jump","iconurl":""},"lvinfo":[{"iconurl":"http://y.gtimg.cn/music/icon/v1/pc/svip_g.png","jumpurl":"http://y.qq.com/m/myservice/index.html","jumpkey":"ia_default_my_vip","lvinfo_bykey":{"url_key":"my_service_index","url_params":""}}],"medal":{"flag":0,"iconurl":"http://y.gtimg.cn/music/icon/h5/medal_g.png","jumpurl":"http://y.qq.com/m/medal/index.html","jumpkey":"ia_singer_metal_index","medal_bykey":{"url_key":"ia_singer_metal_index","url_params":""}},"listeninfo":{"iconurl":"http://y.gtimg.cn/music/icon/h5/listen/lv2.png","jumpurl":"http://y.qq.com/m/acclevel/index.html?uin=670347102","jumpkey":"ia_my_acclevel","listen_bykey":{"url_key":"acclevel_index","url_params":"uin=670347102"}},"backpic":{"picurl":"http://y.gtimg.cn/music/photo_new/T001R800x800M000002DYpxl3hW3EP.jpg","type":3,"title":""},"cfinfo":{"title":"音乐口味：Justin Bieber、欧美流行、国语流行","jumpurl":"http://y.qq.com/m/client/profile/prefer.html?ADTAG=share&_wv=1&userid=670347102#wechat_redirect","jumpkey":"ia_taste_info_jump","cfinfo_bykey":{"url_key":"profile_prefer","url_params":"ADTAG=share&userid=670347102"},"similar":0},"nums":{"visitornum":0,"fansnum":0,"follownum":6,"followusernum":1,"followsingernum":5,"frdnum":0}},"mymusictype":"我的音乐","mymusic":[{"title":"我喜欢","picurl":"http://y.gtimg.cn/music/photo_new/T002R300x300M000002HCcEm2SuRfS.jpg","laypic":"http://y.gtimg.cn/music/photo_new/T011M000003y0CAs30Zplm.png","subtitle":"36首单曲","jumpurl":"http://y.qq.com/w/taoge.html?ADTAG=profile_h5&id=1259994065","jumptype":0,"jumpkey":"","id":"1259994065","music_bykey":{"url_key":"w_taoge","url_params":"ADTAG=profile_h5&id=1259994065"},"type":1,"num0":36,"num1":0,"num2":0},{"title":"那年今日","picurl":"http://y.gtimg.cn/music/photo_new/T011M000002MWRjv1W6aq8.jpg","laypic":"http://y.gtimg.cn/music/photo_new/T011M000003eWhtd0N6zFl.png","subtitle":"时间匆匆仍有你的音乐相伴","jumpurl":"http://y.qq.com/m/client/theday/index.html?ADTAG=profile_h5&fuin=670347102&fnick=%E4%B8%B6%E5%BD%90MoHf%E4%B8%A8","jumptype":1,"jumpkey":"ia_year_of_today","id":"0","music_bykey":{"url_key":"theday_index","url_params":"ADTAG=profile_h5&fuin=670347102&fnick=%E4%B8%B6%E5%BD%90MoHf%E4%B8%A8"},"type":2}],"mydiss":{"num":19,"title":"歌单","laypic":"https://y.gtimg.cn/music/common/upload/t_cm3_photo_publish/132770.png","jumpurl":"http://www.qq.com","list":[{"dissid":1413983663,"dirid":22,"picurl":"http://y.gtimg.cn/music/photo/album_500/57/500_albumpic_98857_0.jpg","title":"日语","subtitle":"2首    0次播放    ","icontype":0,"iconurl":"","isshow":1},{"dissid":1392592088,"dirid":21,"picurl":"http://y.gtimg.cn/music/photo/album_500/25/500_albumpic_1189825_0.jpg","title":"Purpose (Deluxe) (我的决心（豪华版）","subtitle":"22首    0次播放    ","icontype":0,"iconurl":"","isshow":1},{"dissid":1391897101,"dirid":20,"picurl":"http://y.gtimg.cn/music/photo/album_500/2/500_albumpic_1002_0.jpg","title":"张学友","subtitle":"27首    0次播放    ","icontype":0,"iconurl":"","isshow":1},{"dissid":1390762266,"dirid":18,"picurl":"http://y.gtimg.cn/music/photo/album_500/67/500_albumpic_1201567_0.jpg","title":"农夫","subtitle":"10首    0次播放    ","icontype":0,"iconurl":"","isshow":1},{"dissid":1390762114,"dirid":17,"picurl":"http://y.gtimg.cn/music/photo/album_500/2/500_albumpic_37902_0.jpg","title":"侧田","subtitle":"10首    0次播放    ","icontype":0,"iconurl":"","isshow":1},{"dissid":1390175080,"dirid":16,"picurl":"http://y.gtimg.cn/music/photo/album_500/6/500_albumpic_1182606_0.jpg","title":"Fall Out Boy (翻闹小子乐团)","subtitle":"30首    0次播放    ","icontype":0,"iconurl":"","isshow":1},{"dissid":1389026763,"dirid":15,"picurl":"http://y.gtimg.cn/music/photo/album_500/71/500_albumpic_191371_0.jpg","title":"Bruno Mars (布鲁诺·马尔斯)","subtitle":"30首    0次播放    ","icontype":0,"iconurl":"","isshow":1},{"dissid":1383628369,"dirid":14,"picurl":"http://y.gtimg.cn/music/photo/album_500/41/500_albumpic_1138341_0.jpg","title":"ONE OK ROCK (ワンオクロック)","subtitle":"30首    0次播放    ","icontype":0,"iconurl":"","isshow":1},{"dissid":1378443706,"dirid":13,"picurl":"http://y.gtimg.cn/music/photo/album_500/0/500_albumpic_58300_0.jpg","title":"Recovery","subtitle":"14首    0次播放    ","icontype":0,"iconurl":"","isshow":1},{"dissid":1374411409,"dirid":12,"picurl":"http://y.gtimg.cn/music/photo/album_500/43/500_albumpic_992643_0.jpg","title":"The Weeknd","subtitle":"30首    0次播放    ","icontype":0,"iconurl":"","isshow":1},{"dissid":1367775421,"dirid":11,"picurl":"http://y.gtimg.cn/music/photo/album_500/97/500_albumpic_980997_0.jpg","title":"Jason Derülo","subtitle":"25首    0次播放    ","icontype":0,"iconurl":"","isshow":1},{"dissid":1367775401,"dirid":10,"picurl":"","title":"大卤肉","subtitle":"0首    0次播放    ","icontype":0,"iconurl":"","isshow":1},{"dissid":1359681526,"dirid":9,"picurl":"http://y.gtimg.cn/music/photo/album_500/99/500_albumpic_964499_0.jpg","title":"Maroon 5","subtitle":"30首    0次播放    ","icontype":0,"iconurl":"","isshow":1},{"dissid":1357788301,"dirid":8,"picurl":"http://y.gtimg.cn/music/photo/album_500/40/500_albumpic_425140_0.jpg","title":"Fall Out Boy","subtitle":"30首    0次播放    ","icontype":0,"iconurl":"","isshow":1},{"dissid":1355785726,"dirid":7,"picurl":"http://y.gtimg.cn/music/photo/album_500/38/500_albumpic_661938_0.jpg","title":"fob","subtitle":"4首    0次播放    ","icontype":0,"iconurl":"","isshow":1},{"dissid":1297650501,"dirid":5,"picurl":"http://y.gtimg.cn/music/photo/album_500/16/500_albumpic_473316_0.jpg","title":"Native","subtitle":"15首    0次播放    ","icontype":0,"iconurl":"","isshow":1},{"dissid":1259994069,"dirid":4,"picurl":"http://y.gtimg.cn/music/photo/album_500/52/500_albumpic_57452_0.jpg","title":"*** AND LOVE [Deluxe Edition]","subtitle":"14首    0次播放    ","icontype":0,"iconurl":"","isshow":1},{"dissid":1259994066,"dirid":3,"picurl":"http://y.gtimg.cn/music/photo/album_500/68/500_albumpic_185768_0.jpg","title":"BB","subtitle":"35首    0次播放    ","icontype":0,"iconurl":"","isshow":0},{"dissid":1259994067,"dirid":2,"picurl":"http://p.qpic.cn/music_playls/670347102/670347102-2.jpg/0?p=1342035759","title":"我最爱听","subtitle":"12首    0次播放    ","icontype":0,"iconurl":"","isshow":1}]},"video":{"num":0,"title":"","jumpurl":"","jumpkey":"ia_post_video_more","list":[]},"myarticle":{"title":"我的专栏文章 0","jumpurl":"https://y.qq.com/m/client/personal_magazine/index.html?uin=670347102","jumpkey":"magazine_more","laypic":"https://y.gtimg.cn/music/common/upload/t_cm3_photo_publish/132771.png","totalcnt":0,"list":[]},"myradio":{"title":"我的主播电台 0","jumpurl":"https://y.qq.com/m/client/personal_radio/index.html?uin=670347102","jumpkey":"radio_more","laypic":"https://y.gtimg.cn/music/common/upload/t_cm3_photo_publish/132769.png","totalcnt":0,"list":[]}}}'
    let r = JSON.parse(s)
    console.log(r)
    
    //或
    // setInterval(this.changeBgdPic,2000)
  },
  computed:{

  },
  methods:{
    //bug,一开始进入页面，第一张图未完成动画时，点击图片触发方法会使全部图片小时
    changeBgdPic(){
      // this.lock = !this.lock;
      let picArrLength = this.bgdPicArr.length;
      this.ActiveIdx = (this.ActiveIdx + 1)%picArrLength;
      this.picSrc = this.bgdPicArr[this.ActiveIdx].picImage;
    },
  },
  components:{
    BackgroundPic
  }
}
</script>

<style scoped lang="stylus">
.background{
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  z-index -50
  .bgd-cover{
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background-color rgba(0,0,0,.3)
  }
}
</style>
