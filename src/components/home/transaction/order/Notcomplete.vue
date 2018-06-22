<template>
    <div>
        <div class="content" style="margin-top:0.1rem">
            <div class="content-babel-buy">
                买
            </div>
            <div class="item2" style="font-size:0.1rem;color:#999999;text-align:center;margin-bottom:0.1rem">
                <!-- <div style="width:33%"></div> -->
                <div style="width:55%;text-align:right">2018-06-04 12:34:02</div>
                <div style="width:45%;font-size:0.12rem;color:#FF8833;text-align:right">待支付</div>
            </div>
            <div class="item2" style="font-size:0.12rem;margin-bottom:0.2rem">
                <div style="width:33%;font-size:0.14rem">6.49</div>
                <div style="width:33%;font-size:0.14rem">CNY</div>
                <div style="width:33%;font-size:0.14rem">1000</div>
                <div style="width:33%;color:#999999;font-size:0.1rem">数量</div>
                <div style="width:33%;color:#999999;font-size:0.1rem">6490.00</div>
                <div style="width:33%;color:#999999;font-size:0.1rem">总金额</div>
            </div>
            <div class="item3">
                <div>
                    <img src="../../../../images/sj@3x.png" class="icon" alt="">
                </div>
                <span style="font-size:0.12rem;color:#999999">
                    　剩余08'6"　
                </span>
                <div>
                    <x-button class="btn" mini type="primary">去支付</x-button>
                </div>
            </div>
        </div>
        <div class="content" style="margin-top:0.1rem">
            <div class="content-babel-sell">
                买
            </div>
            <div class="item2" style="font-size:0.1rem;color:#999999;text-align:center;margin-bottom:0.1rem">
                <!-- <div style="width:33%"></div> -->
                <div style="width:55%;text-align:right">2018-06-04 12:34:02</div>
                <div style="width:45%;font-size:0.12rem;color:#FF8833;text-align:right">等待对方支付</div>
            </div>
            <div class="item2" style="font-size:0.12rem;margin-bottom:0.2rem">
                <div style="width:33%;font-size:0.14rem">6.49</div>
                <div style="width:33%;font-size:0.14rem">CNY</div>
                <div style="width:33%;font-size:0.14rem">1000</div>
                <div style="width:33%;color:#999999;font-size:0.1rem">数量</div>
                <div style="width:33%;color:#999999;font-size:0.1rem">6490.00</div>
                <div style="width:33%;color:#999999;font-size:0.1rem">总金额</div>
            </div>
            <div class="item3">
                <div>
                    <img src="../../../../images/sj@3x.png" class="icon" alt="">
                </div>
                <span style="font-size:0.12rem;color:#999999">
                    　剩余08'6"　
                </span>
                <div>
                    <x-button class="btn" mini type="primary">查看详情</x-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { XButton } from 'vux'
export default {
    data(){
        return {

        }
    },
    components: {
        XButton
    }
}
</script>

<style scoped>
.icon1{
    position: absolute;
    right:1rem;
    bottom:0.08rem;
}
.icon{
    width:0.13rem;
    
}
.item{
    display: -webkit-flex; /* Safari */
    display: flex;
    justify-content: space-between;
    align-items:center;
}
.item2{
    display: -webkit-flex; /* Safari */
    display: flex;
    justify-content: space-between;
    align-items:center;
    flex-wrap:wrap;
}
.item3{
    display: -webkit-flex; /* Safari */
    display: flex;
    justify-content: flex-end;
    align-items:center;
    flex-wrap:wrap;
}
.btn{
    /* position: absolute; */
    /* right:0.1rem; */
    /* bottom:0.1rem; */
    width:0.8rem;
    padding:0;
    background:#64ABFF;
    font-size:0.1rem;
}
.content{
    position: relative;
    padding: 0.1rem;
    background: #fff;
    font-size:0.16rem;
}
.content-babel-buy{
    position: absolute;
    width:0.4rem;
    height:0.2rem;
    background: #2CB772;
    top:0;
    border-radius:0 0 0.05rem 0.05rem;
    text-align: center;
    font-size:0.12rem;
    color:#fff;
}
.content-babel-sell{
    position: absolute;
    width:0.4rem;
    height:0.2rem;
    background: #F03A59;
    top:0;
    border-radius:0 0 0.05rem 0.05rem;
    text-align: center;
    font-size:0.12rem;
    color:#fff;
}
.swidth-label{
    color:#D9D9D9;
    font-size:0.12rem;
    line-height:30px;
}
</style>
