<template>
    <div class="partner">
        <div class="partnerBox">
            <div class="partnerTop">
                <h3 class="partnerTopTitle">合作伙伴<span>诚信是金 ·</span><span>至诚合作</span></h3>
            </div>
            <ul class="partnerList">
                <li class="partnerItem">
                    <img src="../../../assets/logo_partner.png"/>
                </li>
                <li class="partnerItem">
                    <img src="../../../assets/logo_partners2.png"/>
                </li>
                <li class="partnerItem">
                    <img src="../../../assets/logo_partners3.png"/>
                </li>
                <li class="partnerItem">
                    <img src="../../../assets/logo_partners4.png"/>
                </li>
                <li class="partnerItem">
                    <img src="../../../assets/logo_partners5.png"/>
                </li>
                <li class="partnerItem">
                    <img src="../../../assets/logo_partners6.png"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Partner',
        data() { 
            return {

            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less" scoped>
    .partner {
        min-width: 1280px;
        height: 204px;
        background: #fff;
        .partnerBox {
            width: 1280px;
            height: 204px;
            margin: 0 auto;
            .partnerTop {
                width: 1280px;
                height: 56px;
                line-height: 55px;
                padding: 0 30px;
                border-bottom: 1px dashed #d8d8d8;
                .partnerTopTitle {
                    font-size: 24px;
                    color: #333;
                    float: left;
                }
                span {
                    font-size: 14px;
                    color: #f71327;
                    padding-left: 8px;
                }
            }
            .partnerList {
                width: 1280px;
                height: 148px;
                padding: 48px 30px;
                .partnerItem {
                    width: auto;
                    float: left;
                    margin-right: 76px;
                    img {
                        display: block;
                    }
                }
                .partnerItem:last-child {
                    margin-right: 0;
                }
            }
        }
    }
</style>


