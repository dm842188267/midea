<template>
	<div>
		<div v-for="(v,i) in Goodlist">
			<div class="sml-slider">
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for="(vpic,ipic) in v.Goodpic">
							<img :src="vpic.pic" alt="" width="100%">
						</div>
					</div>
					<!-- 如果需要分页器 -->
					<div class="swiper-pagination"></div>
				</div>
			</div>
			<div class="good-info">
				<div class="good-title">
					<div class="good_title"><span class="self">{{v.self}}</span>{{v.title}}</div>
					<div class="good-name"><span class="insured">{{v.insured}}</span>{{v.name}}</div>
				</div>
				<div class="good-price">
					<div class="good_price">&yen; <span class="price">{{v.price}}</span><del class="cost">&yen; {{v.cost}}</del></div>
					<div class="good-stock"><span class="com">评价  {{v.com}}</span><span class="stock">库存  {{v.stock}}</span></div>
				</div>
				<div class="good-tag"><span class="tag">{{v.tag}}</span><span>{{v.acttime}}</span></div>
			</div>
			<div class="good-detail-info">
				<div class="detail-item">
					<span class="text-gray">领劵</span><span class="max-text" v-for="(vmax,imax) in v.Max">{{vmax.max}}</span>
					<svg class="icon detail-arrow" aria-hidden="true"><use xlink:href="#icon-icon1"></use></svg>
				</div>
				<div class="detail-item">
					<span class="text-gray">促销</span><span class="sale-text" v-for="(vsale,isale) in v.Sale">{{vsale.sale}}</span>
					<svg class="icon detail-arrow" aria-hidden="true"><use xlink:href="#icon-icon"></use></svg>
				</div>
				<div class="detail-item">
					<span class="text-gray">分期</span><span class="fenqi-text">{{v.fenqi}}</span>
					<svg class="icon detail-arrow" aria-hidden="true"><use xlink:href="#icon-icon"></use></svg>
				</div>
				<div class="detail-item">
					<span class="text-gray">服务</span>
					<div class="ser-list">
						<p class="ser-item" v-for="(vser,iser) in v.Ser">
							<svg class="icon" aria-hidden="true"><use xlink:href="#icon-dui"></use></svg>
							{{vser.ser}}
						</p>
					</div>
				</div>
			</div>
			<div class="good-detail-info">
				<div class="detail-item">
					<span class="text-gray">已选</span><span class="size-text">{{v.size}}</span>
					<svg class="icon detail-arrow" aria-hidden="true"><use xlink:href="#icon-icon1"></use></svg>
				</div>
				<div class="detail-item">
					<span class="text-gray">配送</span>
					<div class="detail-add">
						<span style="padding-right: 8px;">{{v.deliver}}</span>
						至<span class="add-text" style="display: block;">{{v.receiv}}</span>
					</div>
					<span class="ifstock">{{v.ifstock}}</span>
					<span class="awoke">{{v.awoke}}</span>
					<svg class="icon detail-arrow" aria-hidden="true"><use xlink:href="#icon-icon1"></use></svg>
				</div>
			</div>	
			<div class="good-detail-info">
				<div class="detail-item">
					<span class="text">产品参数</span>
					<svg class="icon detail-arrow" aria-hidden="true"><use xlink:href="#icon-icon"></use></svg>
				</div>
			</div>
			<div class="good-detail-info">
				<div class="detail-item">
					<span class="text">服务支持</span>
					<svg class="icon detail-arrow" aria-hidden="true"><use xlink:href="#icon-icon"></use></svg>
				</div>
			</div>
			<div class="good-detail-info">
				<div class="detail-item">
					<span class="text">商品评价</span>
					<svg class="icon detail-arrow" aria-hidden="true"><use xlink:href="#icon-icon1"></use></svg>
				</div>
				<div class="detail-item">
					<div class="comtag-list">
						<span class="comtag-item" v-for="(vcomtag,icomtag) in v.Comtag">{{vcomtag.comtag}}</span>						
					</div>
				</div>
				<div class="detail-item">
					<div class="good-com">
						<div class="anonymous">
							<img src="../../../img/h5_avator.webp" alt="" width="32px" height="32px">
							<span class="comname">6***6</span>
						</div>
						<div class="release-time">
							<span class="top-tip"></span>
							<span class="com-time">2018-05-03</span>
						</div>
					</div>
					<p class="comcon">安装师傅很不错，很辛苦，还帮忙打扫</p>
				</div>
				<div class="detail-item detail-item_s">
					<span class="allcomment-text">查看全部1234评价</span>
				</div>
			</div>
			<div class="good-detail-info">
				<div class="detail-item">
					<img class="shop-logo" src="../../../img/logo_60x60.webp" alt="" width="30px">
					<span class="shop-name">美的官网商城</span>
					<router-link to="/home" class="shop-btn">返回商城</router-link>
				</div>
			</div>
			<div class="good-detail-info">
				<div class="detail-item good-detail-info-b">
					<span class="text">为你推荐</span>
				</div>
				<div class="recommendlist">
					<div class="recommenditem" v-for="(recommend,irecom) in v.Recommend">
						<div class="recommendpic"><img :src="recommend.pic" alt=""></div>
						<div class="recommendinfo">
							<div class="recommendname">{{recommend.name}}</div>
							<div class="recommendprice">&yen; {{recommend.price}}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="to-detail">
				<a href="">点击查看图文详情</a>
			</div>
		</div>
	</div>
</template>
<script>
	import Swiper from 'swiper';
	
	export default{
		data(){
			return{
				Goodlist:[]
			}
		},
		mounted(){
			var _this=this
			this.$http.get('./data/good.json')
			  .then(function (response) {
			    // console.log(response);
				_this.Goodlist=response.data.Good
				
			_this.$nextTick(function(){
				var mySwiper = new Swiper('.swiper-container', {
				   loop:true,
				   pagination: {
					  el: '.swiper-pagination',
					},
					observer:true,//修改swiper自己或子元素时，自动初始化swiper 
					observeParents:false,//修改swiper的父元素时，自动初始化swiper 
				})
			})	
			  })
			  .catch(function (error) {
			    console.log(error);
			  })
			  .then(function () {
			    // always executed
			})
		}
	}
</script>

<style>
	.sml-slider{
		background: #fff;
		border-bottom: 1px solid #eee;
	}
	.good-info{
		background: #fff;
	}
	.good-title{
		padding: 15px;
	}
	.good_title{
		line-height: 1.25;
		color:#333;
		font-size: 16px;
		min-height: 20px;
    	max-height: 40px;
		margin-bottom: 2px;
	    word-wrap: break-word;
	    word-break: break-all;
	    overflow: hidden;
	}
	.self{
	    border: 1px solid #f60;
	    color: #f60;
	    font-size: 12px;
	    vertical-align: middle;	
	  	padding: 0 2px;
    	margin: 0 6px 2px 0;	
	}
	.insured{
		margin-right: 5px;
		color: #0092d8;
	    font-size: 12px;
	    border: 1px #0092d8 solid;
	    padding: 2px;
	    border-radius: 2px;
	}
	.good-name{
		font-size: 14px;
	    color: #f60;
	    overflow: hidden;
	    max-height: 40px;
	}
	.good-price{
		padding: 0 15px 15px;
		overflow: hidden;
	}
	.good_price{
		float: left;
		color:#f60;
	}
	.price{
		font-size: 24px;
	}
	.cost{
		margin-left: 5px;
		color:#999;
		font-size: 13px;
	}
	.good-stock{
		margin-top: 12px;
		float: right;
		font-size: 12px;
		color:#999;
	}
	.com{
		border-right: 1px solid #ddd;
		padding-right: 10px;
	}
	.stock{
		margin-left: 10px;
	}
	.good-tag{
		font-size: 12px;
		background: #f60;
		color: #fff;
		padding: 8px 15px;
	}
	.tag{
		display: inline-block;
		background: #fff;
		color:#f60;
		font-size: 12px;
		padding: 0 5px;
		margin-right: 5px;
	}
	.good-detail-info{
		background-color: #fff;
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
		position: relative;
		margin-bottom: 10px;
	}
	.text-gray{
		color:#999;
		font-size: 12px;
		margin-right: 20px;
		float: left;
		line-height: 24px;
	}
	.max-text{
		display: inline-block;
		color:#fff;
		font-size: 12px;
		background: #f60;
		height: 22px;
		line-height: 22px;
		padding: 0 8px;	
		margin-right: 15px;
	}
	.detail-item{
		position: relative;
		overflow: hidden;
		border-top: 1px solid #f4f4f4;
		padding: 11px 0 11px 15px;
	}
	.detail-arrow{
		color: #999;
		font-size: 24px;
		position: absolute;
		right:15px;
		opacity: .8;
	}
	.sale-text{
		color:#fff;
		font-size: 12px;
		background: #f60;
		padding: 0 6px;	
		margin-right: 6px;
	}
	.fenqi-text,.add-text,.size-text,.add-text,.text{
		font-size: 14px;
		color:#333;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.ser-list{
		float: left;
	}
	.ser-item{
		display: inline-block;
		font-size: 12px;
		color:#999;
		padding-right: 5px;
	}
	.ser-item svg{
		color:#0092d8;
		font-size: 16px;
	}
	.detail-add{
		font-size: 14px;
		float: left;
	}
	.add-text{
		max-width: 160px;
		height: 35px;
	}
	.ifstock{
		color:#f60;
		font-size: 12px;
		float: right;
		margin-right: 35px;
		margin-top: 3px;
	}
	.awoke{
		position: absolute;
		font-size: 12px;
		color:#999;
		bottom:0;
		left:0;
		padding-left: 58px;
		margin-bottom: 5px;
	}
	.comtag-item{
		display: inline-block;
		font-size: 12px;
		color: #333;
		border-radius: 4px;
		background: #ebfcf1;
		border: 1px solid #23d75f;
		height: 24px;
		line-height: 24px;
		vertical-align: middle;
		padding: 0 8px;
		margin: 10px 10px 0 0;
	}
	.anonymous{
		float: left;
		height: 32px;
	}
	.good-com{
		overflow: hidden;
		padding-right: 15px;
	}
	.release-time{
		float: right;
	}
	.anonymous img{
		border-radius: 15px;
		vertical-align: top;
	}
	.comname{
		font-size: 14px;
		color:#666;
		display: inline-block;
		line-height: 32px;
		margin-left: 5px;
		vertical-align: text-bottom;
		max-width: 145px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.top-tip{
		display: inline-block;
		width: 13px;
		height: 13px;
		background: url(../../../img/detail_sprite_v2.png)0 0 no-repeat;
		background-size: 130px auto;
		background-position: -20px -110px;
		vertical-align: middle;
	}
	.com-time{
		font-size: 14px;
		color:#ccc;
	}
	.comcon{
		font-size: 12px;
		color: #747474;
		word-break: break-all;
		overflow: hidden;
		margin-top: 15px;
	}
	.allcomment-text{
		display: block;
		color: #0092d8;
		height: 44px;
		line-height: 44px;
		font-size: 14px;
		text-align: center;
	}
	.detail-item_s{
		padding: 0;
	}
	.shop-logo{
		float: left;
		margin-right:10px;
	}
	.shop-name{
		float: left;
		color:#333;
		font-size: 14px;
		height: 30px;
		line-height: 30px;
	}
	.shop-btn{
		float: right;
		width: 73px;
		height: 28px;
		line-height: 28px;
		border: 1px solid #0093d5;
		border-radius: 3px;
		text-align: center;
		font-size: 12px;
		color: #0093d5;
		margin-right: 15px;
	}
	.good-detail-info-b{
		border: none;
		border-bottom: 1px solid #f4f4f4;
	}
	.recommendlist{
		background: #fff;
		overflow: hidden;
	}
	.recommenditem{
		float: left;
		width: 50%;
		box-sizing: border-box;
	}
	.recommenditem:nth-of-type(1){
		border-right: 1px solid #eee;
	}
	.recommendpic{
		padding: 20px 15px 17px 15px;
	}
	.recommendpic img{
		width: 100%;
		min-width: 110px;
	}
	.recommendinfo{
		font-size: 13px;
		padding: 0 15px;
	}
	.recommendname{
		height: 38px;
		overflow: hidden;
		color: #333;
	}
	.recommendprice{
		margin: 6px 0 10px 0;
		color: #ff6600;
		text-align: left;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.to-detail{
		box-sizing: border-box;
		width: 100%;
		text-align: center;
		padding: 0px 0 20px;
		cursor: pointer;
		color: #333;
	}
	.to-detail a{
		display: inline-block;
		font-size: 13px;
		height: 28px;
		line-height: 28px;
		padding: 0 10px;
		border: 1px solid #ccc;
		border-radius: 3px;
		color: #666;
		background-color: #fff;
	}
</style>