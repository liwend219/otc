<template>
    <div style="font-size:0.16rem">
        <div class="item">
            <!-- <span>正在接单　</span><x-switch title="" style="height：20px" v-model="value"></x-switch> -->
        </div>
        <div class="content" style="margin-top:0.1rem">
            <div class="content-babel-buy">
                买
            </div>
            <div class="item2" style="font-size:0.1rem;color:#999999;text-align:center;margin-bottom:0.1rem">
                <div style="width:33%"></div>
                <div style="width:33%">2018-06-04 12:34:02</div>
                <div style="width:33%;font-size:0.12rem;color:#2CB772;text-align:right">接单中</div>
            </div>
            <div class="item2" style="font-size:0.12rem;text-align:center;margin-bottom:0.4rem">
                <div style="width:25%;color:#999999;">委托价格</div>
                <div style="width:25%;">6.50</div>
                <div style="width:25%;color:#999999;">委托数量</div>
                <div style="width:25%;">400.00</div>
                <div style="width:25%;color:#999999;">成交均价</div>
                <div style="width:25%;">0.00</div>
                <div style="width:25%;color:#999999;">已成交量</div>
                <div style="width:25%;">0.00</div>
            </div>
            <div class="btn">
                <x-button mini style="color:#D9D9D9">撤销</x-button>
            </div>
        </div>
        <div class="content" style="margin-top:0.1rem">
            <div class="content-babel-sell">
                卖
            </div>
            <div class="item2" style="font-size:0.1rem;color:#999999;text-align:center;margin-bottom:0.1rem">
                <div style="width:33%"></div>
                <div style="width:33%">2018-06-04 12:34:02</div>
                <div style="width:33%;font-size:0.12rem;color:#2CB772;text-align:right">接单中</div>
            </div>
            <div class="item2" style="font-size:0.12rem;text-align:center;margin-bottom:0.4rem">
                <div style="width:25%;color:#999999;">委托价格</div>
                <div style="width:25%;">6.50</div>
                <div style="width:25%;color:#999999;">委托数量</div>
                <div style="width:25%;">400.00</div>
                <div style="width:25%;color:#999999;">成交均价</div>
                <div style="width:25%;">0.00</div>
                <div style="width:25%;color:#999999;">已成交量</div>
                <div style="width:25%;">0.00</div>
            </div>
            <div class="btn">
                <x-button mini style="color:#D9D9D9">撤销</x-button>
            </div>
        </div>
    </div>
</template>

<script>
import { XSwitch,Group,XButton  } from 'vux'
export default {
    data(){
        return{
            value:true,
        }
    },
    mounted(){
        // document.getElementsByClassName('weui-switch')[0].style.width="45px"
        // document.getElementsByClassName('weui-switch-cp__box')[0].style.width="43px"
    },
    components:{
        XSwitch,
        Group,
        XButton
    }
}
</script>

<style scoped>
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
.btn{
    position: absolute;
    right:0.1rem;
    bottom:0.1rem
}
.content{
    position: relative;
    padding: 0.1rem;
    background: #fff;
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
.weui-switch:before, .weui-switch-cp__box:before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 43px !important;
    height: 23px;
    border-radius: 15px;
    background-color: #FDFDFD;
    -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
    transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
    transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
    transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1), -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
}
</style>
