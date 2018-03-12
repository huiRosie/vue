<template>
    <div class="securityBox">
        <div class="security">
            <div class="securityTitle">
                风控中心
            </div>
            <div class="securityNav">
                <router-link class="securityNavItem" to="/bill/security/endorse">背书记录</router-link>
                <router-link class="securityNavItem" to="/bill/security/transfer">转账记录</router-link>
                <router-link class="securityNavItem" to="/bill/security/partner">优质企业合作</router-link>
                <router-link class="securityNavItem" to="/bill/security/video">财务视频</router-link>
                <router-link class="securityNavItem" to="/bill/security/enterprise">企业信息</router-link>
            </div>
            <div class="securityContent">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import globalData from '../../globalData'

    export default {
        name: 'Security',
        components:{

        },
        data () {
            return {
                visible:false,
                imgName:''
            }
        },
        created:function(){
            
        },
        methods:{
            
            
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.securityBox{
    width: 1280px;
    height: auto;
    margin: 0 auto;
    padding: 20px 0;
    .security {
        width: 1280px;
        height: auto;
        margin: 0 auto;
        background: #fff;
        img{
            cursor: pointer;
        }
        .securityTitle{
            width: 100%;
            height: 50px;
            line-height: 50px;
            font-size: 16px;
            color: #000;
            padding: 0 20px;
            border-bottom: 1px solid #eee;
        }
        .securityNav{
            width: 100%;
            height: 44px;
            line-height: 44px;
            padding: 0 20px;
            overflow: hidden;
            .securityNavItem{
                width: 100px;
                height: 44px;
                line-height: 44px;
                color: #fff;
                background: #ddd;
                border-radius: 4px;
                float: left;
                margin-right: 10px;
                text-align: center;
            }
            .securityNavItem:hover{
                background: #f71327;
            }
            .router-link-active{
                background: #f71327;
            }
        }
        .securityTop{
            width: 1130px;
            height: 320px;
            .licenseBox{
                width:280px;
                height: 320px;
                margin:2px 0 0;
                float: left;
                .licenseTitle{
                    font-size: 18px;
                    width: 100%;
                    height: 79px;
                    line-height: 26px;
                    margin:0 auto ;
                    padding: 26px 0;
                    font-weight: 500;
                }
                .licenseBox{
                    width: 100%;
                    height: 214px;
                    .license{
                        width: 151px;
                        height:214px;
                    }
                }
            }
            .idcardBox{
                width: 850px;
                height: auto;
                margin:2px 0 0;
                float: left;
                .idcardTitle{
                    font-size: 18px;
                    width: 100%;
                    height: 79px;
                    line-height: 26px;
                    margin:0 auto ;
                    padding: 26px 0;
                    font-weight: 500;
                }
                .idcardBox{
                    width: 100%;
                    height: 214px;
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
        .securityBottom{
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
}
</style>
