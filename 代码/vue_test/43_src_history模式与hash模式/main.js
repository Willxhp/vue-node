//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'

//关闭Vue的生产提示
Vue.config.productionTip = false
//应用插件
Vue.use(VueRouter)

const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function(location) {
	return originPush.call(this, location).catch(err => err)
}
VueRouter.prototype.replace = function(location) {
	return originReplace.call(this, location).catch(err => err)
}

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	router:router
})
