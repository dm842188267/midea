import VueRouter from 'vue-router'
import index from '../component/index.vue'
import search from '../component/search.vue'
import commodities from '../component/commodities.vue'
import home from '../component/index/home.vue'
import classify from '../component/index/classify.vue'
import activity from '../component/index/activity.vue'
import shopcar from '../component/index/shopcar.vue'
import my from '../component/index/my.vue'
import air from '../component/index/classify/air.vue'
import wash from '../component/index/classify/wash.vue'
import bigapp from '../component/index/classify/bigapp.vue'
import smallapp from '../component/index/classify/smallapp.vue'
import acc from '../component/index/classify/acc.vue'
import hot from '../component/index/classify/hot.vue'
import fridges from '../component/index/classify/fridges.vue'
import houseapp from '../component/index/classify/houseapp.vue'

export default new VueRouter({
	routes:[
		{
			path:'/index',
			component:index,
			children:[
				{
					path:'/home',
					component:home
				},
				{
					path:'/classify',
					component:classify
				},
				{
					path:'/my',
					component:my
				},
				{
					path:'/air',
					component:air,
				},
				{
					path:'/bigapp',
					component:bigapp,
				},
				{
					path:'/smallapp',
					component:smallapp,
				},
				{
					path:'/acc',
					component:acc,
				},
				{
					path:'/wash',
					component:wash,
				},
				{
					path:'/hot',
					component:hot,
				},
				{
					path:'/fridges',
					component:fridges,
				},
				{
					path:'/houseapp',
					component:houseapp,
				}
			],
			path:'/',
			redirect:'/home'
		},
		{
			path:'/shopcar',
			component:shopcar
		},
		{
			path:'/activity',
			component:activity
		},
		{
			path:'/search',
			component:search
		},
		{
			path:'/commodities',
			component:commodities
		}
	]
})