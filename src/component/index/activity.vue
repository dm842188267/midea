<template>
	<div>
		<div class="floor" v-for="(v,i) in Firstlist" :style="v.style1">
			<div :style="v.style2">
				<img :src="v.pic" alt="" :style="v.stylep">
			</div>
		</div>
		
		
		<div class="footer-activity"></div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				Firstlist:[],
			}
		},
		mounted(){
			var _this=this
			this.$http.get('./data/activity.json')
			  .then(function (response) {
			    // console.log(response);
				_this.Firstlist=response.data.Firstdata;
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
	.footer-activity{
		width: 100%;
		height: 36px;
		background: #0093D5;
		position: fixed;
		bottom:0;
	}
	.floor{
		position: relative;
		z-index: 2;
	}
	html{
		font-size: 37.5px;
	}
</style>