<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: './static/images/psb.jpg'
        }, {
          id: '0002',
          imgUrl: './static/images/psb2.jpg'
        }, {
          id: '0003',
          imgUrl: './static/images/psb3.jpg'
        }, {
          id: '0004',
          imgUrl: './static/images/psb4.jpg'
        }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    height: 0
    width: 100%
    padding-bottom: 31.25%
    .swiper-img
        width: 100%
</style>
