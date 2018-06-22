<template>
	<div class="body">
		<div id="body">
			
		
       <div class="header">
       		<img src="../images/登录_关闭@2x.png" class="picone"/>
       </div>
       <p class="Log"><span id="login_font">登录</span></p>
			<p class="welcome">欢迎登陆OTC钱包</p>
			<div class="inpt_1">
				<span id="font_ph">+86</span>
				<input type="number" placeholder="请输入手机号"/>
			</div>
			<div class="inpt_2">
				<input type="number" placeholder="请输入验证码"/>
				<span id="font_ph">发送验证码</span>
			</div>
			 <x-button class="submit">登录</x-button>
		</div>
	</div>
	
</template>

<script>
	import { XInput,XButton } from 'vux'
	export default {
		data() {
            return{
            	
            }
		},
		mounted() {

		},
        methods:{
        	
        },
        //注册组件
    components: {
        XInput,
        XButton
    }
	}
</script>

<style scoped>

.body{
	background: #75B4FF;
	width: 100%;
	height: 100vh;
}
#body{
	padding: 0 0.2rem;
}
.header{
	width: 100%;
	height: 0.7rem;
	line-height: 0;
}
.picone{
	margin-top: 0.2rem;
	width: 0.2rem;
	height: 0.2rem;
}
.Log{
	width: 100%;
	height: 0.5rem;
	font-family: PingFangSC-Semibold;
	font-size: 0.3rem;
	color: #FFFFFF;
	/*margin-top: 0.3rem;*/
	line-height: 0.5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.welcome{
	font-family: PingFang-SC-Medium;
	font-size: 0.14rem;
	color: #D4E6FA;
	
}
.inpt_1{
	margin-top: 0.9rem;
	width: 100%;
	height: 0.5rem;
	border-bottom: 0.01rem solid #D4E6FA;
	line-height:0;
	display: flex;
	align-items: center
}
.inpt_1 #font_ph{
	color: #FFFFFF;
	font-size: 0.2rem;
	height: 0.5rem;
	line-height: 0.47rem;
}
.inpt_1 input{
	height: 0.48rem;
	border: 0px;
	outline: none;
	width: 80%;
	background: #75B4FF;
	margin-left: 3%;
	font-size: 0.2rem;
	color: #D4E6FA;
}
input::input-placeholder{color:#D4E6FA!important;} 

input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { 
color: #D4E6FA!important; 
} 
input:-moz-placeholder, textarea:-moz-placeholder { 
color: #D4E6FA!important; 
} 
input::-moz-placeholder, textarea::-moz-placeholder { 
color: #D4E6FA!important; 
} 
input:-ms-input-placeholder, textarea:-ms-input-placeholder { 
color: #D4E6FA!important; 
} 
.inpt_2{
	margin-top: 0.1rem;
	width: 100%;
	height: 0.5rem;
	border-bottom: 0.01rem solid #D4E6FA;
	line-height:0;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.inpt_2 #font_ph{
	color: #FFFFFF;
	font-size: 0.2rem;
	height: 0.5rem;
	line-height: 0.47rem;
	width:30%;
	text-align: right;
}
.inpt_2 input{
	height: 0.48rem;
	border: 0px;
	outline: none;
	width: 63%;
	background: #75B4FF;
	font-size: 0.2rem;
	color: #D4E6FA;
}
.submit{
	margin-top: 1rem;
	background: #FFFFFF;
	color: #75B4FF;
}
</style>