<template>
	<div class="evaluate_wrap">
		<div v-for="(v,i) in list">
			<div class="evaluate-score">
				<h4>总体评分</h4>
				<div class="star-box">
					<div class="star-light"></div>
				</div>
			</div>
			<div class="evaluate-tag">
				<h4>用户印象</h4>
				<div class="tag-list">
					<span  v-for="(vv,ii) in v.taglist">{{vv.tag}}</span>
				</div>
			</div>
			<div class="evaluate-wrap">
				<h4>商品评价</h4>
				<div class="evaluate-list">
					<div class="evaluate-item" v-for="(d,m) in v.item">
						<div class="good-com">
							<div class="anonymous">
								<img :src="d.pic" alt="" width="32px" height="32px">
								<span class="comname">{{d.comname}}</span>
							</div>
							<div class="release-time">
								<span :class="d.class"></span>
								<span class="com-time">{{d.time}}</span>
							</div>
						</div>
						<p class="evaluate-comment">{{d.comment}}</p>
						<ul>
							<li v-for="(dpic,di) in d.compic"><img :src="dpic.pic" alt="" ></li>
						</ul>
						<p class="reply">{{d.reply}}</p>
						<div class="likes">
							<span class="like-icon"></span><span>{{d.like}}</span>
						</div>
					</div>
				</div>
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
    		this.$http.get('./data/evaluate.json')
    		  .then(function (response) {
    		    // console.log(response);
    			_this.list=response.data.Data;
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
	.evaluate_wrap{
		background: #fff;
		border-top:1px solid #eee ;
	}
	.evaluate-score{
		overflow: hidden;
		padding: 25px 15px 20px;
	}
	.evaluate_wrap h4{
		font-size: 14px;
		line-height: 14px;
		color: #000;
	}
	.star-box,.star-light{
		margin-top: 10px;
		height: 20px;
		width: 122px;
		background: url(../../../img/url(../../../img/detail_sprite_v2.png) 0 0 no-repeat;
		background-size: 130px auto;
		background-position: 0 -64px;
	}
	.star-light{
		max-width: 122px;
		background-position: 0 -40px;
	}
	.evaluate-tag{
		padding: 5px 15px 25px 15px;
		overflow: hidden;
		box-sizing: border-box;		
	}
	.tag-list span{
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
		margin: 10px 13px 0 0;
	}
	.evaluate-wrap{
		padding: 0 0 20px 0;
		background: #f5f5f5;
	}
	.evaluate-wrap h4{
		padding: 0 15px 10px;
		background: #fff;
	}
	.evaluate-item{
		background: #fff;
		border-top: 1px solid #f4f4f4;
		padding: 10px 15px 20px 15px;
		margin-bottom: 10px;
	}
	.anonymous{
		float: left;
		height: 32px;
	}
	.good-com{
		overflow: hidden;
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
	.evaluate-comment{
		font-size: 12px;
		clear: both;
		color: #747474;
		word-break: break-all;
		overflow: hidden;
		margin-top: 15px;
		margin-bottom: 5px;
	}
	.evaluate-item ul{
		overflow: hidden;
		width: 100%;
		margin-bottom: 10px;
	}
	.evaluate-item li {
		float: left;
		margin-right:4px;
	}
	.evaluate-item li img{
	    max-height: 55px;
		max-width: 55px;		
	}
	.reply {
		margin-bottom: 5px;
		word-break: break-all;
		color: #af824d;
		font-size: 14px;
	}
	.likes{
		font-size: 14px;
		color:#666;
		display: inline-block;
	    width: auto;
	    height: 23px;
	    border: 1px solid #e6e6e6;
	    line-height: 23px;
	    border-radius: 3px;
	    text-align: center;
	    padding: 0px 10px;
	}
	.like-icon{
		display: inline-block;
	    width: 15px;
	    height: 16px;
	    vertical-align: middle;
	    background: url(../../../img/detail_sprite_v2.png) 0 0 no-repeat;
    	background-size: 130px auto;
	    background-position: -58px -86px;
	    margin-top: -4px;
	    margin-right: 3px;
	}
</style>