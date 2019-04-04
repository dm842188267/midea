<template>
	<div class="classify-con">
		<router-link to="/" class="classify-top">
			<img src="../../../../img/9a9609665b9d.webp" width="100%">
		</router-link>
		<div class="classify-hot">
			<div class="title">热门品类</div>
		</div>
		<div class="Hot-category">
			<router-link to="" v-for="(v,i) in list">
				<div class="hot-category">
					<img :src="v.pic" alt="">
					<div class="word">{{v.word}}</div>
				</div>
			</router-link>
		</div>
		<div class="classify-hot">
			<div class="title">热门单品</div>
		</div>
		<div class="Hot-item">
			<router-link to="" v-for="(v,i) in list1">
				<div class="hot-item">
					<div class="pic"><img :src="v.pic" alt="" width="60px" height="60px"></div>
					<div class="info">
						<div class="name">{{v.name}}</div>
						<div class="tag">
							<div class="tags" :style="v.tag1color">{{v.tag1}}</div><div class="tags" :style="v.tag2color">{{v.tag2}}</div>
						</div>
						<div class="des">
							<div class="price">&yen; {{v.price}}</div>
							<div class="cost" v-if="v.flag==1">&yen; {{v.cost}}</div>
							<div class="comment">{{v.comment}}</div>
						</div>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:[],
				list1:[]
			}
		},
		mounted(){
			var _this=this
			this.$http.get('./data/classify.json')
			  .then(function (response) {
				_this.list=response.data.Airhotcategory;
				_this.list1=response.data.Airhotitem;
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
	.classify-con{
		margin-left: 81px;
		height: 100%;
		overflow: auto;
		padding-bottom: 50px;
		background:#fff;
	}
	.classify-top{
		display: grid;
	}
	.classify-hot{
		width: 100%;
		height: 43px;
		border-bottom: 1px solid #eee;
	}
	.classify-con .title{
		float: left;
		margin-top: 17px;
		margin-left: 12px;
		color: #999;
		font-size: 12px;
	}
	.Hot-category{
		overflow: hidden;
	}
	.hot-category{
		box-sizing: border-box;
		width: 33%;
		height: 127px;
		float: left;
		text-align: center;
		border-bottom:1px solid #eee;
		border-right:1px solid #eee;
	}
	.hot-category img{
		width: 78px;
		height: 78px;
		margin: 12px auto 2px 0;
	}
	.hot-category .word{
		font-size: 12px;
		color: #333;
	}
	.hot-item{
		padding:16px 0;
		height: 120px;
		border-bottom: 1px solid #f4f4f4;
		box-sizing: border-box;
		position: relative;
	}
	.hot-item .pic{
		position: absolute;
		left:16px;
	}
	.hot-item .info{
		width: 100%;
		padding:0 13px 0 90px;
		box-sizing: border-box;
	}
	.hot-item .name{
		font-size: 12px;
		color:#333;
		overflow: hidden;
		max-height: 34px;
	}
	.tag{
		margin-top: 5px;
	}
	.tag::after{
		clear: both;
		content: '';
		display: block;
	}
	.tags{
		float: left;
		margin-top: 2px;
		margin-right: 5px;
		color: #fff;
		font-size: 12px;
		padding: 0 3px;
	}
	.des{
		height: 24px;
		line-height: 24px;
		margin-top: 11px;
	}
	.hot-item .price{
		float: left;
		color: #ff6600;
		font-size: 16px;
	}
	.hot-item .cost{
		float: left;
		font-size: 12px;
		color: #999;
		text-decoration: line-through;
		margin-left: 4px;
	}
	.hot-item .comment{
		float: right;
		font-size: 12px;
		color: #999;
		max-width: 57px;
		max-height: 24px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>