<template>
    <div class="shici">
      <shi-content :poemList="poemList"></shi-content>
    </div>
</template>
<script>
import ShiContent from './shici/ShiContent'
import axios from 'axios'
export default {
  name: 'NavShiCi',
  components: {
    ShiContent
  },
  data () {
    return {
      poemList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/shici.json')
        .then(this.getHomeInfoSuccess)
    },
    getHomeInfoSuccess (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.poemList = data.poemList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
<style>
</style>
