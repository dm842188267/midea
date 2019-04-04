<template>
	<div>
		<header><h1>商品分类</h1></header>
		<div class="main-wrap">
			<div class="classify-wrap">
				<div class="sidebar">
					<div :to="v.link" v-for="(v,i) in list" @click="change(i)" :class="{'color': i == color}">
						<div class="classify-list">
							<svg class="icon" aria-hidden="true">
								<use :href="v.icon"></use>
							</svg>
							{{v.title}}
						</div>
					</div>
				</div>
				<!-- <router-view></router-view> -->
				<component :is='msg'></component>
			</div>			
		</div>
	</div>
</template>
<script>
	import air from './classify/air.vue'
	import bigapp from './classify/bigapp.vue'
	import houseapp from './classify/houseapp.vue'
	import smallapp from './classify/smallapp.vue'
	import hot from './classify/hot.vue'
	import acc from './classify/acc.vue'
	import fridges from './classify/fridges.vue'
	import wash from './classify/wash.vue'
	export default{
		data(){
			return{
				color:0,
				// list:localStorage.getItem("list"),
				list:[],
				msg:'air'
			}
		},
		mounted(){
			var arr=['air','fridges','wash','smallapp','bigapp','houseapp','hot','acc'];

			var _this=this
			this.$http.get('./data/classify.json')
			  .then(function (response) {
			    // console.log(response);				
				_this.list=response.data.data;
				// console.log(_this.list)
				_this.color=_this.$store.state.count;
				_this.msg=arr[_this.$store.state.count];
				// console.log(_this.msg);
				// $store.state.count=response.data.data;
				// localStorage.setItem("list",response.data.data);
				console.log(_this.$store.state.count)
				console.log(arr[_this.$store.state.count])
			  })
			  .catch(function (error) {
			    console.log(error);
			  })
			  .then(function () {
			    // always executed
			})
		},
		methods:{
			change(i){
				this.msg=this.list[i].link
				this.color =i
			}
		},
		components:{
			'air':air,
			'bigapp':bigapp,
			'smallapp':smallapp,
			'wash':wash,
			'hot':hot,
			'houseapp':houseapp,
			'acc':acc,
			'fridges':fridges		
		}
	}
</script>
<style>
	.color{
		color:#0093d5;
	}
	header{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 44px;
		background: #fff;
		box-sizing: border-box;
		border-bottom: 1px solid #eee;
		text-align: center;
		z-index: 28;
	}
	header h1{
		font-size: 18px;
    	line-height: 44px;
   		 color: #0093d5;	
   		 font-weight: normal;
	}
	.main-wrap{
		margin: 44px auto 0 auto;
    	max-width: 1424px;
	}
	.classify-wrap{
		height: 100%;
	}
	.sidebar{
		width: 81px;
		position: fixed;
		top: 44px;
		left: 0;
		height: 100%;
		background-color: #f4f4f4;		
	}
	.sidebar{
		color:#666
	}
	.classify-list{
		font-size: 12px;
		width: 80px;
	    height: 80px;
	    border-bottom: 1px solid #e3e3e3;
	    border-right: 1px solid #e3e3e3;
	    text-align: center;
	}
	.classify-list svg{
		margin: 0 auto;
		display: block;
		font-size: 20px;
		padding: 18px 0 10px 0;
	}
	.sidebar>div:last-child .classify-list{
		 border-bottom:none;
	}
</style>