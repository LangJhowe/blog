<template>
  <div class="body">
    <PageMusic></PageMusic>
  </div>
</template>


<script>
  import PageMusic from '../components/page/musicPage'

  export default {
    components:{
      PageMusic
    }
  }
</script>

<style scoped lang="stylus">
.body{
  margin-top 50px
  width 100%
}
</style>
