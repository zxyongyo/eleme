<template>
  <div id="app">
    <ele-header :seller="seller"></ele-header>

    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>

    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import header from '@/components/header/header.vue'

export default {
  name: 'App',
  data (){
    return {
      seller: {}
    }
  },
  created (){
    this.axios.get('http://localhost:3000/seller').then(res => {
        // console.log('seller',res)
      if (res.status === 200) {
        this.seller = res.data
        // this.seller.score = 3.6
      }
    }).catch(err => {
          console.log(err)
      })
  },
  components: {
    eleHeader: header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/mixins.styl"

  .tab
    height 40px
    line-height 40px
    display: flex
    border-1px(rgba(7,17,27,0.1))
    .tab-item
      flex 1
      font-size 14px
      color rgb(77,85,93)
      text-align center
      a 
        display: block
      .router-link-exact-active
        color: red
</style>