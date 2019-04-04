<template>
	<div>
		<div class="s-hd">
			<mt-header fixed class="search-header">
			  <router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			  </router-link>
			  <mt-button slot="right" class="search-btn">
				  搜索
			  </mt-button>
			</mt-header>
			<div class="search-text">
				<svg class="icon s1" aria-hidden="true">
				  <use xlink:href="#icon-search"></use>
				</svg>
				<svg class="icon s2" aria-hidden="true">
				  <use xlink:href="#icon-delete"></use>
				</svg>
				<input type="text" class="">
			</div>
		</div>
		<div class="recsearch">
			<div class="rec-title">推荐搜索</div>
			<div class="rec-list">
				<div class="rec-item" v-for="(v,i) in Reclist">
					<router-link to="">{{v.title}}</router-link>
				</div>
			</div>
		</div>
		<div class="hot-buy">
			<div class="hot-buy-title">热卖商品</div>
			<div class="hot-buy-item">
				<router-link to="" v-for="(v,i) in Hotlist">
					<div class="product">
						<div class="pic"><img :src="v.pic" alt="" width="120px"></div>
						<div class="info">
							<div class="title">{{v.title}}</div>
							<div class="name">{{v.name}}</div>
							<div class="tag"><div class="tags" v-if="v.flag==1">{{v.tag1}}</div><div class="tags"  v-if="v.flag==1" :style="v.tagcolor">{{v.tag2}}</div></div>
							<div class="des">
								<div class="price">&yen; {{v.price}}</div>
								<div class="cost">&yen; {{v.cost}}</div>
								<div class="comment">{{v.comment}}</div>
							</div>
						</div>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				Reclist:[],
				Hotlist:[]
			}
		},
		mounted(){
			var _this=this
			this.$http.get('./data/search.json')
			  .then(function (response) {
			    // console.log(response);
				_this.Reclist=response.data.Recdata;
				_this.Hotlist=response.data.Hotdata;
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
	.search-header{
		height: 44px;
		border-bottom: 1px solid #eee;
		z-index: 50;
		background: #fff;
		padding:0 6px 0 10px
	}
	.mintui-back{
		color:#0092D8;
		font-size: 22px;
	}
	.mint-header .search-btn{
		background: #0092D8;
		width: 38px;
		height: 29px;
		line-height: 29px;
		font-size: 12px;
	
	}
	.search-text{
		position: relative;
		height: 44px;
		margin-left: 40px;
		margin-right: 50px;
		z-index: 2;
	}
	.search-text svg{
		position: absolute;
		color:#b2b2b2;
		top:13px;
	}
	.s1{
		left:5px;
	}
	.s2{
		right:5px;
	}
	.search-text input{
		padding: 0 28px 0 25px;
		border: 1px solid #eee;
		border-radius: 3px;
		background-color: #eee;
		color: #333;
		width: 100%;
		height: 30px;
		line-height: 30px;
		box-sizing: border-box;
		margin-top: 6px;
		font-size: 14px;
	}
	.recsearch{
		background-color: #fff;
		padding: 14px 0 5px 0;
		width: 100%;
		font-size: 12px;
	}
	.rec-title{
		padding:0px 0px 0px 15px;
		color:#999;
	}
	.rec-list{
		overflow: hidden;
		padding-right: 15px;
		padding-left: 8px;
		margin-top: 12px;
	}
	.rec-item{
		float: left;
		box-sizing: border-box;
		padding-left: 8px;
		margin-bottom: 8px;
	}
	.rec-item a{
		display: block;
		padding: 0 14px;
		font-size: 14px;
		height: 30px;
		line-height: 30px;
		box-sizing: border-box;
		border: 1px solid #ccc;
		border-radius: 2px;
		text-align: center;
		color:#333;
	}
	.hot-buy{
		max-width: 1424px;
	}
	.hot-buy-title{
		font-size: 12px;
		color: #999;
		background-color: #fff;
		padding: 16px 0 11px 15px;
	}
	.hot-buy-item{
		background-color: #fff;
		border-top: 1px solid #f4f4f4;
	}
	.hot-buy-item .product{
		height: 120px;
		position: relative;
		padding: 8px 0;
		border-bottom: 1px solid #f4f4f4;
	}
	.hot-buy-item .pic{
		position: absolute;
		left:8px;
	}
	.hot-buy-item .info{
		height: 120px;
		width: 100%;
		padding-left: 136px;
		padding-right: 13px;
		box-sizing: border-box;
	}
	.hot-buy-item .title{
		color: #333;
		max-height: 34px;
		line-height: 18px;
		overflow: hidden;
		font-size: 14px;
	}
	.hot-buy-item .name{
		height: 16px;
		color: #999;
		font-size: 12px;
		margin-top: 2px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.hot-buy-item .tag{
		margin-top: 5px;
		overflow: hidden;
	}
	.hot-buy-item .tags{
		float: left;
		padding: 0 3px;
		background:#f60;
		color:#fff;
		font-size: 12px;
		margin-right: 5px;
	}
	.hot-buy-item .des{
		height: 24px;
		line-height: 24px;
		margin-top: 11px;
	}
	.hot-buy-item .price{
		color:#f60;
		float: left;
		font-size: 16px;
	}
	.hot-buy-item .cost{
		color:#999;
		float: left;
		margin-left: 5px;
		font-size: 12px;
		text-decoration: line-through;
	}
	.hot-buy-item .comment{
		color:#999;
		float: right;
		font-size: 12px;
	}
</style>