<template>
    <div>
        <!-- <x-header :left-options="{backText: ''}">订单详情</x-header> -->
        <x-header :left-options="{backText: ''}">订单详情<a slot="right">帮助</a></x-header>
    </div>
</template>

<script>
import { XHeader,XButton  } from 'vux'
export default {
    data(){
        return{

        }
    },
    components: {
        XHeader,
        XButton 
    },
}
</script>

<style scoped>

</style>
