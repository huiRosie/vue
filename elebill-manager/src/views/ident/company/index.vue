<template>
    <div class="identComp">
        <div class="topNav">
            <div class="topNavLeft">
                <span>认证审核</span> > 
                <span>企业认证信息</span>
            </div>
            <div class="topNavRight">
                <a class="topNavRightItem" v-for="(statusItem,index) in statusList" 
                    v-bind:class="{topNavRightItemActive:statusChoose==index}"
                    @click="getComList(1,index,statusItem.eName)"
                    :key="statusItem.eName">{{statusItem.cName}}</a>
            </div>
        </div>
        <ul class="identCompMain">
            <li class="identCompItem identCompTitle">
                <div class="identCompItemNav identCompItemName">姓名</div>
                <div class="identCompItemNav identCompItemNickName">昵称</div> 
                <div class="identCompItemNav identCompItemPhone">电话</div>
                <div class="identCompItemNav identCompItemEmail">企业名称</div>
                <div class="identCompItemNav identCompItemStatus">状态</div>
                <div class="identCompItemNav identCompItemOperate">操作</div>
            </li>
            <li class="identCompItem" v-for="companyItem in companyList" :key="companyItem.userId">
                <div v-if="companyItem.realName==null||companyItem.realName==''" class="identCompItemNav identCompItemName">未填写</div>
                <div v-if="companyItem.realName!=null" class="identCompItemNav identCompItemName">{{companyItem.realName}}</div>
                <div class="identCompItemNav identCompItemNickName">{{companyItem.userName}}</div>
                <div class="identCompItemNav identCompItemPhone">{{companyItem.userPhone}}</div>
                <div v-if="companyItem.blCompanyName==null||companyItem.blCompanyName==''" class="identCompItemNav identCompItemEmail">未填写</div>
                <div v-if="companyItem.blCompanyName!=null" class="identCompItemNav identCompItemEmail">{{companyItem.blCompanyName}}</div>
                <div v-if="companyItem.companyAuth=='unauth'||companyItem.companyAuth=='null'" class="identCompItemNav identCompItemStatus">未认证</div>
                <div v-if="companyItem.companyAuth=='authing'" class="identCompItemNav identCompItemStatus">待审核</div>
                <div v-if="companyItem.companyAuth=='success'" class="identCompItemNav identCompItemStatus">已认证</div>
                <div v-if="companyItem.companyAuth=='failure'" class="identCompItemNav identCompItemStatus">认证失败</div>
                <div v-if="companyItem.companyAuth==null" class="identCompItemNav identCompItemStatus">未认证</div>
                <div class="identCompItemNav identCompItemOperate">
                    <a v-if="companyItem.companyAuth=='authing'" class="identCompItem_scan" @click="checkInfo(companyItem.userId)">立即审核</a>
                    <a v-else class="identCompItem_scan" @click="scanDetail(companyItem.userId)">查看详情</a>
                </div>
            </li>
            <li v-if="companyList.length==0" class="identCompItem">
                <div class="identCompItemNav identCompItemName">暂无数据</div>
            </li>
        </ul>
        <Page 
        ref="pages"
        class="pageBox" 
        :total="total" 
        v-if="total>9"
        :current="current"
        :pageSize="9"
        @on-change="getComList"
        ></Page>
    </div>
</template>

<script>
import {identComList} from '../../../assets/js/billApi'

export default {
    name: 'identComp',
    data () {
        return {
            statusChoose:0,
            statusList:[
                {
                    cName:'全部',
                    eName:''
                },
                {
                    cName:'待审核',
                    eName:'authing'
                },
                {
                    cName:'未认证',
                    eName:'unauth'
                },
                {
                    cName:'认证成功',
                    eName:'success'
                },
                {
                    cName:'认证失败',
                    eName:'failure'
                }
            ],
            companyList:[],
            total:'',
            current:1
        }
    },
    created:function(){
        this.getComList(1,0);
    },
    methods:{
        getComList:function(current,index,authStatus){
            var self = this;
            self.statusChoose = index;
            identComList({
                authStatus:authStatus,
                currentPage:current,
                pageSize:9
            },{emulateJSON:true,credentials:true}).then(function(res){
                console.log(res)
                if(res.data.code==200){
                    self.companyList = res.data.data.recordList;
                    self.total = res.data.data.totalCount;
                } 
            },function(error){
                console.log(error);  
            })
        },
        checkInfo:function(userId){
            this.$router.push({name:'IdentCompCheck',params:{userId:userId}})
        },
        scanDetail:function(userId){
            this.$router.push({name:'IdentCompDet',params:{userId:userId}})
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .pageBox {
        display: block;
        min-width: 128px;
        padding-bottom: 30px;
        margin:40px 20px;
        float: right;
    }

    .identComp {
        width: 982px;
        height: auto;
    }

    .topNav{
        width: 100%;
        height: 58px;
        line-height: 30px;
        padding: 14px 30px;
        background: white;
    }

    .topNavLeft{
        width:200px;
        float: left;
    }

    .topNavRight{
        float: right;
    }

    .topNavRight .topNavRightItem{
        float: left;
        width: 60px;
        height: 30px;
        display: block;
        line-height: 30px;
        border: 1px solid #999;
        border-radius: 4px;
        text-align: center;
        margin-left: 10px;
        cursor: pointer;
    }

    .topNavRight .topNavRightItemActive{
        color: white;
        border: 0;
        line-height: 32px;
        background: #f71327;
    }

    .topNavRight .topNavRightItem:hover{
        color: white;
        border: 0;
        line-height: 32px;
        background: #f71327;
    }

    .identComp .identCompMain {
        width: 100%;
        height: 100%;
    }

    .identComp .identCompMain .identCompItem {
        width: 982px;
        height: 58px;
        line-height: 30px;
        padding: 14px 0;
        border-bottom: 1px solid #eee;
    }

    .identComp .identCompMain .identCompItem .identCompItemNav {
        width: 163px;
        height: 30px;
        text-align: center;
        float: left;
    }

    .identComp .identCompMain .identCompItem .identCompItemNav:nth-child(3) {
        width: 180px;
    }

    .identComp .identCompMain .identCompItem .identCompItemNav:nth-child(4) {
        width: 193px;
    }

    .identComp .identCompMain .identCompItem .identCompItemNav:last-child {
        width: 120px;
    }

    .identComp .identCompMain .identCompItem .identCompItemOperate a {
        display: block;
        margin: 0 auto;
        width: 80px;
        height: 30px;
        line-height: 30px;
        border-radius: 4px;
        border: 1px solid #999;
    }

    .identComp .identCompMain .identCompItem .identCompItemOperate a:hover {
        color: #f71327;
        border: 1px solid #f71327;
    }

    .identComp .identCompMain .identCompTitle {
        font-size: 16px;
        background: #fdeaea;
        color: #333;
    }
</style>
