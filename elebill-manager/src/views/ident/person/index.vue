<template>
    <div class="identPers">
        <div class="topNav">
            <div class="topNavLeft">
                <span>认证审核</span> > 
                <span>用户认证信息</span>
            </div>
            <div class="topNavRight">
                <a class="topNavRightItem" v-for="(statusItem,index) in statusList" 
                    v-bind:class="{topNavRightItemActive:statusChoose==index}"
                    @click="getPerList(1,index,statusItem.eName)"
                    :key="statusItem.eName">{{statusItem.cName}}</a>
            </div>
        </div>
        <ul class="identPersMain">
            <li class="identPersItem identPersTitle">
                <div class="identPersItemNav identPersItemName">姓名</div>
                <div class="identPersItemNav identPersItemNickName">昵称</div>
                <div class="identPersItemNav identPersItemPhone">电话</div>
                <div class="identPersItemNav identPersItemEmail">邮箱</div>
                <div class="identPersItemNav identPersItemStatus">状态</div>
                <div class="identPersItemNav identPersItemOperate">操作</div>
            </li>
            <li class="identPersItem" v-for="personItem in personList" :key="personItem.userId">
                <div v-if="personItem.realName==null||personItem.realName==''" class="identPersItemNav identPersItemName">未填写</div>
                <div v-if="personItem.realName!=null&&personItem.realName!=''" class="identPersItemNav identPersItemName">{{personItem.realName}}</div>
                <div class="identPersItemNav identPersItemNickName">{{personItem.userName}}</div>
                <div class="identPersItemNav identPersItemPhone">{{personItem.userPhone}}</div>
                <div v-if="personItem.userEmail==null||personItem.userEmail==''" class="identPersItemNav identPersItemEmail">未填写</div>
                <div v-if="personItem.userEmail!=null&&personItem.userEmail!=''" class="identPersItemNav identPersItemEmail">{{personItem.userEmail}}</div>
                <div v-if="personItem.companyAuth=='unauth'" class="identPersItemNav identPersItemStatus">未认证</div>
                <div v-if="personItem.companyAuth=='authing'" class="identPersItemNav identPersItemStatus">待审核</div>
                <div v-if="personItem.companyAuth=='success'" class="identPersItemNav identPersItemStatus">认证成功</div>
                <div v-if="personItem.companyAuth=='failure'" class="identPersItemNav identPersItemStatus">认证失败</div>
                <div v-if="personItem.companyAuth==null" class="identPersItemNav identPersItemStatus">未认证</div>
                <div class="identPersItemNav identPersItemOperate">
                    <a v-if="personItem.companyAuth=='authing'" class="identPersItem_scan" @click="persCheck(personItem.userId)">立即审核</a>
                    <a v-else class="identPersItem_scan" @click="scanDetail(personItem.userId)">查看详情</a>
                </div>
            </li>
            <li v-if="personList.length==0" class="identPersItem">
                <div class="identPersItemNav identPersItemName">暂无数据</div>
            </li>
        </ul>
        <Page 
        ref="pages"
        class="pageBox" 
        :total="total" 
        v-if="total>8"
        :current="current"
        :pageSize="8"
        @on-change="getPerList"
        ></Page>
    </div>
</template>

<script>
import {identPerList} from '../../../assets/js/billApi'

export default {
    name: 'IdentPers',
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
            personList:[],
            total:0,
            current:1
        }
    },
    created:function(){
        this.getPerList(1,0);
    },
    methods:{
        getPerList:function(current,index,authStatus){
            var self = this;
            self.statusChoose = index;
            identPerList({
                authStatus:authStatus,
                currentPage:current,
                pageSize:8
            },{emulateJSON:true,credentials:true}).then(function(res){
                console.log(res)
                if(res.data.code==200){
                    self.personList = res.data.data.recordList;
                    self.total = res.data.data.totalCount;
                } 
            },function(error){
                console.log(error);  
            })
        },
        persCheck:function(userId){
            this.$router.push({name:'IdentPersCheck',params:{userId:userId}})
        },
        scanDetail:function(userId){
            this.$router.push({name:'IdentPersDet',params:{userId:userId}})
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .identPers {
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
        background: #f71327;
    }

    .topNavRight .topNavRightItem:hover{
        color: white;
        border: 0;
        background: #f71327;
    }

    .identPers .identPersMain {
        width: 100%;
        height: 100%;
    }

    .identPers .identPersMain .identPersItem {
        width: 982px;
        height: 58px;
        line-height: 30px;
        padding: 14px 0;
        margin-bottom: 2px;
        background: white;
    }

    .identPers .identPersMain .identPersItem .identPersItemNav {
        width: 163px;
        height: 30px;
        text-align: center;
        float: left;
    }

    .identPers .identPersMain .identPersItem .identPersItemOperate a {
        display: block;
        margin: 0 auto;
        width: 80px;
        height: 30px;
        line-height: 30px;
        border-radius: 4px;
        border: 1px solid #999;
    }

    .identPers .identPersMain .identPersItem .identPersItemOperate a:hover {
        color: #f71327;
        border: 1px solid #f71327;
    }

    .identPers .identPersMain .identPersTitle {
        font-size: 16px;
        background: #fdeaea;
    }
</style>
