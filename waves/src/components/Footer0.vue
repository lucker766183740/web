<template>
  <div>
    <div class="footer">
      <div class="m1">美团导航</div>
      <div class="footer1">
        <span>
          <ul>
            <li class="m2">热门城市</li>
            <li class="m2">热门分类</li>
            <li class="m2">周边热门</li>
          </ul>
        </span>
        <span>
          <div class="m3">
            <ul>
              <li><a href="#">苏州</a></li>
              <li><a href="#">重庆</a></li>
              <li><a href="#">西安</a></li>
              <li><a href="#">石家庄</a></li>
              <li><a href="#">沈阳</a></li>
              <li><a href="#">厦门</a></li>
              <li><a href="#">大连</a></li>
              <li><a href="#">南宁</a></li>
              <li><a href="#">常州</a></li>
              <li><a href="#">北京</a></li>
            </ul>
            <ul>
              <li><a href="#">佛山</a></li>
              <li><a href="#">东莞</a></li>
              <li><a href="#">深圳</a></li>
              <li><a href="#">太原</a></li>
              <li><a href="#">长春</a></li>
              <li><a href="#">成都</a></li>
              <li><a href="#">南京</a></li>
              <li><a href="#">哈尔滨</a></li>
              <li><a href="#">福州</a></li>
              <li><a href="#">无锡</a></li>
            </ul>
          </div>
          <div class="m3">
            <ul>
              <li><a href="#">酒店</a></li>
              <li><a href="#">美食</a></li>
              <li><a href="#">休闲娱乐</a></li>
              <li><a href="#">运动健身</a></li>
              <li><a href="#">生活服务</a></li>
              <li><a href="#">上门服务</a></li>
              <li><a href="#">购物</a></li>
              <li><a href="#">时尚购</a></li>
              <li><a href="#">本地购物</a></li>
              <li><a href="#">结婚</a></li>
            </ul>
            <ul>
              <li><a href="#">摄影写真</a></li>
              <li><a href="#">宴会</a></li>
              <li><a href="#">丽人</a></li>
              <li><a href="#">母婴亲子</a></li>
              <li><a href="#">学习培训</a></li>
              <li><a href="#">家装</a></li>
              <li><a href="#">汽车服务</a></li>
              <li><a href="#">医疗</a></li>
              <li><a href="#">宠物</a></li>
            </ul>
          </div>
          <div class="m3">
            <ul>
              <li><a href="#">泾阳县酒店</a></li>
              <li><a href="#">泾阳县美食</a></li>
              <li><a href="#">高陵休闲娱乐</a></li>
              <li><a href="#" title="泾阳县运动健身">泾阳县运动...</a></li>
              <li><a href="#" title="泾阳县生活服务">泾阳县生活...</a></li>
              <li><a href="#">咸阳上门服务</a></li>
              <li><a href="#">高陵购物</a></li>
              <li><a href="#">泾阳县时尚购</a></li>
              <li><a href="#">咸阳本地购</a></li>
              <li><a href="#">泾阳县结婚</a></li>
            </ul>
            <ul>
              <li><a href="#">咸阳摄影写真</a></li>
              <li><a href="#">咸阳宴会</a></li>
              <li><a href="#">泾阳县丽人</a></li>
              <li><a href="#" title="泾阳县母婴亲子">泾阳县母婴...</a></li>
              <li><a href="#">高陵学习培训</a></li>
              <li><a href="#">泾阳县家装</a></li>
              <li><a href="#">高陵汽车服务</a></li>
              <li><a href="#">泾阳县医疗</a></li>
              <li><a href="#">泾阳县宠物</a></li>
            </ul>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
@media (min-width: 576px) {
  .footer {
    width: 960px;
    margin: 0 auto;
  }
}
@media (min-width: 992px) {
  .footer {
    width: 1190px;
    margin: 0 auto;
  }
}
.footer {
  border: 1px solid #e5e5e5;
  background-color: #fff;
  margin-top: 40px;
  margin-bottom: 40px;
  border-radius: 5px;
}
.footer1 {
  display: flex;
}
.m1 {
  height: 44px;
  font-size: 16px;
  padding-left: 20px;
  padding-top: 6px;
  line-height: 44px;
}

.m3 > ul {
  display: flex;
}
.m2 {
  width: 100px;
  height: 100%;
  font-size: 14px;
  text-align: center;
  padding: 10px 0;
}

.m3 {
  width: 1090px;
  height: auto;
  padding-top: 12px;
  border-bottom: 1px solid #e5e5e5;
  float: left;
  overflow: hidden;
}
.m3 > ul li a {
  text-decoration: none;
  font-size: 12px;
  color: #666;
  display: block;
  width: 80px;
  text-overflow: ellipsis;
  margin-bottom: 10px;
  margin-right: 20px;
}
.m3 > ul li a:hover {
  color: #faaf00;
}
</style>
