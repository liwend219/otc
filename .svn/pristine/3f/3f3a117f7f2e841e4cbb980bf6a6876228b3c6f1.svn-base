<template>
	<div class="body">
		<!--head-->
		<div>
		<x-header :left-options="{backText: ''}">{{datas}}</x-header>
		</div>
	<div id="body">
		<div class="list">
			<ul>
				<li><span>姓名:</span><input type="" name="" id="" value="" placeholder="请输入真实姓名"/></li>
				<li><span>身份证号码:</span><input type="" name="" id="" value="" placeholder="请输入真实姓名"/></li>
			</ul>
			<div class="pic">
				<div class="p1">
					<img src="../../../images/身份证正面@2x.png"/>
					<input type="file" accept="image/gif, image/jpg, image/bmp, image/png,image/jpeg" id="img1"/>
				</div>
				<div class="p2">
					<img src="../../../images/身份证反面@2x.png"/>
					<input type="file" accept="image/gif, image/jpg, image/bmp, image/png,image/jpeg" id="img2"/>
				</div>
			</div>
		</div>
		
	</div>
	</div>
	
	
</template>

<script>
	//引入组件
import { XHeader} from 'vux'
		export default{
		  data (){
        return {
            datas:'身份认证',
            demo01:0,
        }
    },
    //初始化
    mounted(){

    },
    methods:{
        
    },
    //注册组件
    components: {
        XHeader
    }
	}
</script>

<style>
.body{
	/*background: #75B4FF;*/
	width: 100%;
	/*height: calc(100vh-50);*/
	height: 100vh;
}
#body{
	width: 100%;
	padding: 0 0.1rem;
	margin-top: 0.1rem;
	background: #FAFAFA;
}
.list{
	width: 100%;
	padding: 0 0.1rem;
	background: #FFFFFF;
}
.list ul{
	list-style: none;
}
.list ul li{
	font-size: 0.14rem;
	height: 0.4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.list ul li input{
	width: 65%;
	height: 0.39rem;
	border: none;
	outline: none;
}
.pic{
	margin-top: 0.12rem;
	width: 100%;
	height: 0.86rem;
	/*background: #323232;*/
	display: flex;
	justify-content: space-between;
	
/*	padding: 0.1rem;*/
}
.pic div{
	width: 48%;
	height: 0.86rem;
	/*background: #2CB772;*/
	position: relative;
} 
#img1, #img2 {
   width: 100%;
   height: 0.86rem;
}
.pic div input {
    position: absolute;
    right: 0;
    top: 0;
    opacity: 0;
}
.p1 img{
	width: 100%;
   	height: 0.86rem;
    position: absolute;
}
.p2 img{
	width: 100%;
   	height: 0.86rem;
    position: absolute;
}
</style>