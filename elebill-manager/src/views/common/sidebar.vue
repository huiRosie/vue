<template>
    <!-- 侧边栏导航 -->
    <div class="indexLeft">
        <div class="indexSubBox">
            <div class="indexSub" ref="outSale" disabled>
                <h2 class="indexSubTitle">出票中心</h2>
            </div>
            <router-link class="indexSubNav" to="/out/sale/publishing">· 出售中的汇票</router-link>
            <router-link class="indexSubNav" to="/out/sale/ordering">· 我预选的报价</router-link>
            <router-link class="indexSubNav" to="/out/sale/finish">· 已完成的汇票</router-link>
        </div>
        <div class="indexSubBox">
            <div class="indexSub" ref="inCheck">
                <h2 class="indexSubTitle">收票中心</h2>
            </div>
            <router-link class="indexSubNav" to="/in/check/validating">· 待审核</router-link>
            <router-link class="indexSubNav" to="/in/check/validate_success">· 待处理</router-link>	
            <router-link class="indexSubNav" to="/in/check/success">· 交易成功</router-link>	
            <router-link class="indexSubNav" to="/in/check/failure">· 交易失败</router-link>	
        </div>
        <div class="indexSubBox">
            <div class="indexSub" ref="ident">
                <h2 class="indexSubTitle">认证审核</h2>
            </div>
            <router-link class="indexSubNav" to="/ident/pers">· 用户认证信息</router-link>
            <router-link class="indexSubNav" to="/ident/comp">· 企业认证信息</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sidebar',
    data() { 
        return {

        }
    },
    mounted:function(){
        this.sideLight();
    },
    methods: { 
    　　 //侧边栏高亮变化
        sideLight:function(){
            var self = this;
            //获得后缀路径
            var suffix = self.$route.path;
            // console.log(suffix);
            // 一级标题高亮
            if(suffix.indexOf('/out/sale')!=-1){
                self.$refs.outSale.style.color = '#fff'; 
                self.$refs.outSale.style.background = '#f71327';
            }else{
                self.$refs.outSale.style.color = '#555';
                self.$refs.outSale.style.background = '#fdeaea';
            }
            if(suffix.indexOf('/in/check')!=-1){
                self.$refs.inCheck.style.color = '#fff';
                self.$refs.inCheck.style.background = '#f71327';
            }else{
                self.$refs.inCheck.style.color = '#555';
                self.$refs.inCheck.style.background = '#fdeaea';
            }
            if(suffix.indexOf('/ident')!=-1){
                self.$refs.ident.style.color = '#fff';
                self.$refs.ident.style.background = '#f71327';
            }else{
                self.$refs.ident.style.color = '#555';
                self.$refs.ident.style.background = '#fdeaea';
            }
        }
    },
    watch:{
        '$route':'sideLight'
    }
}
</script>

<style>
    .indexLeft {
        width: 280px;
        height: 696px;
        float: left;
        margin-right: 18px;
        background: white;
    }

    .indexLeft .indexSub {
        width: 280px;
        height: 58px;
        padding: 18px 20px;
        background: #fdeaea;
    }

    .indexLeft .indexSub .indexSubTitle {
        width: 240px;
        height: 22px;
        line-height: 22px;
        font-size: 16px;
        font-weight: 500;
        text-indent: 10px;
        border-left: 5px solid #f71327;
    }

    .indexLeft .indexSub:hover {
        color: #fff;
        background: #f71327;
    }

    .indexLeft .indexSubActive {
        color: #fff;
        background: #f71327;
    }

    .indexLeft .indexSubNav {
        width: 280px;
        height: 58px;
        display: block;
        padding: 18px 40px;
    }

    .indexLeft .router-link-active {
        color: #f71327;
    }

</style>
