<template>
	<div>
		<mt-header fixed title="购物车" class="shopcar-header">
			<router-link to="/" slot="left">
				<mt-button icon="back" @click="back()"></mt-button>
			</router-link>
		</mt-header>
		<div class="shopcar-wrap">
			<!-- 暂无商品 -->
			<div class="car-nothing">
				<div><img src="../../../img/cart_not_found.webp" alt="" width="100px"></div>
				<div>购物车还是空的，快去挑选商品吧~</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style>
	.shopcar-header{
		height: 44px;
		background: #fff;
	}
	.shopcar-header .mint-header-title{
		color:#333;
		font-size: 17px;
		font-weight: normal;
	}
	.mintui-back{
		color:#0093d5;
		font-size: 20px;
	}
	.shopcar-wrap{
		margin-top: 44px;
		background: #f4f4f4;
		overflow: hidden;
		padding-bottom: 74px;
	}
	.car-nothing{
		color: #ccc;
		font-size: 12px;
		text-align: center;
	}
	.car-nothing img{
		margin: 60px auto 28px auto;
	}
</style>