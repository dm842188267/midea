<template>
	<div>
		<router-view></router-view>
		<ul class="index">
			<li v-for="(v,i) in list">
				<router-link :to="v.address">
					<svg class="icon" aria-hidden="true">
					  <use :href="v.xhref"></use>
					</svg>
					<span>{{v.title}}</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			var a=this
			this.$http.get('./data/index.json')
			  .then(function (response) {
			    console.log(response);
			    a.list=response.data.data;			
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
	.index{
		background: #fff;
		width: 100%;
		overflow: hidden;
		position: fixed;
		bottom:0;
		border-top: 1px solid #eee;
	}
	.index li{
		float: left;
		width: 20%;
		text-align: center;
		margin-top: 5px;
	}
	li a{
		color:#999;
		font-size: 10px;
		line-height: 1.4;
	}
	.index .icon{
		display: block;
		margin: 0 auto;
		font-size: 20px;	
		line-height: 1;
	}
</style>