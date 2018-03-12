<template>
    <!-- 侧边栏导航 -->
    <div class="indexLeft">
        <div class="indexSubBox">
            <div class="indexSub" :class="{indexSubActive:isActive1}" ref="outSale" disabled>
                <h2 class="indexSubTitle">出票中心</h2>
            </div>
            <router-link class="indexSubNav" to="/out/sale/publishing">· 待交易</router-link>
            <router-link class="indexSubNav" to="/out/sale/ordering">· 交易中</router-link>
            <router-link class="indexSubNav" to="/out/sale/finish">· 交易完成</router-link>
        </div>
        <div class="indexSubBox">
            <div class="indexSub" :class="{indexSubActive:isActive2}" ref="inCheck">
                <h2 class="indexSubTitle">收票中心</h2>
            </div>
            <router-link class="indexSubNav" to="/in/check/validating">· 待审核</router-link>
            <router-link class="indexSubNav" to="/in/check/validate_success">· 待交易</router-link>	
            <router-link class="indexSubNav" to="/in/check/ording">· 交易中</router-link>	
            <router-link class="indexSubNav" to="/in/check/success">· 交易完成</router-link>	
        </div>
        <div class="indexSubBox">
            <div class="indexSub" :class="{indexSubActive:isActive3}" ref="ident">
                <h2 class="indexSubTitle">认证审核</h2>
            </div>
            <router-link class="indexSubNav" to="/ident/pers">· 用户认证信息</router-link>
            <router-link class="indexSubNav" to="/ident/comp">· 企业认证信息</router-link>
            <router-link class="indexSubNav" to="/ident/secu/">· 风投相册</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sidebar',
    data() { 
        return {
            isActive1:false,
            isActive2:false,
            isActive3:false,
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
                self.isActive1=true;
            }else{
                self.isActive1=false;
            }
            if(suffix.indexOf('/in/check')!=-1){
                self.isActive2=true;
            }else{
                self.isActive2=false;
            }
            if(suffix.indexOf('/ident')!=-1){
                self.isActive3=true;
            }else{
                self.isActive3=false;
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
        height: 754px;
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

    .indexLeft .indexSub:hover .indexSubTitle{
        border-left: 5px solid #fff;
    }

    .indexLeft .indexSubActive {
        color: #fff;
        background: #f71327;
    }

    .indexLeft .indexSubActive .indexSubTitle{
        border-left: 5px solid #fff;
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
