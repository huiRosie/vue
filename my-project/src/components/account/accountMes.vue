<template>
    <div class="accountMes">
        <h2 class="accountMesTitle">消息中心</h2>
        <div class="accMesMain">
            <div class="accMesList">
                <a class="accMesItem" v-bind:class="{accMesItemRead:mesItem.messageContainerStatus=='read'}"  v-for="mesItem in mesList" :key="mesItem.messageContainerId" @click="readMesDet(mesItem.messageContainerId)">
                    <div class="accMesItem_dot"></div>
                    <div class="accMesItem_text">
                        {{mesItem.messageTitle}}
                    </div>
                    <div class="accMesItem_time">
                        {{mesItem.createDate}}
                    </div>
                </a>
            </div>
            <div class="page">
                <Page 
                ref="pages"
                class="pageBox" 
                :total="total" 
                v-if="total>8"
                :current="current"
                :pageSize="8"
                @on-change="getMesList"
                ></Page>
            </div>
        </div>
    </div>
</template>

<script>
import globalData from '../globalData'

export default {
    name: 'AccountMes',
    data () {
        return {
            mesList:[],
            total:0,
            current:1
        }
    },
    created:function(){
        this.getMesList(1)
    },
    methods:{
        // 调取接口，获取消息列表
        getMesList(current){
            var self = this;
            self.$http.get(globalData.data.Ip+'/user/message/page',{params:{
                pageSize:8,
                currentPage:current
            },credentials:true}).then(function(res){ 
                console.log(res);    
                if(res.data.code==555){
                    self.$router.push('/login');
                }
                self.mesList = res.data.data.recordList;                      
                self.total = res.data.data.totalCount;                    
            })
        },
        readMesDet:function(mesId){
            this.$router.push({name:'AccountMesDet',params:{mesId:mesId}})
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .pageBox {
        display: block;
        min-width: 128px;
        margin: 40px 20px;
        float: right;
    }

    .accountMes {
        width: 982px;
        height: auto;
    }

    .accountMes .accountMesTitle {
        width: 982;
        height: 58px;
        line-height: 58px;
        padding: 0 20px;
        border-bottom: 1px solid #eee;
    }

    .accountMes .accMesMain {
        width: 100%;
        height: auto;
    }

    .accountMes .accMesMain .accMesList {
        width: 100%;
        height: auto;
    }

    .accountMes .accMesMain .accMesList .accMesItem {
        display: block;
        width: 982px;
        height: 58px;
        line-height: 58px;
        padding: 0 20px;
        background: #fffbf6;
    }

    .accountMes .accMesMain .accMesList .accMesItem .accMesItem_dot {
        width: 6px;
        height: 6px;
        float: left;
        margin: 26px 5px 26px 0;
        border-radius: 3px;
        background: #f71327;
    }

    .accountMes .accMesMain .accMesList .accMesItem .accMesItem_text {
        float: left;
    }

    .accountMes .accMesMain .accMesList .accMesItem .accMesItem_time {
        float: right;
        color: #999;
        font-size: 12px;
    }

    .accountMes .accMesMain .accMesList .accMesItemRead {
        background: white;
    }

    .accountMes .accMesMain .accMesList .accMesItemRead .accMesItem_dot {
        background: #999;
    }
</style>
