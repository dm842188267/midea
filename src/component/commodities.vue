<template>
	<div>
		<!-- 头部 -->
		<div class="good-header">
			<div class="good-back" @click="back()">
				<svg class="icon" aria-hidden="true"><use xlink:href="#icon-right"></use></svg>
			</div>
			<div class="good-header-middle">
				<ul>
					<li v-for="(v,i) in Goodheader" @click="change(i)">
						<router-link to=""><span :class="{'bottomcolor': i == bottomcolor}">{{v.title}}</span></router-link>
					</li>
				</ul>
			</div>
			<div class="good-share">
				<svg class="icon" aria-hidden="true"><use xlink:href="#icon-fenxiang"></use></svg>
			</div>
		</div>
		<!--内容-->
		<div class="good-wrap">
			<component :is='msg'></component>
		</div>
		<!-- 底部 -->
		<div class="good-footer">
			<div class="cus"><a><svg class="icon" aria-hidden="true"><use xlink:href="#icon-kefu"></use></svg><span>客服</span></a></div>
			<div class="col"><a><svg class="icon" aria-hidden="true"><use xlink:href="#icon-xing"></use></svg><span>收藏</span></a></div>
			<div class="cart"><a><svg class="icon" aria-hidden="true"><use xlink:href="#icon-gouwuche"></use></svg><span>购物</span></a></div>
			<div class="handle"><a href="" class="incart">加入购物车</a><router-link to="" class="buy">立即购买</router-link></div>
		</div>
	</div>
</template>

<script> 
	import good from './commodities/good.vue'
	import detail from './commodities/detail.vue'
	import evaluate from './commodities/evaluate.vue'
	
	
	export default{
		data(){
			return{
				bottomcolor:0,
				msg:'good',
				Goodheader:[
					{
						"title":"商品",
						"link":"good"
					},
					{
						"title":"详情",
						"link":"detail"
					},
					{
						"title":"评价",
						"link":"evaluate"
					}
				]
			}
		},
		methods:{
			change(a){
				this.msg=this.Goodheader[a].link
				this.bottomcolor=a
			},
			back(){
				this.$router.go(-1)
			}
		},
		components:{
			'good':good,
			'detail':detail,
			'evaluate':evaluate,
		}
	}
</script>
<style>
	.good-wrap{
		margin-top: 50px !important;
		padding-bottom: 50px;
		max-width: 1424px;
	}
	.good-header-middle .bottomcolor{
		border-bottom: 2px solid #0092d8; 
		color:#0092d8;
		line-height: 50px;
	}
	.good-header{
		width: 100%;
		position: fixed;
		background: #fff;
		height: 50px;
		top:0;
		left:0;
		z-index: 50;
	}
	.good-back{
		text-align: center;
		width: 50px;
		height: 50px;
		position: absolute;
		left:0;
		top: 0;
	}
	.good-share{
		text-align: center;
		width: 50px;
		height: 50px;
		position: absolute;
		right:0;
		top: 0;
	}
	.good-header svg{
		height: 50px;
		font-size: 19px;
		color:#139adb;
	}
	.good-share svg{
		font-size: 22px;
	}
	.good-header-middle{
		margin: 0 60px;
		height: 50px;
		position: relative;
	}
	.good-header-middle ul{
		width: 144px;
		height: 50px;
		margin: 0 auto;
		overflow: hidden;
	}
	.good-header-middle li{
		float: left;
		line-height: 50px;
	}
	.good-header-middle li:nth-last-of-type(2){
		padding: 0 30px;
	}
	.good-header-middle span{
		color:#999;
		font-size: 14px;
		display: inline-block;
		height: 48px;
	}
	.good-footer{
		width: 100%;
		position: fixed;
		background: #fff;
		height: 50px;
		bottom:0;
		left:0;
		z-index: 50;
		overflow: hidden;
		text-align: center;
		color:#999;
		border-top: 1px solid #e3e3e3;
	}
	.cus,.col,.cart{
		float: left;
		padding: 7px 10px;
		width: 50px;
		height: 50px;
		box-sizing: border-box;
		border-right: 1px solid #f4f4f4;
	}
	.good-footer svg{
		width: 30px;
		display: block;
		font-size: 20px;
		color:#555;
		font-weight: bold;
	}
	.good-footer span{
		font-size: 12px;
	}
	.handle{
		height: 50px;
		padding-left: 150px;
	}
	.incart{
		display: inline-block;
		width: 50%;
		height: 50px;
		background: salmon;
		line-height: 50px;
		background: #0092d8;
		float: left;
		color:#fff;
	}
	.buy{
		display: inline-block;
		width: 50%;
		height: 50px;
		background: salmon;
		line-height: 50px;
		float: left;
		color:#fff;
		background: #f60;
	}
</style>