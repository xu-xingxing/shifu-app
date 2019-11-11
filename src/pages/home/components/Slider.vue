<template>
  <div class="slider">
    <transition name="fade" enter-active-class="animated" leave-active-class="animated">
    <div class="left" ref="wrapper">
      <div>
       <div class="l_top border-bottom">
        <div class="imgbox">
          <img class="imgbox_img" src="../../../../static/images/touxiang.jpg" alt>
        </div>
        <p class="userName">用户名</p>
        <div class="desc">
          <span>粉丝：0</span>&nbsp;&nbsp;
          <span class="border-left"></span>&nbsp;&nbsp;
          <span>关注：0</span>
        </div>
      </div>
      <div class="l_body">
        <div class="border-bottom">
          <div class="l_body_item">
            <span class="iconfont">&#xe607;</span>&nbsp;&nbsp;
            <span>我的收藏</span>
          </div>
          <div class="l_body_item">
            <span class="iconfont">&#xe78e;</span>&nbsp;&nbsp;
            <span>我的下载</span>
          </div>
          <div class="l_body_item">
            <span class="iconfont">&#xe6c0;</span>&nbsp;&nbsp;
            <span>我的消息</span>
          </div>
        </div>
        <div class="border-bottom">
          <div class="l_body_item">
            <span class="iconfont">&#xe638;</span>&nbsp;&nbsp;
            <span>诗词</span>
          </div>
          <div class="l_body_item">
            <span class="iconfont">&#xe614;</span>&nbsp;&nbsp;
            <span>茶舍</span>
          </div>
          <div class="l_body_item">
            <span class="iconfont">&#xe604;</span>&nbsp;&nbsp;
            <span>题诗</span>
          </div>
        </div>
        <div class="border-bottom">
          <div class="l_body_item">
            <span class="iconfont">&#xe60f;</span>&nbsp;&nbsp;
            <span>系统设置</span>
          </div>
        </div>
        <div>
          <div class="l_body_item">
            <span class="iconfont">&#xe60f;</span>&nbsp;&nbsp;
            <span>夜间模式</span>
          </div>
        </div>
      </div>
    </div>
    </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'HomeSlider',
  mounted () {
    const element = this.$refs.wrapper
    element.classList.add('animated', 'slideInLeft')
  }
}
</script>
<style lang="stylus" scoped>
.slider {
  z-index: 100;
  width: 100%;
  height: 100%;
  min-width: 300px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  .left {
    float: left;
    width: 200px;
    height: 100%;
    background: gray;
    color: Gainsboro;
    padding: 0 0.2rem;

    .l_top {
      height: 150px;
      width: 100%;
      text-align: center;

      .imgbox {
        height: 50px;
        width: 50px;
        margin: 0 auto;

        .imgbox_img {
          height: 100%;
          width: 100%;
          padding: 4px;
          border: 1px solid gold;
          border-radius: 50%;
          margin-top: 15px;
        }
      }

      .userName {
        height: 40px;
        line-height: 40px;
        margin-top: 25px;
        font-size: 0.24rem;
      }
    }

    .desc {
      height: 35px;
      line-height: 35px;
      font-size: 0.24rem;
      margin-bottom: 0.2rem;
    }

    .l_body {
      height: 4.5rem;
      .l_body_item {
        height: 1.4rem;
        line-height: 1.4rem;
      }
    }
  }
  .right {
    overflow: hidden;
  }
}
</style>
