<template>
    <div>
      <home-header></home-header>
      <home-slider v-show="showSlider"></home-slider>
    </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSlider from './components/Slider'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSlider
  },
  data () {
    return {
      showSlider: false
    }
  },
  methods: {
    handleSliderClick () {
      this.showGallary = false
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
