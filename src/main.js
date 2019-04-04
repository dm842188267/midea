import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Video from '../node_modules/video.js/dist/video.js' 
import '../node_modules/video.js/dist/video-js.css'
Vue.prototype.$video = Video

Vue.use(VueRouter)
import router from './js/router.js'
import './js/iconfont.js'
import './js/iconfont1.js'
import './js/iconfont2.js'
import './js/myiconfont.js'
import '../node_modules/swiper/dist/css/swiper.min.css'

import { Header,Button,Swipe, SwipeItem } from 'mint-ui';
import '../node_modules/mint-ui/lib/style.min.css'
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import axios from 'axios';
Vue.prototype.$http = axios

import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state,n) {
      state.count=n;
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App),
	router,
	store
})
