<template>
     <div class="recommend">
        <div class="recommend-title">
          <span class="recommend-title-wrapper bd_all">今日荐诗</span>
        </div>
        <div class="ci" v-for="item of recommendList" :key="item.id">
            <div class="ci-title">{{item.title}}</div>
            <div class="ci-author">{{item.auther}}</div>
            <div class="ci-content">{{item.desc}}</div>
        </div>
     </div>
</template>
<script>
export default {
  name: 'YiRecommend',
  props: {
    recommendList: Array
  }
}
</script>
<style lang="stylus" scoped>
  .recommend-title
    height: .8rem
    line-height: .8rem
    text-align: center
    background: url("/static/images/bg-title.jpg") no-repeat
    margin-top: .2rem
    .recommend-title-wrapper
      display: inline-block
      height: .6rem
      line-height: .6rem
      padding: 0 .2rem
      font-size: .28rem
      color: goldenrod
    .bd_all
      border: .02rem dashed goldenrod
  .ci
    text-align: center
    margin-top: .2rem
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
