<template>
    <div id="pp">
	 <move_header></move_header>
		<div  v-for="(p,i) of data" v-if="i < 1" :key="i">
       <div class="header_div font_small">
            <table></table>
            <div id="heade_id">				
        	     <img :src="p.move_img" alt="">
           </div>
             <div id="header_p">
                 
                <p>{{p.move_name}}</p>
                <p>{{p.move_yinname}}</p>
                <a>{{p.move_type}}</a>
                <p>{{p.move_distrit}} {{" / " + p.move_timelog + "分钟"}}</p>
                <p>{{p.move_time}} {{p.move_distrit}}上映</p>
                <div>
                 <button class="kan_button">
									 <img src="../../public/move_img/aixin.png" >
									 想看
								 </button>
								
                 <button class="kan_button">
									  <img src="../../public/move_img/star0.png" >
									 
									 评分</button>
                </div>
               <router-link :to="`/xiang?move_sid=${p.move_sid}`"><button class="te_button"> 特惠购票</button></router-link> 
            </div> 
         <div class="kou_header">
            <p>猫眼口碑</p>
            <p>
                <span class="star_p">{{p.momment}}
                 <span>
                   <img src="../../public/move_img/star.png" alt="">
                   <img src="../../public/move_img/star.png" alt="">
                   <img src="../../public/move_img/star.png" alt="">
                   <img src="../../public/move_img/star.png" alt="">
                   <img src="../../public/move_img/star.png" alt=""><br>
                   {{p.xiangkan + "万人评分"}}
              </span>
          </span>
            </p>
            <p>累计票房</p>
            <p class="mao_p">{{p.people}}
				<span class="font_small span_color">万</span>
			</p>
		</div>
 </div>
 <div class="detail_div flex">
        <div class="body_div">
			<div>
            <p>猫眼电影 > 电影 > {{p.move_name}}</p>
            <p class="body_p2">
                <a href="javascript:;" @click="first1()">介绍</a>
                <a href="javascript:;" @click="two2()">演职人员</a>
                <a href="javascript:;" @click="three3()">奖项</a>
                <a href="javascript:;">图集</a>
            </p>
			<div v-if="first">
            <div class="far_div">
              <div class="juqing_div"></div><p class="juqing"> 剧情简介</p>
            </div>

				<p class="font_smalls">{{p.move_juqing}}</p>
            <div>
                <div class="far_div">
                    <span class="juqing_div"></span>
                <p class="juqing">演职人员</p>
            </div>
            <div class="flex font_small">
                <ul id="daoyan_img">
                    <p class="daoyan">导演</p>
                    <li id="daoyan_img" v-for="(x,n) of data[1]" :key="n"><img :src="x.writeimg" alt="">
					<p>{{x.move_write}}</p></li>
                    
                </ul>
                <ul >
                    <div class="daoyan_img">
                         <p class="yanyuan">演员</p >
                     </div>   
                     <ul id="ul_li">
                    <li v-for="(x,n) in data[1]" v-if=" n < 4 "  :key="n">
                        <img :src="x.actorimg" alt=""><p>{{x.actor}}</p>
                        <p class="nezha" >{{x.actor_shi}}</p>
                    </li>
				
                </ul>
                </ul>
            </div>
         </div>
		    <div>
                <div class="far_div">
                    <span class="juqing_div"></span>
            <p class="juqing">奖项</p>
            </div>
            <div class="flex">
            <img src="../../public/move_img/detail6.jpg" alt="">
            <p>第35届大众电影百花奖</p>
              </div>
            <p class="font_smalls jiang">提名：最佳故事片 / 最佳编剧</p>
        </div>
		     <!-- 图集 -->
	<div class="far_div">
		<span class="juqing_div"></span>
		<p class="juqing">图集</p><a class="font_small font_color quanbu" href="#">全部 ></a>
	</div>
	<div class="flex" >
		<img class="mar_right" :src="x.small_img" alt="" v-for="(x,n) in data[1]" :key="n"  v-if="n<1">
		<div>
			<img  id="small_img" v-for="(x,n) in data2" v-if="n<4" :key="n" :src="x.small_img" alt="">
		</div>
	</div>
	</div>
	   



			<div v-show="two">
            <div class="font_small2">
                <ul id="daoyan_img">
                    <p class="daoyan2">导演</p>
                    <li id="daoyan_img2" v-for="(x,n) of data[1]" :key="n"><img :src="x.writeimg" alt="">
					<p>{{x.move_write}}</p></li>
                    
                </ul>
                <ul >
                    <div class="daoyan_img">
                         <p class="yanyuan">演员</p >
                     </div>   
                     <ul id="ul_two">
                    <li v-for="(x,n) in data[1]" v-if=" n < 4 "  :key="n">
                        <img :src="x.actorimg" alt=""><p>{{x.actor}}</p>
                        <p class="nezha" >{{x.actor_shi}}</p>
                    </li>
				
                </ul>
             </ul>
			   <ul id="daoyan_img3">
                    <p class="daoyan2">音乐制作</p>
					<ul>
						<li
						i  v-for="(x,n) of data[1]" :key="n"><img :src="x.music" alt="">
						<p>{{x.actor_music}}</p></li>
                    </ul>
                </ul>
            </div>
         </div>
	</div>




    <div  v-show="three" id="jiangxiang">
         
        <div class="flex">
            <img src="../../public/move_img/detail6.jpg" alt="">
            <p> 第30届中国电影金鸡奖
</p>
        </div>
            <p class="font_smalls jiang">获奖：最佳美术片</p>

		 <div class="flex">
            <img src="../../public/move_img/jiang.jpg" alt="">
            <p>第35届大众电影百花奖</p>
         </div>
            <p class="font_smalls jiang">提名：最佳故事片 / 最佳编剧</p>
    </div>


		  
        <div class="far_div">
            
            <p class="juqing detail_div">
							<span class="juqing_div "></span>
							热门短评
						<span class="duanp">写短评</span>
						</p>
						<div>
							<ul class="pinglun">
									<img src="../../public/move_img/user_p1.jpg" >
									<div><img src="move_img/vip4png.png" ></div>
								<li>	
									<p class="flex">杨谨婕了啦啦
							<span>购</span>	</p>
									<p>2020-7-21
									<img src="move_img/star.png" >
									<img src="move_img/star.png" >
									<img src="move_img/star.png" >
									<img src="move_img/star.png" >
									<img src="move_img/star.png" >
									<span class="zan">
										<a href="#"><img src="../../public/move_img/zan.png" ></a>
										75197
									</span>
									</p>
									<p class="pinglun_l">土拨鼠尖叫！！！也好看了吧！！！放映结束观众全体鼓掌！！！哪吒小爷太值了！！！跟敖丙CP我磕了！！！</p>
								</li>
							</ul>
							<ul class="pinglun">
									<img src="../../public/move_img/user_p1.jpg" >
									<div><img src="move_img/vip4png.png" ></div>
								<li>	
									<p class="flex">杨谨婕了啦啦
							<span>购</span>	</p>
									<p>2020-7-21
									<img src="move_img/star.png" >
									<img src="move_img/star.png" >
									<img src="move_img/star.png" >
									<img src="move_img/star.png" >
									<img src="move_img/star.png" >
									<span class="zan">
										<a href="#"><img src="../../public/move_img/zan.png" ></a>
										75197
									</span>
									</p>
									<p class="pinglun_l">土拨鼠尖叫！！！也好看了吧！！！放映结束观众全体鼓掌！！！哪吒小爷太值了！！！跟敖丙CP我磕了！！！</p>
								</li>
							</ul>
						</div>
        </div>
     </div>  
        <!-- right -->
        <div class="right_div">
            <p id="yugao">
                <a href="#">预告片</a>
                <a href="#">相关资讯</a>
            </p>
            <div class="far_div">
                <span class="juqing_div"></span>
            <p class="juqing">相关资讯</p>
            </div>
         
            <ul class="flex float_re" v-for="(x,n) of obj" :key="n">
                <li>
                    <img :src="x.move_img" alt="">
                    <div class="bg_18 span_color">{{n+1}}</div>
                </li>
                <li class="font_small">
                    <span>《{{x.move_name}}》</span>
                   
                    <span>{{x.xiangkan}}万</span>
                     <div class="sanjiao"></div>
                </li>
            </ul>
          
						<div class="far_div">
						    <span class="juqing_div"></span>
						<p class="juqing">相关电影</p>
						</div>
					<ul class="xiang_ul">
						<li class="xiang_li" v-for="(x,n) of resu" :key="n">
							<img :src="x.move_img" >
							<a href="#">{{x.move_name}}</a>
							<p>{{(x.move_momment.toString()).slice(0,1)}}. <span>{{(x.move_momment.toString()).slice(-1)}}</span></p>
						</li>
						
					</ul>   
					
           </div>
    
		</div>  
	</div>
</div>
</template>
<style scoped>
*{margin: 0; padding: 0;}
body{font-family: Microsoft YaHei,Helvetica,Arial,sans-serif;
width: 100%; min-width: 1200px;}
*{border: 0;outline:0 ;}
a{text-decoration: none;}
ul,li{margin: 0;padding: 0;list-style:none;outline:0 ;}
.flex{display: flex;margin: 0;}
.ul_px{width: 70px;height: 80px;padding-left: 20px;position: relative;
	border: 1px solid #fff;border-bottom:none;}
.li_none{list-style: none;flex-wrap: wrap;}
._center{ justify-content: space-between;margin: auto ;}
.head_center{width:1200px;margin: 0 auto ;}
.bordeer_xia{border-bottom: 1px solid #DDDDDD;width: 100%;background: #fff;}
button{border:0;outline-style: 0;}
ul,li{margin: 0 ;padding: 0;}
.index{
	height:5rem;
	display: flex;
}
#jiangxiang{
	width: 100%;
	height: 300px;
}
#jiangxiang>div{
	margin-top: 30px;
}


#daoyan_img3>ul{
	display: flex;
}
#daoyan_img3>ul>li{
margin:0 20px 10px 0
}
#daoyan_img3>ul>li>p{
	text-align: center;
	font-size: 14px;
}
.index>input{padding-left: 15px;}
.header_mao{width:140px;}
.header_an{width:70px;padding-right: 15px;}
.header_an>button{width: 80px;height: 81px;background-color: #fff; 
	font-size: 1rem;border: 1px solid #fff;border-bottom:1px solid #ddd;position: relative;}
.index>li button:hover{color: orange;}

.header_an>button:hover{
	border-left:1px solid #ddd;
	border-right:1px solid #ddd;
	border-bottom:1px solid #fff;

}
.header_an>button>div:first-child{
	position: absolute;
	top: 38px;
	right: 2px;
}
.header_an>button:hover div:first-child{
	transform:rotate(180deg);
	transition:200ms;
}
.header_an>button>div:nth-child(2){
	width: 250px;
	height: 200px;
	border: 1px solid #ddd;
	border-top:none;
	position: absolute;
	top: 80px;
	left: -1px;
	display: none;
	z-index: 10;
	background-color: #fff;
}
.header_an>button:hover>div:nth-child(2){
	display:block ;
}
.header_an>button>div:nth-child(2)>p{
margin-left:-120px;
line-height: 40px;
}
.header_an>button>div:nth-child(2)>p>router-link:hover{
cursor: pointer;
}

.index>li button:focus{
	color: #fff;background-color: #FFA500;
	}

.deg{
	width: 0;
	border-top: 5px solid #666;
	border-right: 5px solid transparent;
	border-left: 5px solid transparent;
	}
.font_size:hover{color: orange; }
.font_size:focus{color: #FFFFFF;background-color: orange  ; }
.index_radio{width: 1200px;margin: 0 auto;margin-bottom: 20px;}
.index_radio>span{margin: 0px 20px;}
.header_ul{width: 50px;margin: 0;}
.index li{list-style: none;display: flex;
}
.index>li>button{display: block;width:70px;height: 80px;font-size: 1.125rem;background-color: #FFFFFF;
}
#app>button{width:130px;height: 81px;font-size:1rem;
	background-color: #FFFFFF;margin-left: 40px;margin-right: 20px;
	position: relative;	border: 1px solid #fff;
	border-bottom:1px solid #ddd;
}
#app>button>span{
	margin-left:30px;
}
#app>button:hover{
border-left: 1px solid #ddd;
border-right: 1px solid #ddd;
border-bottom: 1px solid #fff;
}
#app>button:hover>div:nth-child(3){
	transform:rotate(180deg);
	transition:200ms;
}
#app>button:hover>div:nth-child(4){
	display: block;
	z-index: 10;
}
#app>button>img{
	position: absolute;
	top: 30px;
	left: 10px;
}
#app>button>div:nth-child(3){
	position: absolute;
	top: 38px;
	right: 10px;
}
#app>button>div:nth-child(4){
	box-sizing: border-box;
	position: absolute;
	top: 80px;
	left:-1px;
	border: 1px solid #ddd;
	border-top:none;
	margin:0 auto;
	width: 130px;
	height: 200px;
	display: none;
	background-color: #fff;
}
#app>button>div>img{
	margin-top:20px;
}
#app>button>div>p:nth-child(2){
	margin-top:10px;
}
#app>button>div>p+p{
	color:#aaa;
}
#app >button>img{width: 15px;height: 24px;float:inline-start;}
.index>input{
	width: 13.75rem;
	height: 40px;
	border-radius: 30px;
	color: #aaa;
	border: 1px solid #aaa;
	border-right: none;
	outline:0;
	margin-right: 40px;
}
.ul_px>img{width: 40px;height: 40px;margin-top: 20px;}
.ul_px:hover{
	border-right:1px solid #ddd ;
	border-left:1px solid #ddd ;
	
}
.ul_px>div:nth-child(2){
	position: absolute;
	top: 38px;
	right: 15px;
}
.ul_px:hover>div:nth-child(2){
	transform:rotate(180deg);
	transition:200ms;

}
.ul_px>div:nth-child(3){
	position: absolute;
	top: 79px;
	left: -1px;
	border: 1px solid #ddd;
	
	border-top:1px solid #fff ;
	width: 90px;
	height: 50px;
	z-index: 10;
	text-align: center;
	background-color: #fff;
		display: none;
}
.ul_px>div:nth-child(3)>router-link{
	line-height: 50px;
	color: #aaa;
}
.ul_px:hover>div:nth-child(3){
	display: inline;

}
.ul_px>div:nth-child(3)>router-link:hover{
	cursor: pointer;
}
#sousuo{position: relative;}
#sousuo>img{
	width: 42px;
	border-radius: 50%;
position: absolute;
top: 19px;
left:200px;
}


.header{height: 60px;text-align: center; background-color: #47464a;}
.header a{display: block;text-align: center;margin-top: 20px;color: #aaa;}

.header>div>a:hover{
color: #fff;
}
.header>div>a:focus{color: #FFA500; }

.header>div{
	width: 400px;height: 60px;
}
.men_ul{
	display: flex;
	display: block;
	flex-wrap: wrap;
	width: 100%;
text-align: left;
}
.men_ul>li{
	font-size:1.5rem;
}
.men_ul>a{
	font-size: 1.25rem;
}
.index_a{width: 220px;height: 40px;}
.index_a>input{border-radius: 50px ;}
.header_1{width:1200px;height: 226px;margin: 0 auto;margin-top: 30px;font-size: 14px;
}
.header_1>div{width: 1200px; height: 75px;}
.li_none>li{color: #666666;}
.li_none>li>a{color: #000;padding: 1px 9px;}

.li_none>li a:hover{color: orange;}
.li_none>li a:focus{color: #fff;background-color: orange;border-radius: 30px;}

.bodyer{width:75rem;margin:  0 auto;padding-bottom: 50px;flex-wrap: wrap;}
.bodyer>ul{display: block;}
.bodyer>ul img{margin: 10px 10px;}
.foot_div{
	background-color: #47464A;
	color: #fff;
	margin: 3.125rem  auto 0;
	text-align: center;
	padding-top:80px;
	padding-bottom: 80px;
	}
.move_page{display: flex;width: 200px;height: 30px; margin: 0px auto;}
.move_page button{width:30px; height: 30px; background-color:#fff;margin: 3px 3px;border: 1px solid #aaa;}
.move_page :nth-child(3){width:80px;}
.move_page button:hover{border:1px solid orange;}
.foot_div a{
	font-size: 0.875rem;
	color: #FFFFFF;
	margin: 3px 1px;
	}
.font_color{color: orange !important;}	
.foot_div p{
	margin: 0 auto;	
}
.foot_img{margin: 20px 4px;}
.move_footer{width: 100%;	height:27.5rem;border: 0;}
.move_header{width: 100%;height:50rem ;border: 0;z-index: 2;position: fixed;top:0;}

.font_small{font-size:14px !important;}
.font_smalls{font-size: 12px;}
.float_re{position: relative;}
.float_re>li>img{width: 140px;height: 80px;}
.detail_div{width:1200px;text-align: start;margin: 0 auto;margin-top:80px;}
.span_color{color:#fff !important;}
.font_we{font-family: Microsoft YaHei,Helvetica,Arial,sans-serif;font-size:14px;}
.header_div{width: 100%;min-width:1200px;height:376px;
	background-image: url(../../public/move_img/debg.png);
	color:#fff;position: relative;top:0;}
#heade_id{position: relative;}
#heade_id img{width: 240px;height: 330px;float: left;border: 4px solid #fff;margin-top:60px;margin-left:250px;margin-right:30px;}
#header_p{margin-top:60px;position: absolute;left: 550px;text-align: start;}
#header_p>p:first-child{font-size: 26px;color:#fff;}
#header_p>p:nth-child(2){font-size: 18px;color: #fff;margin-bottom:20px;}
.kan_button{width: 120px;height: 36px;margin-right:10px;margin-top:60px;
background: rgba(250,250,255,.2);color:#fff;position: relative;padding-left:1.25rem;}
.kan_button>img{position: absolute;top: 0.5625rem;left: 2rem;}

.te_button{width: 255px; height: 40px;margin-top:10px;background: #f00;color:#fff;font-size: 16px;}
.kou_header{position:absolute;left:850px;bottom:0;text-align: start;}
.star_p{display: block;display: flex;width: 140px;position: relative;margin-top: 8px;}
.star_p>span{position: relative;top:-5px;}
.star_p>span>img{margin: 0 -0.1rem;}
.kou_header>p:nth-child(2){margin:3px 0;}
.kou_header>p>span:first-child{font-size: 26px;color: orange;}
.kou_header>p>span>span{font-size: 12px;color: #fff;margin-left:10px;padding-top:5px;}
.mao_p{font-size: 26px;color: #fff;display: block;margin:13px 0;}
.body_div{width: 730px;margin:40px  100px 0 0;}
.body_p2{border-bottom:1.5px solid #ddd;padding-bottom:10px;margin:20px 0;}
.body_p2>a{margin-right:30px;font-size: 16px;margin-bottom:30px;color:#000;padding-bottom:10px;}
.body_p2>a:focus{color:orange;border-bottom:2.2px solid orange;}
.juqing{margin-top:-5px;font-size: 16px;display:inline-block; margin-bottom:20px;}
.juqing_div{width: 3px;height: 17px;background: orange;display:inline-block;margin-top:3px;margin-right:3px;}
.far_div{padding:0px;margin-top:40px;position: relative;}
.flex>ul{width: 128px;height: 242px;text-align: center;}
.daoyan{float: left;}
.quanbu{float: right;}
#daoyan_img{margin-right: 0.8rem;position: relative;}
.font_small>ul>li>img{margin:10px 0;}
.font_small2{font-size:18px;}
.font_small2>ul{
	display: inline;
}
.daoyan2{
	margin: 30px 0;
}
#daoyan_img2{
	font-size: 14px;
}
#daoyan_img2>p{
	padding-left: 40px;
}
.ul_img{display: inline-block;}
#ul_li{display:flex;margin-top:0.625rem;}
#ul_li>li{margin-left:1.2rem;}
#ul_li>p:first-child{display:block;width:100%;}
#ul_two{
	display: flex; margin-top: 0.625rem;text-align: center;
	font-size: 14px;
}
#ul_two>li+li{
	margin-left: 20px;
}
.nezha{font-size: 12px;color: #aaa;}
.jiang{border-bottom:1px dashed #ccc;padding-bottom:20px;}
.mar_right{margin-right:2px; width:750px;height: 258px;}

#small_img{width: 126px;height: 126px;margin:0 2.5px;}

.duanp{color: orange;border: 1px solid orange;
border-radius: 1rem;font-size: 0.75rem;position: absolute;right: 0;
padding:0.25rem 0.625rem;}
.pinglun{margin-top: 1.25rem; display: flex;position: relative;}
.pinglun>img{width: 3.125rem;height: 3.125rem;border-radius: 50%;}
.pinglun>div{position: absolute;top: 2.1rem;z-index: 3;left: 2.1rem;}
.pinglun>li{margin-left:1.25rem;border-bottom: 0.0625rem solid #DDDDDD;width: 100%;}
.pinglun>li>p{position: relative;}

.pinglun>li>p>span:first-child{
	border:0.0625rem solid #005CBF;
	color: #005cbf;
	border-radius: 0.15rem;
	position: absolute;left: 6.15rem;top: 0.1625rem;
	padding:0 0.1125rem;
	font-size: 0.75rem;
	opacity: .6;
	}
.zan{color: #aaa;float: right;}
.pinglun_l{
	color: #999;
	margin: 1.5rem 0;
}




/* right */

.right_div{width: 360px; margin-top:40px;}
#yugao{padding-bottom:10px; border-bottom:1.5px solid #ddd;}
#yugao>a{margin-right:20px;color:#000;}
#yugao>a:focus{color:orange;border-bottom:2.2px solid orange;padding-bottom:10px;}
.bg_18{width: 18px;height: 18px;background:orange;font-style: italic;text-align: center;position: absolute;left:0;bottom: 4px;}
.right_div ul>li{margin-top:20px;position: relative;}
.right_div ul>li>span{margin: 15px 0 15px 15px;display: block;font-size: 14px;}
.right_div ul>li>span+span{font-size: 12px; color:#aaa;padding-left:13px}
.sanjiao{border-left:7px solid #ddd;
    border-top:4px solid transparent;
    border-bottom:4px solid  transparent;
    float: left;margin-left: 18px;margin-top:-26px;
}
.xiang_ul{display: flex;flex-wrap: wrap;justify-content: space-between;}
.xiang_li{width:6.625rem;height:12.5625rem;text-align: center;}
.xiang_li>img{width: 100px;height: 140px;}
.xiang_li>a{color:#000000;}
.xiang_li>p{color:orange;font-size: 18px;font-style: italic;}
.xiang_li>p>span{color:orange;font-size: 12px;font-style: italic;margin-left: -0.3125rem;}
</style>
<script>
export default {
	data(){
		return{
			data:[],
			data2:[],
			type:'动作',
			obj:[],
			resu:[],
			n:2,
			first:true,
			two:false,
			three:false,
			lid:1,

		}
	},
	mounted(){
		let lid=this.$route.query.move_sid;
		this.lid = lid
		if(lid==1){
			this.type='动作'
			this.n=2
		}else{
			this.type='喜剧'
			this.n=1
		}
		this.axios.get('/detail/' + lid).then(res=>{
			this.data=res.data.results;
			this.data.push(res.data.result)

				let data2={}
			 this.data[1].forEach((item)=>{
				 data2 = {small_img:`${item.small_img}`}
				 this.data2.push(data2)
			 })

			this.data2.shift()
		})
		this.axios.get('/type/' + this.type).then(res=>{
			this.obj=res.data.results
			console.log(this.obj)
		})
	
		this.axios.get('/move_index?n=' + this.n ).then(res=>{
			this.resu=res.data.results
			console.log(this.resu)
		})
	},
	methods:{
		first1(){
			this.first = true
			this.two = false
			this.three = false
		},
		two2(){
			this.two = true
			this.first = false
			this.three = false
		},
		three3(){
			this.three = true
			this.first = false
			this.two =false
		}
	},
	// watch:{
	// 	'$router.move_sid'(){
	// 		this.lid = this.$route.query.move_sid
	// 		location.reload()
	// 	}
	// }

	
}
</script>