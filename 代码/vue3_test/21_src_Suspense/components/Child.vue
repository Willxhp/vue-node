<template>
	<div class="child">
		<h3>我是Child组件</h3>
		{{sum}}
	</div>
</template>

<script>
	import {ref} from 'vue'
	export default {
		name:'Child',
		async setup(){
			let sum = ref(0)
			// 如果使用了Suspence和异步组件，则setup()可以返回Promise实例
			let p = new Promise((resolve,reject)=>{
				setTimeout(()=>{
					resolve({sum})
				},1000)
			})
			return await p
			// return new Promise(() => {})
		}
	}
</script>

<style>
	.child{
		background-color: skyblue;
		padding: 10px;
	}
</style>