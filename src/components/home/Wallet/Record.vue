<template>
    <div>
        <x-header @on-click-back="back" :left-options="{preventGoBack:true,backText:''}">记录</x-header>
        <div class="content">
            <div class="item-head">
                <div @click="selectType">类型&nbsp;<img src="../../../images/jl.png" style="width:0.1rem" alt=""></div>
                <div>对象</div>
                <div>金额</div>
                <div>时间</div>
            </div>
            <div style="border-radius:0.04rem;background:#fff;padding:0.05rem 0;">
                <div class="item-content" v-for="(item,key) in arr" :key="key" :style="key%2==0?'background:#fff':'background:rgba(100,170,253,0.04);'">
                    <div>买入</div>
                    <div>刘松</div>
                    <div>100.00</div>
                    <div>06-24 12:08</div>
                </div>
            </div>
        </div>
        <group>
            <popup-picker @on-change="change" :show.sync="showModel" :show-cell="false" title="TEST" :data="dataMenu" v-model="select"></popup-picker>
        </group>
    </div>
</template>

<script>
import {XTable,XHeader,PopupPicker,Group,Popup} from 'vux'
export default {
    data(){
        return{
            arr:[1,2,4,5,6,8,12,1],
            showModel:false,
            select:[],
            dataMenu:[['1','2','3']]
        }
    },
    methods:{
        selectType(){
            this.showModel = !this.showModel
        },
        change(){
            console.log(this.select)
        },
        back(){
            this.$router.push({path:'/wallet/wellet_01',query:{idx:1}})
        }
    },
    components:{
        XTable,
        XHeader,
        PopupPicker,
        Group,
        Popup,
    }
}
</script>

<style scoped>
.content{
    padding:0.1rem;
}
.item-head{
    background: #64AAFD;
    height:0.4rem;
    border-radius:0.04rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    color:#fff;
    font-size:0.15rem;
    margin-bottom:0.1rem;
}
.item-content{
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: right;
    height:0.35rem;
    font-size:0.12rem;
    background: #fff;
}

</style>
