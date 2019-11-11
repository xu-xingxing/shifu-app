<template>
  <div class="list">
    <div class="area">
      <div class="title border-top">热门搜索</div>
      <div class="button-list">
        <div class="button-wrapper" v-for="item of buttonList" :key="item.id">
          <div class="button">{{item.auther}}</div>
        </div>
      </div>
    </div>
    <div class="idea">
        <p class="content">没有想法？</p>
        <p class="content">您可以尝试<b><router-link to="/shaixuan">分类浏览</router-link></b>看看有没有您想要的？</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchList',
  data () {
    return {
      buttonList: [
        {
          id: '0001',
          auther: '李白'
        }, {
          id: '0002',
          auther: '苏轼'
        }, {
          id: '0003',
          auther: '李清照'
        }, {
          id: '0004',
          auther: '杜甫'
        }, {
          id: '0005',
          auther: '白居易'
        }, {
          id: '0006',
          auther: '李白'
        }, {
          id: '0007',
          auther: '刘永'
        }, {
          id: '0008',
          auther: '杜牧'
        }, {
          id: '0009',
          auther: '孟浩然'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .border-top
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .list
    position: absolute
    top: .86rem
    left: 0
    right: 0
    bottom: 0
    background: whitesmoke
    .area
      height: 6rem
      .title
        line-height: .44rem
        background: whitesmoke
        padding: .2rem 0 .2rem .2rem
        color: silver
        font-size: .28rem
      .button-list
        overflow: hidden
        padding: .1rem
        .button-wrapper
          float: left
          width: 25%
          .button
            margin: .1rem
            padding: .2rem
            text-align: center
            border: .02rem solid #ccc
            border-radius: .32rem
            background: #fff
    .idea
      margin: 0 .2rem
      letter-spacing: .06rem
      .content
        height: .64rem
        line-height: .64rem
        b
          color: #daa520
</style>
