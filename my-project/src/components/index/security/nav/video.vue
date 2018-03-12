<template>
    <div class="transfer">
        <div class="recordeBox">
            <div class="imgItemBox" v-for="(imgItem,index) in billImgList" :key="index" >
                <video controls="controls">
                    <source :src="imgItem.billImg" type="video/mp4">
                </video>
            </div>
        </div>
        <div class="page">
            <Page 
            ref="pages"
            class="pageBox" 
            :total="total" 
            v-if="total>10"
            :current="current"
            :pageSize="10"
            @on-change="getMesList"
            ></Page>
        </div>
        <Modal 
            title="查看大图" 
            width='830' 
            ok-text='关闭' 
            cancel-text='' 
            v-model="visible">
            <img :src="imgName" v-if="visible" style="width:800px;">
        </Modal>
    </div>
</template>

<script>
    import globalData from '../../../globalData'

    export default {
        name: 'Video',
        components:{

        },
        data () {
            return {
                visible:false,
                visible2:false,
                imgName:'',
                imgName1:'',
                imgName2:'',
                value2:0,
                billImgList:''
            }
        },
        created:function(){
            this.getImgList(1);
        },
        methods:{ 
            // 调取接口，获取消息列表
            getImgList(current){
                var self = this;
                self.$http.get(globalData.data.Ip+'/manager/billimg/list',{params:{
                    billImgCategory:'video',
                    pageSize:10,
                    currentPage:current
                },credentials:true}).then(function(res){ 
                    console.log(res);  
                    self.billImgList = res.data.data.recordList;  
                    if(res.data.code==555){
                        self.$router.push('/login');
                    }               
                })
            },
            viewImg:function(imgSrc){
                var  self = this;
                self.imgName = imgSrc;
                self.visible = true;
            },
            viewImg2:function(imgSrc1,imgSrc2){
                var  self = this;
                self.imgName1 = imgSrc1;
                self.imgName2 = imgSrc2;
                self.visible2 = true;
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .transfer {
        width: 1280px;
        height: auto;
        margin: 0 auto;
        background: #fff;
        padding:70px 40px;
        img{
            cursor: pointer;
        }
        .recordeBox{
            width: 100%;
            min-height: 500px;
            .imgItemBox{
                width:180px;
                height: 120px;
                float: left;
                margin:0 70px 70px 0;
                video{
                    width:180px;
                    height: 120px;
                }
            }
            .imgItemBox:nth-child(5),.imgItemBox:nth-child(10){
                margin-right: 0;
            }
        }
    }
</style>
