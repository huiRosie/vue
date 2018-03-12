<template>
    <div class="account">
        <div class="accountMain">
            <div class="accountLeft">
                <div class="accountSubBox">
                    <div class="accountSub" :class="{accountSubActive:isActive1}" ref="pub">
                        <h2 class="accountSubTitle">我的发布</h2>
                    </div>
                    <router-link class="accountSubNav" to="/acc/mypub/accAnn/ontrade">· 待交易</router-link>
                    <router-link class="accountSubNav" ref="pubing" to="/acc/mypub/accAnn/trading">· 交易中</router-link>
                    <router-link class="accountSubNav" to="/acc/mypub/accAnn/success">· 交易完成</router-link>
                </div>
                <div class="accountSubBox">
                    <div class="accountSub" :class="{accountSubActive:isActive2}" ref="buy">
                        <h2 class="accountSubTitle">我的收票</h2>
                    </div>
                    <router-link class="accountSubNav" to="/acc/buy/accBuy/quote">· 我的竞价</router-link>
                    <router-link class="accountSubNav" to="/acc/buy/accBuy/run">· 交易中</router-link>
                    <router-link class="accountSubNav" to="/acc/buy/accBuy/success">· 交易完成</router-link>	
                </div>
                <div class="accountSubBox">
                    <div class="accountSub" :class="{accountSubActive:isActive3}" ref="set">
                        <h2 class="accountSubTitle">账户设置</h2>
                    </div>
                    <router-link class="accountSubNav" to="/acc/set/accInfo">· 账户信息</router-link>
                    <router-link class="accountSubNav" to="/acc/set/accMes">· 消息中心</router-link>
                    <router-link class="accountSubNav" to="/acc/set/changePass">· 修改密码</router-link>
                </div>
            </div>
            <div class="accountRight">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import globalData from '../../../globalData'

export default {
    name: 'Account',
    data () {
        return {
            isActive1:false,
            isActive2:false,
            isActive3:false
        }
    },
    mounted:function(){
        this.subLight();
    },
    methods:{
        // 侧边栏高亮
        subLight:function(){
            var self = this;
            // 获取路径后缀
            var suffix = this.$route.path;
            //首次进入
            if(suffix.length==4&&suffix=='/acc'){
                suffix = '/acc/set/accInfo';
            }

            // console.log(suffix);
            // 一级标题高亮
            if(suffix.indexOf('mypub')!=-1){
                self.isActive1 = true
            }else{
                self.isActive1 = false
            }
            if(suffix.indexOf('buy')!=-1){
                self.isActive2 = true
            }else{
                self.isActive2 = false
            }
            if(suffix.indexOf('set')!=-1){
                self.isActive3 = true
            }else{
                self.isActive3 = false
            }
        },
        getOfferList:function(current,billStatus){
            var self = this;
            console.log(billStatus)
            console.log(current)
            //调用接口  获取竞价汇票列表
            self.$http.post(globalData.data.Ip+'/bill/page',{params:{
                currentPage:current,
                pageSize:8,
                isCurrentUser:true,
                billStatus:self.billStatus
            },credentials:true}).then(function(res){ 
                console.log(res);     
                self.billList = res.data.data.recordList;      
                self.total = res.data.data.totalCount;
            });
        }
    },
    watch:{
        "$route": "subLight",

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .account {
        width: 100%;
        height: auto;
        background: #f1f1f1;
        padding: 24px 0;
    }

    .account .accountMain {
        width: 1280px;
        margin: 0 auto;
        height: auto;
        overflow: hidden;
    }

    .account .accountMain .accountLeft {
        width: 280px;
        height: 696px;
        float: left;
        margin-right: 18px;
        background: white;
    }

    .account .accountMain .accountLeft .accountSub {
        width: 280px;
        height: 58px;
        padding: 18px 20px;
        background: #fdeaea;
    }

    .account .accountMain .accountLeft .accountSub .accountSubTitle {
        width: 240px;
        height: 22px;
        line-height: 22px;
        font-size: 16px;
        font-weight: 500;
        text-indent: 10px;
        border-left: 5px solid #f71327;
    }

    .account .accountMain .accountLeft .accountSub:hover {
        color: #fff;
        background: #f71327;
    }

    .account .accountMain .accountLeft .accountSubActive {
        color: #fff;
        background: #f71327;
    }

    .account .accountMain .accountLeft .accountSubActive .accountSubTitle{
        border-left: 5px solid #fff;
    }

    .account .accountMain .accountLeft .accountSub:hover .accountSubTitle{
        border-left: 5px solid #fff;
    }

    .account .accountMain .accountLeft .accountSubNav {
        width: 280px;
        height: 58px;
        display: block;
        padding: 18px 40px;
    }

    .account .accountMain .accountLeft .router-link-active {
        color: #f71327;
    }

    .account .accountMain .accountRight {
        width: 982px;
        height: 696px;
        float: left;
        background: #fff;
    }
</style>
