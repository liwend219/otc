import fetch from '../lib/fetch';
import Root from '../lib/root';
import qs from 'qs'
import axios from 'axios'
const http = Root.http
//发送验证码
export function sendMsg(val) {
    let datas = null;
    axios({
        method:"POST",
        url:http+'/ApiUser/LoginCode',
        data:qs.stringify({
            "Account":'18856225236'
        }),
    }).then(data =>{
        datas = data
    }).catch(err =>{
        console.log(err)
    })
    return datas
}

