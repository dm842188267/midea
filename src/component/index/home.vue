<template>
	<div class="index-box">
		<!-- <button @click="text()">click me</button> -->
		<header>
			<router-link to="/" class="left">
		    	<button>
		    		<svg class="icon" aria-hidden="true">
					  <use xlink:href="#icon-kefu"></use>
					</svg>
		    	</button>
		  </router-link>
		  <h1><img src="../../../img/logo.svg" alt="" width="60px"></h1>
		  	<router-link to="/search" class="right">
			    <button>
			    	<svg class="icon" aria-hidden="true">
					  <use xlink:href="#icon-search"></use>
					</svg>
			    </button>
			 </router-link>
		</header>
		<!-- <mt-swipe :auto="4000">
		  <mt-swipe-item v-for="(v,i) in list1">
			  <router-link to="">
				  <img :src="v" alt="">
			  </router-link>
		  </mt-swipe-item>
		</mt-swipe> -->
		<div class="sml-slider">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(v,i) in list1">
						<img :src="v" alt="" width="100%">
					</div>
				</div>
				<!-- 如果需要分页器 -->
				<div class="swiper-pagination"></div>
			</div>
		</div>
		<div class="category">
			<ul class="category-list">
				<li v-for="(v,i) in list" @click="text(i)">
					<router-link to="/classify">
						<p>{{v.title}}</p>
						<img :src="v.pic" alt="" width="70px" height="70px">
					</router-link>
				</li>
			</ul>
			<ul class="category-list1">
				<li v-for="(v,i) in list2">
					<router-link to="/">
						<img :src="v" alt="" width="100%">
					</router-link>
				</li>
			</ul>
		</div>
		<div class="protrudes-wrap">
			<router-link to="/commodities" v-for="(v,i) in list3">
				<!-- {{$store.state.count}} -->
				<div class="protrudes">
					<div class="pic">
						<img :src="v.pic" alt="" width="100%" >
						<div class="attach" v-if="v.flag==1">
							<div class="buy-time"><span></span>{{v.time}}</div>
							<div class="buy-status">{{v.status}}</div>
						</div>
					</div>
					<div class="info">
						<div class="title">{{v.title}}</div>
						<div class="name">{{v.name}}</div>
						<div class="des">
							<div class="price">{{v.price}}</div>
							<div class="collect"><span></span>{{v.collect}}
							</div>
							<div class="comment"><span></span>{{v.comment}}
							</div>
							<div class="browse"><span></span>{{v.browse}}
							</div>
						</div>
					</div>
				</div>
			</router-link>
		</div>
		<div class="normal-wrap">
			<div class="normal-title">
				<svg class="icon" aria-hidden="true"><use xlink:href="#icon-zuanshi"></use></svg>
				<h3>精选精品</h3>
			</div>
			<div class="normal-list">
				<router-link to="/" v-for="(v) in list4">
					<div class="protrudes">
						<div class="pic">
							<img :src="v.pic" alt="" width="100%" >
							<div class="attach">
								<div class="buy-status">{{v.status}}</div>
							</div>
						</div>
						<div class="info">
							<div class="name">{{v.name}}</div>
							<div class="price">{{v.price}}</div>
						</div>
					</div>
				</router-link>
			</div>
		</div>
		<div>
			<ul>
				<li></li>
			</ul>
		</div>
	</div>
</template>
<script>
	import Swiper from 'swiper';
	export default{
		data(){
			return{
				list:[],
				list1:[],
				list2:[],
				list3:[],
				list4:[]
			}
		},
		methods:{
			text(n){
				// store.state.count=n;
				this.$store.commit('increment',n);
				// console.log(this.$store.state.count)
			}
		},
		mounted(){
			var _this=this
			this.$http.get('./data/home.json')
			  .then(function (response) {
			    // console.log(response);
				_this.list=response.data.data;
			    _this.list1=response.data.data1;
				_this.list2=response.data.data2;
				_this.list3=response.data.protrudes;
				_this.list4=response.data.normal;
				_this.$nextTick(function(){
					var mySwiper = new Swiper('.swiper-container', {
					   autoplay:true,
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
<style scoped="">
	.index-box{
		padding: 44px 0;
	}
	.mint-swipe-indicator.is-active{
		opacity: 1;
	}
	.mint-swipe-indicator{
		width: 10px;
		height: 10px;
		opacity: .2;
		margin: 0 5px;
	}
	.category ul{
		width: 100%;
		overflow: hidden;
	}
	.category li{
		background: #fff;
		text-align: center;
		float:left;
		border-bottom: 1px solid #eee;
		border-right: 1px solid #eee;
		box-sizing: border-box;	
	}
	.category-list li{
		width: 25%;
	}
	.category-list1 li{
		width: 50%;
	}
	.category-list li:nth-of-type(4n){
		border-right:none ;
	}
	.category-list p{
		font-size: 12px;
		font-weight: bold;
		margin-top: 17px;
		color:#333;
	}
	.category-list img{
		margin: 15px auto;
	}
	header{
		top: 0;
		left:0;
		z-index: 5;
		width: 100%;
		position: fixed;
		background: #0092d8;
		height: 44px !important;
	}
	header h1{
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}
	header svg{
		color:#fff;
		font-size: 22px;
	}
	.left{
		float: left;
	}
	.right{
		float: right;
	}
	.h44{
		height: 44px;
		width: 100%;
	}
	header button{
		height: 44px;
		width: 50px;
		background: none;
		border: none;
	}
	.mint-swipe{
		height: 214.69px;
	}
	.mint-swipe img{
		width: 100%;
	}
	.protrudes{
		margin-top: 15px;
		width: 100%;
	}
	.pic{
		position: relative;
	}
	.pic img{
		display: block;
	}
	.info{
		background: #fff;
	}
	.title{
		padding: 16px 15px 0px 15px;
		line-height: 22px;
		font-size: 16px;
		color: #333;
	}
	.name{
		padding: 0 15px;
		color:#999;
		font-size: 13px;
		margin-top: 5px;
	}
	.des{
		padding: 7px 15px 11px 15px;
		overflow: hidden;
	}
	.des span,.buy-time span{
		display: inline-block;
		width: 30px;
		height: 20px;
		background: url(../../../img/index_sprite.png)0 0;
		background-size: 180px;
		vertical-align: text-bottom;
	}
	.price{
		color: #ff3300;
		float: left;
		font-size: 18px;
	}
	.collect,.browse,.comment{
		max-width: 65px;
		height: 30px;
		font-size: 14px;
		float: right;
		margin-left: 10px;
		color: #ccc;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.collect span{
		margin-top: 3px;
		background-position: -60px 0;
	}
	.comment span{
		margin-top: 4px;
		background-position: -30px 0;
	}
	.browse span{
		margin-top: 3px;
		background-position: -0px 0;
	}
	.buy-time{
		height: 30px;
		line-height: 30px;
		padding-right: 12px;
		background-color: #303030;
		opacity: 0.8;
		float: left;
	}
	.buy-status{
		float: left;
		height: 30px;
		line-height: 30px;
		padding: 0 11px;
		background-color: #ff6600;
		font-size: 14px;
	}
	.buy-time{
		font-size: 14px;
	}
	.buy-time span{
		background-position: -120px 0;
		margin-top: 4px;
		margin-left: 3px;
		width: 26px;
	}
	.attach{
		position: absolute;
		right: 0;
		top: 0;
		color:#fff;
	}
.normal-wrap{
	margin-top: 15px;
	background: #fff;
}
.normal-title{
	height: 50px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
}
.normal-title svg{
	color:#f60;
	font-size: 20px;
	margin: 15px 8px 0px 15px;
	float: left;
}
.normal-title h3{
	font-size: 16px;
	font-weight: normal;
	line-height: 50px;
}
.normal-wrap .protrudes{
	display: inline-block;
	margin: 0;
	width: 50%;
	height: 100%;
	box-sizing: border-box;
	border-right:1px solid #eee;
	border-bottom:1px solid #eee;
}
.normal-wrap a:nth-of-type(2n) .protrudes{
	border-right:none;
}
.normal-wrap .name{
	margin: 0;
	padding: 0;
	color:#333;
	height: 37px;
	overflow: hidden;
}
.normal-wrap .info{
	padding: 0 15px;
}   
.normal-wrap .pic{
	padding:20px 15px 17px 15px;
}
.normal-wrap .price{
	margin:6px 0 10px 0;
	text-align: left;
	float: none;
	font-size: 13px;
}
.normal-wrap .buy-status{
	font-size: 13px;
}
</style>