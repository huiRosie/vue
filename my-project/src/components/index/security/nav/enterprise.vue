<template>
    <div class="enterprise">
        <div class="enterpriseTitle">公司信息</div>
        <div class="enterpriseTop">
            <div class="licenseBox">
                <div class="licenseBox">
                    <img class="license front" src="/static/license.jpeg" @click="viewImg('/static/license.jpeg')" alt="">
                </div>
            </div>
            <ul class="infoList">
                <li class="infoItem">
                    <div class="infoItem_label">名&nbsp;&nbsp;  称：</div>
                    <div class="infoItem_text">武汉华伍贸易有限公司</div>
                </li>
                <li class="infoItem">
                    <div class="infoItem_label">类&nbsp;&nbsp;  型：</div>
                    <div class="infoItem_text">有限责任公司</div>
                </li>
                <li class="infoItem">
                    <div class="infoItem_label">住&nbsp;&nbsp;  所：</div>
                    <div class="infoItem_text">武汉市东湖高新技术开发区现代光谷世贸中心A座11楼8号</div>
                </li>
                <li class="infoItem">
                    <div class="infoItem_label">法&nbsp;&nbsp;  人：</div>
                    <div class="infoItem_text">张广雷 <span class="idcardBtn" @click="viewImg2('/static/idcardfront.jpeg','/static/idcardback.jpeg')">点击查看法人身份信息</span></div>
                </li>
                <li class="infoItem">
                    <div class="infoItem_label">注册资本：</div>
                    <div class="infoItem_text">伍拾万元整</div>
                </li>
                <li class="infoItem">
                    <div class="infoItem_label">成立日期：</div>
                    <div class="infoItem_text">2017年10月31日</div>
                </li>
                <li class="infoItem">
                    <div class="infoItem_label">营业期限：</div>
                    <div class="infoItem_text">长期</div>
                </li>
                <li class="infoItem">
                    <div class="infoItem_label">登记机关：</div>
                    <div class="infoItem_text">武汉工商行政管理局</div>
                </li>
            </ul>
        </div>
        <Modal 
            title="查看大图" 
            width='830' 
            ok-text='关闭' 
            cancel-text='' 
            v-model="visible">
            <img :src="imgName" v-if="visible" style="width:800px;">
        </Modal>
        <Modal 
            title= "查看大图" 
            width= '830' 
            ok-text= '关闭' 
            cancel-text= '' 
            v-model= "visible2">
            <Carousel
                :radius-dot= true 
                v-model="value2"
                autoplay 
                loop >
                <CarouselItem>
                    <div class="demo-carousel">
                        <img :src="imgName1" v-if="visible2" style="width:800px;">
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">
                        <img :src="imgName2" v-if="visible2" style="width:800px;">
                    </div>
                </CarouselItem>
            </Carousel>
            
            
        </Modal>
    </div>
</template>

<script>
    import globalData from '../../../globalData'

    export default {
        name: 'Enterprise',
        components:{

        },
        data () {
            return {
                visible:false,
                visible2:false,
                imgName:'',
                imgName1:'',
                imgName2:'',
                value2:0
            }
        },
        created:function(){
            
        },
        methods:{
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
    .enterprise {
        width: 1280px;
        height: auto;
        margin: 0 auto;
        background: #fff;
        padding:20px;
        img{
            cursor: pointer;
        }
        .enterpriseTitle{
            width: 100%;
            height: 70px;
            line-height: 70px;
            font-size: 16px;
            color: #000;
        }
        .enterpriseTop{
            width: 100%;
            height: 472px;
            padding: 20px 60px;
            .licenseBox{
                width:304px;
                height: 432px;
                float: left;
                margin-right: 130px;
                .licenseBox{
                    width: 100%;
                    height:432px;
                    .license{
                        width: 304px;
                        height:432px;
                    }
                }
            }
            .infoList{
                width: 600px;
                height: auto;
                margin:2px 0 0;
                float: left;
                .infoItem{
                    width: 100%;
                    height: 20px;
                    line-height: 20px;
                    margin-bottom: 16px;
                    .infoItem_label{
                        width: 100px;
                        float: left;
                        text-align:justify;
                        text-align-last:justify;
                    }
                    .infoItem_text{
                        float: left;
                    }
                    .idcardBtn{
                        color: red;
                        cursor: pointer;
                    }
                }
                .idcardBox{
                    width: 100%;
                    height: 214px;
                    display: none;
                    .idcard{
                        width: 284px;
                        height: 214px;
                        float: left;
                    }
                    .idcard:first-child{
                        margin-right: 100px;
                    }
                }
            }
        }
        .enterpriseBottom{
            width: 1130px;
            height: auto;
            .recordeBox{
                width: 100%;
                height: auto;
                margin:2px 0 0;
                .recordeTitle{
                    font-size: 18px;
                    width: 100%;
                    height: 79px;
                    line-height: 26px;
                    margin:0 auto ;
                    padding: 26px 0;
                    font-weight: 500;
                }
                .recordeBox{
                    width: 100%;
                    height: auto;
                    .recorde{
                        width:264px;
                        height: 155px;
                        margin:0 19px 20px 0;
                    }
                    .recorde:nth-child(4),.recorde:nth-child(8){
                        margin-right: 0;
                    }
                }
            }
        }
    }
</style>
