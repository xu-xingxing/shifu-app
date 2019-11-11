<template>
  <div class="header">
    <router-link to="/" tag="div" class="header-left iconfont">
      &#xe624;
    </router-link>
    <div class="header-center">
      <div class="iconfont search-icon">&#xe632;</div>
      <input class="header-input" type="text" placeholder="请输入关键词">
    </div>
    <div class="header-text border-left">搜索</div>
  </div>
</template>
<script>
export default {
  name: 'SearchHeader',
  data () {
    return {}
  }
}
</script>
<style lang="stylus" scoped>
  .header
    display: flex
    height: .86rem
    line-height: .86rem
    color: #fff
    posiiton: relative
    border-bottom: .02rem solid silver
    margin: 0 .1rem
    .header-left
      width: .64rem
      position: absolute
      left: .1rem
      top: 0
      text-align: center
      color: silver
    .header-center
      height: .64rem
      line-height: .64rem
      flex: 1
      padding: 0 .32rem 0 .64rem
      position: relative
      .search-icon
        position: absolute
        left: .92rem
        top: .14rem
        color: silver
      .header-input
        box-sizing: border-box
        height: 100%
        width: 100%
        margin-left: .2rem
        margin-top: .12rem
        background: #fff
        border-radius: .2rem
        padding-left: .4rem
        border: .02rem solid silver
    .header-text
      width: .64rem
      height: .43rem
      line-height: .43rem
      position: absolute
      right: .3rem
      top: .2rem
      color: goldenrod
      padding-left: .1rem
      border-left: .02rem solid silver
</style>
