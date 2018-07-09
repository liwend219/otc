<template>
	<div class="body">
		<x-header :left-options="{backText: ''}">最近提现记录</x-header>
		<div id="body">
			<div class="list">
				<ul>
					<li v-for="(item,key) in datas" :key="key"><span>1230</span><span id="time">2018-06-04 12:02:34</span></li>
					<!-- <li><span>1230</span><span id="time">2018-06-04 12:02:34</span></li>
					<li><span>1230</span><span id="time">2018-06-04 12:02:34</span></li>
					<li><span>1230</span><span id="time">2018-06-04 12:02:34</span></li>
					<li><span>1230</span><span id="time">2018-06-04 12:02:34</span></li> -->
				</ul>
			</div>
			
			</div>
	</div>
</template>

<script>
	import {XHeader} from 'vux'
	import axios from 'axios'
	import qs from 'qs'
	export default {
		data() {
            return{
				datas:"",
            }
		},
		mounted() {
			axios({
				method:"POST",
				url:'http://139.196.178.5:8010/ApiUser/GetPutCase',
				data:qs.stringify({
					"UserID":sessionStorage.getItem('UserID'),
					"CID":sessionStorage.getItem('CID'),
				}),
				}).then(data =>{
					console.log(data)
					if(data.data.rs){
						this.datas = data.data.datas
					}
				}).catch(err =>{
					console.log(err)
				})
		},
        methods:{
        	
        },
        //注册组件
    components: {
        XHeader
    }
	}
</script>

<style scoped>
	.body{
	width: 100%;
	height: 100vh;
}
#body{
	padding: 0 0.1rem;
}
.list{
	width: 100%;
	margin-top: 0.1rem;
}
.list ul li {
	background: #FFFFFF;
	width: 100%;
	height: 0.4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 0.1rem;
}
.list ul li span{
	font-size: 0.14rem;
	color: #323232;
}
.list ul li #time{
	font-size: 0.12rem;
	color: #999999;
}
</style>