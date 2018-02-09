<template>
    <div class="slideDown">
        <div class=""></div>
        <ul class="slideList">
            <li class="slideItem" v-for="money in moneyList" :key="money">{{money}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'SlideDown',
        data() { 
            return {
                moneyList:['所有金额','100万以下','100-500万','500-1000万','1000万以上']
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less" scoped>
    .slideDown{
        
    }
</style>


