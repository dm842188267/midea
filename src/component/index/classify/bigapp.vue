<template>
	<div class="classify-con">
		<router-link to="/" class="classify-top">
			<img src="../../../../img/400d71b28b8b.webp" width="100%">
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
				_this.list=response.data.Bighotcategory;
				_this.list1=response.data.Bighotitem;
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