<template>
    <div class="border-bottom head">
      <div class="header">
      <div class="header-left">
          <span class="iconfont header-left-one">&#xe607;</span>
          诗词
      </div>
      <div class="header-input"></div>
      <div class="header-right">
        <router-link to="/search" tag="span" class="iconfont header-right-one">&#xe632;</router-link>
        <router-link to="/shaixuan" tag="span" class="iconfont header-right-two">&#xe712;</router-link>
      </div>
    </div>
    <div class="nav">
        <router-link tag="div" to="/YiShou" class="nav-title">一首</router-link>
        <router-link tag="div" to="/ShiCi" class="nav-title">诗词</router-link>
        <router-link tag="div" to="/YuJunYu" class="nav-title">与君语</router-link>
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl'
    .header
        display: flex
        line-height: .86rem
        height: .86rem
        background: $bgColor
        color: #000
        .header-left
            width: 1.24rem
            float: left
            text-align: center
            .header-left-one
                display: inline
                margin: 0 .1rem 0 0
        .header-input
            flex: 1
            height: .64rem
            margin-top: .12rem
            marign-left: .2rem
        .header-right
            width: 1.24rem
            float: right
            .header-right-one
                display: inline-block
                margin: 0 .2rem 0 .2rem
            .header-right-two
                display: inline-block
    .nav
        width: 100%
        height: .86rem
        line-height: .86rem
        background: yellow
        color: #000
        .nav-title
            width: 33%
            height: .86rem
            line-height: .86rem
            float: left
            text-align: center
</style>
