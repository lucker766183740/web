<template>
  <div>
    <div id="yj01" class="media">
      <!-- 页面底部左 -->
      <div id="yj1" class="">
        <ul class="">
          <li>
            ©美团网团购 meituan.com
            <a class="" href="#">京ICP证070791号</a>
            <a class="" href="#">京ICP备10211739号</a>
          </li>
          <li>
            <a href="#">广播电视节目制作经营许可证（京）字第03889号</a>
          </li>
          <li>
            <a href="#">食品经营许可证</a>
            <a class="" href="#">互联网药品信息服务资格证</a>
          </li>
          <li>
            <a href="#"
              >医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号</a
            >
          </li>
        </ul>
      </div>
      <!-- 页面底部右 -->
      <div id="yj2" class="">
        <a id="yj2-1" href="#"
          ><img src="img/footer/img_jiao05.png" />京公网安备 11000002002052号</a
        >
        <ul>
          <li>
            <a id="yj2-2" href="#" title="营业执照">
              <img src="img/footer/img_jiao01.png" /><span
                >北京三快科技有限公司</span
              >
            </a>
          </li>
          <li>
            <a href="#" title="备案信息"
              ><img src="img/footer/img_jiao02.png"
            /></a>
          </li>
          <li>
            <a href="#" title="可信网站认证"
              ><img src="img/footer/img_jiao03.png"
            /></a>
          </li>
          <li>
            <a href="#" title="12315消费争议"
              ><img src="img/footer/img_jiao04.png"
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
@media (min-width: 576px) {
  .media{
    width: 960px;
  }
}
@media (min-width: 992px) {
  .media{
    width: 1190px;
    margin: 0 auto;
  }
}
#yj01 {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-left: 20px;
  padding-top: 15px;
  padding-bottom: 30px;
  line-height: 1.6;
  border-top: 1px solid #e5e5e5;
}
a:hover {
  color: #faaf00;
}
#yj1 {
  color: #999;
}
#yj2 > ul {
  display: flex;
  justify-content: flex-end;
}
#yj2-1 {
  display: flex;
  justify-content: flex-end;
}
#yj2-2 {
  display: flex;
  justify-content: flex-end;
}
#yj2-2 > span {
  padding-top: 12px;
}
</style>
