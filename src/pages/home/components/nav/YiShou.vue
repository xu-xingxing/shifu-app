<template>
    <div class="yishou">
        <yi-swiper></yi-swiper>
        <yi-recommend :recommendList="recommendList"></yi-recommend>
    </div>
</template>
<script>
import YiSwiper from './yishou/Swiper'
import YiRecommend from './yishou/Recommend'
import axios from 'axios'
export default {
  name: 'NavYiShou',
  data () {
    return {
      recommendList: []
    }
  },
  components: {
    YiRecommend,
    YiSwiper
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSuccess)
    },
    getHomeInfoSuccess (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.recommendList = data.recommendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
<style lang="stylus" scoped>
</style>
