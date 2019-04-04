<template>
	<div>
		<div class="myheader">
			<div>
				<a href="" class="use-icon"><img src="../../../img/defaultHeadImg.png" alt="" width="50px" height="50px"></a>
				<span class="use-name">孙明力</span>
			</div>
			<div>
				<a href="" class="use-vip">
					<svg class="icon" aria-hidden="true"><use xlink:href="#icon-sijiaoxing"></use></svg>
					普通会员
				</a>
			</div>
		</div>
		<section>
			<router-link to="" class="order all-order">全部订单<span class="seemore">查看详情</span><i class="right-arrow"></i></router-link>
			<ul>
				<li class="service">
					<router-link to="">
						<svg class="icon" aria-hidden="true"><use xlink:href="#icon-daizhifu"></use></svg>
						<p class="data-name">待支付</p>
					</router-link>
				</li>
				<li class="service">
					<router-link to="">
						<svg class="icon" aria-hidden="true"><use xlink:href="#icon-huodong2"></use></svg>
						<p class="data-name">待发货</p>
					</router-link>
				</li>
				<li class="service">
					<router-link to="">
						<svg class="icon" aria-hidden="true"><use xlink:href="#icon-fahuo"></use></svg>
						<p class="data-name">待收货</p>
					</router-link>
				</li>
				<li class="service">
					<router-link to="">
						<svg class="icon" aria-hidden="true"><use xlink:href="#icon-comment"></use></svg>
						<p class="data-name">评价管理</p>
					</router-link>
				</li>
				<li class="service">
					<router-link to="">
						<svg class="icon" aria-hidden="true"><use xlink:href="#icon-shouhou"></use></svg>
						<p class="data-name">退款售后</p>
					</router-link>
				</li>
			</ul>
		</section>
		<section>
			<ul>
				<li class="mydata">
					<router-link to="">
						<p class="data-num"><span>1</span></p>
						<p class="data-name">我的收藏</p>
					</router-link>
				</li>
				<li class="mydata">
					<router-link to="">
						<p class="data-num"><span>88</span></p>
						<p class="data-name">我的积分</p>
					</router-link>
				</li>
				<li class="mydata">
					<router-link to="">
						<p class="data-num"><span>1</span></p>
						<p class="data-name">优惠券</p>
					</router-link>
				</li>
				<li class="mydata">
					<router-link to="">
						<p class="data-num"><span>0</span><span class="unit">张</span></p>
						<p class="data-name">礼品卡</p>
					</router-link>
				</li>
			</ul>
		</section>
		<section>
			<router-link to="" class="order order-item">
				<svg class="icon" aria-hidden="true" style="color:#ec754c;"><use xlink:href="#icon-huiyuan"></use></svg>
				会员福利社<span class="seemore">签到送积分</span><i class="right-arrow"></i>
			</router-link>
			<router-link to="" class="order order-item">
				<svg class="icon" aria-hidden="true" style="color:#c96cd7;"><use xlink:href="#icon-ziyuan"></use></svg>
				极速保价<span class="seemore"></span><i class="right-arrow"></i>
			</router-link>
			<router-link to="" class="order order-item">
				<svg class="icon" aria-hidden="true" style="color:#3dccb4;"><use xlink:href="#icon-cangku"></use></svg>
				我的产品库<span class="seemore"></span><i class="right-arrow"></i>
			</router-link>
			<router-link to="" class="order order-item">
				<svg class="icon" aria-hidden="true" style="color:#3da5af;"><use xlink:href="#icon-duihuan-hangqing"></use></svg>
				我的兑换<span class="seemore"></span><i class="right-arrow"></i>
			</router-link>
		</section>
		<section>
			<router-link to="" class="order order-item">
				<svg class="icon" aria-hidden="true" style="color:#ee7c6c;"><use xlink:href="#icon-bangzhu"></use></svg>
				帮助中心<span class="seemore"></span><i class="right-arrow"></i>
			</router-link>
			<router-link to="" class="order order-item">
				<svg class="icon" aria-hidden="true" style="color:#31c27c;"><use xlink:href="#icon-shezhi"></use></svg>
				设置<span class="seemore">账户设置、地址</span><i class="right-arrow"></i>
			</router-link>
		</section>
	</div>
</template>
<script></script>
<style scoped="">
	.myheader{
		width: 100%;
		background-color: #0092d8;
		height: 52px;
		padding: 24px 0;
		color:#fff;
	}
	.myheader>div:nth-of-type(1){
		float: left;
	}
	.myheader>div:nth-of-type(2){
		height: 52px;
		padding-top: 15px;
		margin-right: 14px;
		float: right;
	}
	.use-icon{
		margin-left: 18px;
		width: 50px;
		height: 50px;
		display: inline-block;
		border-radius: 50%;
		border: 1px solid #fff;
		vertical-align: middle;
	}
	.use-name{
		font-size: 16px;
		line-height: 52px;
		margin-left: 14px;
		max-width: 105px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.use-vip svg{
		font-size: 18px;
	}
	.use-vip{
		display: inline-block;
		height: 20px;
		color:#fff;
		background-color: rgb(0, 126, 186);
		padding: 0 10px;
		border-radius: 10px;
		font-size: 12px;
	}
	section{
		background-color: #fff;
		margin-top: 15px;
		border-bottom: 1px solid #e6e6e6;
	}
	.order{
		display: block;
		padding-left: 14px;
		height: 42px;
		line-height: 42px;
		font-size: 14px;
		color:#333;
		position: relative;
		border-bottom: 1px solid #e6e6e6;
	}
	.seemore{
		color: #999;
		right: 30px;
		position: absolute;
		right: 30px;
		font-weight: normal;
	}
	.right-arrow{
		position: absolute;
		right:14px;
		top:16px;
		display: inline-block;
		transform: rotate(-45deg);
		border-bottom: 2px solid #cccccc;
	    border-right: 2px solid #cccccc;
	    width: 8px;
	    height: 8px;
	}
	.all-order{
		font-weight: bold;
	}
	ul{
		overflow: hidden;
		width: 100%;
	}
	.mydata{
		width: 25%;
		text-align: center;
	    float: left;
	    height: 80px;
	}
	.service{
		width: 20%;
		text-align: center;
	    float: left;
	    height: 80px;
	}
	.mydata a{
		width: 100%;
		display: inline-block;
		height: 80px;
	}
	.data-num{
		margin-top: 14px;
		font-size: 20px;
		color:#333;
		line-height: 1.5;
	}
	.data-name{
		font-size: 12px;
		color:#666;
	}
	.unit{
		font-size: 12px;
		vertical-align: text-bottom;
   		margin-left: 1px;
	}
	.order-item{
		padding-left: 0px;
		margin-left: 52px;
	}
	.order-item svg{
		position: absolute;
		left: -35px;
		height: 40px;
		font-size: 20px;
	}
	.order:last-child{
		border-bottom: none;
	}
	.service svg{
		color:#666;
		font-size: 24px;
		font-weight: bold;
		margin: 8px auto 0 auto;
		height: 40px;
		display: block;
	}
</style>