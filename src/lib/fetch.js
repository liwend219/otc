import axios from 'axios';

// 创建axios实例
const service = axios.create({
	method: 'post',
	timeout: 20000,
	headers:{
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		'X-Requested-With': 'XMLHttpRequest',
		'Accept':'application/json, text/javascript, */*; q=0.01'
	}
});


export default service;
