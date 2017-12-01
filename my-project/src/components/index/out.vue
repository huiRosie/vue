<template>
    <div class="out">
        <div class="outContent">
            <h2 class="outTitle">我要贴现 > 发布汇票</h2>
            <div class="outMain">
                <!--基本信息-->
                <div class="outBasic">
                    <h3 class="outBasicTitle">基本信息 <span>（非必填，但填写汇票的详细信息有助于您汇票的快速审核）</span></h3>
                    <ul class="outBasicInfo">
                        <li class="outBasicInfoItem">
                            <div class="outBasicInfoItem_label">
                                出票人全称：
                            </div>
                            <div class="outBasicInfoItem_ipt">
                                <input type="text" name="" id="" value="" />
                            </div>
                        </li>
                        <li class="outBasicInfoItem">
                            <div class="outBasicInfoItem_label">
                                票面金额：
                            </div>
                            <div class="outBasicInfoItem_ipt">
                                <input type="number"  id="" value="" oninput="" />
                                <span>元</span>
                            </div>
                            <div class="outBasicInfoItem_exchange">
                                <span class="outBasicInfoItem_exchangeLabel">大写：</span>
                                <span class="outBasicInfoItem_exchangeTxt"></span>
                            </div>
                        </li>
                        <li class="outBasicInfoItem">
                            <div class="outBasicInfoItem_label">
                                汇票到期日：
                            </div>
                            <div class="outBasicInfoItem_ipt">
                                <input type="text" name="" id="" value="" />
                            </div>
                        </li>
                    </ul>
                </div>
                <!--上传汇票信息-->
                <div class="outUpload">
                    <h3 class="outUploadTitle">上传汇票信息</h3>
                    <div class="outUploadList">
                        <div class="outUploadFont">
                            <div class="outUploadFont_label">
                                <div class="outUploadFont_labelmain">
                                    汇票正面：
                                </div>
                                <p class="outUploadFont_labelsub">(必须且仅能上传一张)</p>
                            </div>
                            <div class="outUploadFont_txt">
                                
                            </div>
                        </div>
                        <div class="outUploadBack">
                            <div class="outUploadBack_label">
                                <div class="outUploadBack_labelmain">
                                    汇票背面：
                                </div>
                                <p class="outUploadBack_labelsub">（至少上传一张背书）</p>
                            </div>
                            <div class="outUploadBack_txt">
                                
                            </div>
                        </div>
                        <div class="outUploadFile">
                            <div class="outUploadFile_label">
                                证明原件：
                            </div>
                            <div class="outUploadFile_btn">
                                选择文件
                            </div>
                            <div class="outUploadFile_txt">
                                
                            </div>
                        </div>
                        <div class="outUploadArea">
                            <div class="outUploadArea_label">
                                交易区域：
                            </div>
                            <div class="outUploadArea_txt">
                                <input type="text" placeholder="武汉" value="" />
                                <img src="../../assets/location.png"/>
                            </div>
                        </div>
                        <div class="outUploadRemark">
                            <div class="outUploadRemark_label">
                                备注：
                            </div>
                            <div class="outUploadRemark_txt">
                                <textarea name="" rows="" cols=""></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="outBtn">
                    <a class="outBtnLink">发布汇票</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Out',
  data () {
    return {
      msg3: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .out {
        width: 100%;
        height: auto;
        background: #f1f1f1;
        padding: 20px 0;
    }

    .out .outContent {
        width: 1280px;
        margin: 0 auto;
    }

    .out .outContent .outTitle {
        width: 100%;
        height: 58px;
        line-height: 58px;
        color: #555;
        font-size: 14px;
        text-indent: 30px;
        margin-bottom: 1px;
        background: white;
    }

    .out .outContent .outMain {
        width: 100%;
        height: auto;
        background: white;
    }

    .out .outContent .outMain .outBasic {
        width: 1220px;
        height: auto;
        padding: 25px 30px 50px;
        margin: 0 auto;
        overflow: hidden;
    }

    .out .outContent .outMain .outBasic .outBasicTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 35px;
        border-left: 5px solid #ff8000;
    }

    .out .outContent .outMain .outBasic .outBasicTitle span {
        font-size: 12px;
        color: #878787;
        font-weight: 100;
    }

    .out .outContent .outMain .outBasic .outBasicInfo {
        width: 100%;
        height: auto;
    }

    .out .outContent .outMain .outBasic .outBasicInfo .outBasicInfoItem {
        width: 100%;
        height: 46px;
        line-height: 46px;
        margin-bottom: 24px;
        overflow: hidden;
    }

    .out .outContent .outMain .outBasic .outBasicInfo .outBasicInfoItem .outBasicInfoItem_label {
        width: 84px;
        height: 46px;
        margin-right: 50px;
        float: left;
    }

    .out .outContent .outMain .outBasic .outBasicInfo .outBasicInfoItem .outBasicInfoItem_ipt {
        width: 318px;
        height: 46px;
        float: left;
        line-height: 46px;
        border: 1px solid #999;
        border-radius: 4px;
    }

    .out .outContent .outMain .outBasic .outBasicInfo .outBasicInfoItem .outBasicInfoItem_ipt input {
        display: block;
        width: 296px;
        height: 44px;
        line-height: 44px;
        text-indent: 20px;
        border-radius: 4px;
        float: left;
    }

    .out .outContent .outMain .outBasic .outBasicInfo .outBasicInfoItem .outBasicInfoItem_ipt span {
        float: left;
        color: #878787;
    }

    .out .outContent .outMain .outBasic .outBasicInfo .outBasicInfoItem .outBasicInfoItem_exchange {
        width: auto;
        height: 46px;
        margin-left: 20px;
        float: left;
    }

    .out .outContent .outMain .outBasic .outBasicInfo .outBasicInfoItem .outBasicInfoItem_exchange span {
        float: left;
        color: #ff8000;
    }

    .out .outContent .outMain .outBasic .outBasicInfo .outBasicInfoItem:first-child .outBasicInfoItem_ipt {
        width: 462px;
    }

    .out .outContent .outMain .outBasic .outBasicInfo .outBasicInfoItem:first-child .outBasicInfoItem_ipt input {
        width: 440px;
    }

    .out .outContent .outMain .outUpload {
        width: 1220px;
        height: auto;
        padding: 25px 30px 50px;
        margin: 0 auto;
        overflow: hidden;
    }

    .out .outContent .outMain .outUpload .outUploadTitle {
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-indent: 10px;
        font-weight: 600;
        margin-bottom: 25px;
        border-left: 5px solid #ff8000;
    }

    .out .outContent .outMain .outUpload .outUploadList {
        width: 100%;
        height: auto;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadFont {
        width: 100%;
        height: 200px;
        margin-bottom: 24px;
        overflow: hidden;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadFont .outUploadFont_label {
        width: 120px;
        height: 20px;
        line-height: 20px;
        margin-right: 14px;
        float: left;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadFont .outUploadFont_label .outUploadFont_labelsub {
        font-size: 12px;
        color: #c30015;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadFont .outUploadFont_txt {
        width: 196px;
        height: 196px;
        float: left;
        border: 2px dashed #e1e1e1;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadBack {
        width: 100%;
        height: 200px;
        margin-bottom: 24px;
        overflow: hidden;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadBack .outUploadBack_label {
        width: 120px;
        height: 20px;
        line-height: 20px;
        margin-right: 14px;
        float: left;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadBack .outUploadBack_label .outUploadBack_labelsub {
        font-size: 12px;
        color: #c30015;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadBack .outUploadBack_txt {
        width: 196px;
        height: 196px;
        float: left;
        border: 2px dashed #e1e1e1;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadFile {
        width: 100%;
        height: 46px;
        line-height: 46px;
        margin-bottom: 24px;
        overflow: hidden;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadFile .outUploadFile_label {
        width: 120px;
        height: 46px;
        margin-right: 14px;
        float: left;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadFile .outUploadFile_btn {
        width: 240px;
        height: 46px;
        float: left;
        color: white;
        text-align: center;
        border-radius: 4px;
        background: #ff8000;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadArea {
        width: 100%;
        height: 46px;
        line-height: 46px;
        margin-bottom: 24px;
        overflow: hidden;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadArea .outUploadArea_label {
        width: 120px;
        height: 46px;
        margin-right: 14px;
        float: left;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadArea .outUploadArea_txt {
        width: 240px;
        height: 46px;
        float: left;
        text-align: center;
        border-radius: 4px;
        border: 1px solid #999;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadArea .outUploadArea_txt input {
        width: 214px;
        height: 44px;
        float: left;
        text-indent: 20px;
        border-radius: 4px;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadArea .outUploadArea_txt img {
        display: block;
        float: left;
        width: 18px;
        height: 22px;
        margin: 11px 4px;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadRemark {
        width: 100%;
        height: 200px;
        line-height: 46px;
        margin-bottom: 24px;
        overflow: hidden;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadRemark .outUploadRemark_label {
        width: 120px;
        height: 46px;
        margin-right: 14px;
        float: left;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadRemark .outUploadRemark_txt {
        width: 1026px;
        height: 200px;
        float: left;
        text-align: center;
        border-radius: 4px;
        border: 1px solid #999;
    }

    .out .outContent .outMain .outUpload .outUploadList .outUploadRemark .outUploadRemark_txt textarea {
        width: 1020px;
        height: 194px;
        float: left;
        border: 0;
        text-indent: 20px;
        border-radius: 4px;
    }

    .out .outContent .outMain .outBtn {
        width: 100%;
        height: 46px;
        line-height: 46px;
        padding-bottom: 50px;
    }

    .out .outContent .outMain .outBtn .outBtnLink {
        display: block;
        width: 240px;
        height: 46px;
        color: white;
        font-size: 16px;
        text-align: center;
        background: #ff8000;
        margin: 0 auto;
        border-radius: 4px;
    }
</style>
