<template>
    <div class="accountMesDet">
        <h2 class="accMesDetTitle">
            <router-link to="/acc/set/accMes" >消息中心</router-link> >
            <span >消息详情</span>
        </h2>
        <div class="accMesDetMain">
            <div class="accMesDetMainTitle">
                <div class="accMesDetItem_dot"></div>
                <div class="accMesDetItem_text">
                    {{mesInfo.messageTitle}}
                </div>
                <div class="accMesDetItem_time">
                    {{mesInfo.createDate}}
                </div>
            </div>
            <div class="accMesDetMainDet">
                {{mesInfo.messageContent}}
            </div>
        </div>
    </div>
</template>

<script>
import globalData from '../../../globalData'

export default {
    name: 'AccountMesDet',
    data () {
        return {
            mesInfo:'',
            mesId:''
        }
    },
    created:function(){
        this.getMesDet();
    },
    methods:{
        getMesDet:function(){
            var self = this;
            self.mesId = self.$route.params.mesId;
            console.log(self.mesId)
            self.$http.get(globalData.data.Ip+'/user/message/info',{params:{
                messageContainerId:self.mesId
            },credentials:true}).then(function(res){ 
                console.log(res);   
                self.mesInfo = res.data.data;                     
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .accountMesDet {
        width: 982px;
        height: auto;
    }

    .accountMesDet .accMesDetTitle {
        width: 982;
        height: 58px;
        line-height: 58px;
        padding: 0 20px;
        border-bottom: 1px solid #eee;
    }

    .accountMesDet .accMesDetMain {
        width: 100%;
        height: auto;
    }

    .accountMesDet .accMesDetMain .accMesDetMainTitle {
        display: block;
        width: 982px;
        height: 58px;
        line-height: 58px;
        padding: 0 20px;
    }

    .accountMesDet .accMesDetMain .accMesDetMainTitle .accMesDetItem_dot {
        width: 6px;
        height: 6px;
        float: left;
        margin: 26px 5px 26px 0;
        border-radius: 3px;
        background: #f71327;
    }

    .accountMesDet .accMesDetMain .accMesDetMainTitle .accMesDetItem_text {
        float: left;
    }

    .accountMesDet .accMesDetMain .accMesDetMainTitle .accMesDetItem_time {
        float: right;
        color: #999;
        font-size: 12px;
    }

    .accountMesDet .accMesDetMain .accMesDetMainDet {
        padding: 0 39px 39px;
        line-height: 20px;
    }
</style>
