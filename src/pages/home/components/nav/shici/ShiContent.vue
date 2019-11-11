<template>
  <div class="shici">
    <div class="ci" v-for="item of  poemList" :key="item.id">
    <div class="ci-title">{{item.title}}</div>
        <div class="ci-author">{{item.auther}}</div>
        <div class="ci-content">{{item.desc}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShiContent',
  props: {
    poemList: Array
  }
}
</script>
<style lang="stylus" scoped>
  .ci
    text-indent: .2rem
    border-bottom: .02rem solid #ccc
    padding: .24rem 0
    .ci-title
      font-size: .36rem
      font-weight: bolder
    .ci-author
       color: goldenrod
    .ci-content
        color: silver
</style>
