<template>
	<div>
		<div class="detail-wrap">
			<img src="../../../img/7fffffffffffffff5c7f3b542e9b878080.webp" alt=""  width="100%">
			<div>
				<video id="myVideo" class="video-js">
					<source src="/src/video/430c13ff307b4716b5b00b48ed19cbceconv.mp4" type="video/mp4">
				</video>
			</div>
			<img :src="v.pic" alt="" width="100%" v-for="(v,i) in list">
			<div class="marking_price_wrap">
				<p class="marking_price__title">划线价格：</p>
				<p class="marking_price__content">指商品专柜价、吊牌价、正品零售价、厂商指导价或该商品的曾经展示过的销售价等，并非原价，仅供參考。</p>
				<p class="marking_price__title">未划线价格：</p>
				<p class="marking_price__content">指商品的实时标价，不因表述的差异改变性质。具体成交价格根据商品参加活动，或会员使用优惠券、积分等发生变化，最终以订单结算页价格为准。</p>
				<p class="marking_price__content">商家详情页（含主图）以图片成文字形式标注的一口价、促销价、优惠价等价格可能是在使用优惠券、满减或特定优惠活动和时段等情形下的价格.具体请以结算页面的标价、优惠条件或活动规则为准。</p>
				<p class="marking_price__content">此说明仅当出现价格比较时有效，如有疑问，您可在购买前联系客服进行咨询。</p>
			</div>
		</div>
	</div>
</template>
<script>
    export default{
    	data(){
    		return{
    			list:[],
    		}
    	},
    	mounted(){
    		var _this=this
			this.initVideo();
    		this.$http.get('./data/detail.json')
    		  .then(function (response) {
    		    // console.log(response);
    			_this.list=response.data.list;
    		  })
    		  .catch(function (error) {
    		    console.log(error);
    		  })
    		  .then(function () {
    		    // always executed
    		})
    	},
    methods: {
        initVideo() {
        //初始化视频方法
        let myPlayer = this.$video(myVideo, {
            //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
            controls: true,
            //自动播放属性,muted:静音播放
            autoplay: "muted",
            //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
            preload: "auto",
            //设置视频播放器的显示宽度（以像素为单位）
            width: "100px",
            //设置视频播放器的显示高度（以像素为单位）
            height: "400px"
        });
        }
    }
    }
</script>
<style>
	.detail-wrap img{
		display: block;
	}
	.marking_price_wrap {
		padding: 17px 25px 20px 25px;
		font-size: 10px;
		background-color: #fff;
	}	
	.marking_price_wrap .marking_price__title {
		position: relative;
		height: 10px;
		line-height: 10px;
		padding-left: 5px;
		margin-bottom: 6px;
		font-weight: bold;
		color: #000;
		vertical-align: baseline;
	}
	.marking_price_wrap .marking_price__content {
		padding-left: 5px;
		margin-bottom: 15px;
		color: #999;
	}
	.marking_price_wrap .marking_price__title::after {
		box-sizing: border-box;
		position: absolute;
		content: '';
		top: -2px;
		left: 0;
		width: 2px;
		height: 10px;
		border-left: 2px solid #000;
	}
	.video-js{
		width: 100%;
		height: 400px;
	}
</style>