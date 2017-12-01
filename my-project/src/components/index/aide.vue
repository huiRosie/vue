<template>
    <div class="aide">
        <div class="aideContent">
            <h2 class="aideTitle">贴现计算器</h2>
            <div class="aideMain">
                <div class="aideMainTop">
                    <div class="aideLeft">
                        <div class="aideLeftCheck">
                            <div class="aideLeftCheckItem">
                                <input type="radio" name="payType" id="" value="" /> 按利息计算
                            </div>
                            <div class="aideLeftCheckItem">
                                <input type="radio" name="payType" id="" value="" /> 每十万计算
                            </div>
                        </div>
                        <ul class="aideLeftList">
                            <li class="sideLeftItem">
                                <div class="aideLeftItem_label">
                                    <span>*</span>票面金额：
                                </div>
                                <div class="aideLeftItem_text">
                                    <input type="number" name="" id="" value="" />
                                    <span>(万元)</span>
                                </div>
                                <div class="aideLeftItem_tip">
                                    
                                </div>
                            </li>
                            <li class="sideLeftItem">
                                <div class="aideLeftItem_label">
                                    <span>*</span>利率：
                                </div>
                                <div class="aideLeftItem_text">
                                    <input type="number" name="" id="" value="" />
                                    <span>(%)</span>
                                </div>
                                <div class="aideLeftItem_text2">
                                    <select name="">
                                        <option value="">年利率</option>
                                    </select>
                                </div>
                                <div class="aideLeftItem_tip">
                                    
                                </div>
                            </li>
                            <li class="sideLeftItem">
                                <div class="aideLeftItem_label">
                                    <span>*</span>贴现日：
                                </div>
                                <div class="aideLeftItem_text">
                                    <input type="text" name="" id="" value="" />
                                </div>
                                <div class="aideLeftItem_date">
                                    <img src="../../assets/calender.png"/>
                                </div>
                            </li>
                            <li class="sideLeftItem">
                                <div class="aideLeftItem_label">
                                    <span>*</span>到期日：
                                </div>
                                <div class="aideLeftItem_text">
                                    <input type="text" name="" id="" value="" />
                                </div>
                                <div class="aideLeftItem_date">
                                    <img src="../../assets/calender.png"/>
                                </div>
                            </li>
                            <li class="sideLeftItem">
                                <div class="aideLeftItem_label">
                                    票据类型：
                                </div>
                                <div class="aideLeftItem_text">
                                    <select name="">
                                        <option value="">电票</option>
                                        <option value="">纸票</option>
                                    </select>
                                </div>
                            </li>
                            <li class="sideLeftItem">
                                <div class="aideLeftItem_label">
                                    手续费：
                                </div>
                                <div class="aideLeftItem_text">
                                    <input type="text" name="" id="" value="" />
                                    <span>(元)</span>
                                </div>
                                <div class="aideLeftItem_des">
                                    每十万加
                                </div>
                                <div class="aideLeftItem_tip">
                                    
                                </div>
                            </li>
                            <li class="sideLeftItem">
                                <div class="aideLeftItem_label">
                                    查询及划款费：
                                </div>
                                <div class="aideLeftItem_text">
                                    <input type="text" name="" id="" value="" />
                                    <span>(元)</span>
                                </div>
                                <div class="aideLeftItem_tip">
                                    
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="aideBorder">
                        
                    </div>
                    <div class="aideRight">
                        <div class="aideRightTitle">
                            计算结果：
                        </div>
                        <ul class="aideRightList">
                            <li class="aideRightItem">
                                <div class="aideRightItem_label">
                                    调整天数：
                                </div>
                                <div class="aideRightItem_text">
                                    <input type="number" name="" id="" value="" />
                                    <span>(天)</span>
                                </div>
                                <div class="aideRightItem_tip">
                                    
                                </div>
                            </li>
                            <li class="aideRightItem">
                                <div class="aideRightItem_label">
                                    计息天数：
                                </div>
                                <div class="aideRightItem_text">
                                    <input type="number" name="" id="" value="" />
                                    <span>(天)</span>
                                </div>
                                <div class="aideRightItem_tip">
                                    
                                </div>
                            </li>
                            <li class="aideRightItem">
                                <div class="aideRightItem_label">
                                    每十万利息：
                                </div>
                                <div class="aideRightItem_text">
                                    <input type="number" name="" id="" value="" />
                                    <span>(元)</span>
                                </div>
                                <div class="aideRightItem_tip">
                                    
                                </div>
                            </li>
                            <li class="aideRightItem">
                                <div class="aideRightItem_label">
                                    贴息金额：
                                </div>
                                <div class="aideRightItem_text">
                                    <input type="number" name="" id="" value="" />
                                    <span>(元)</span>
                                </div>
                                <div class="aideRightItem_tip">
                                    
                                </div>
                            </li>
                            <li class="aideRightItem">
                                <div class="aideRightItem_label">
                                    贴现金额：
                                </div>
                                <div class="aideRightItem_text">
                                    <input type="number" name="" id="" value="" />
                                    <span>(元)</span>
                                </div>
                                <div class="aideRightItem_tip">
                                    
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="aideMainBottom">
                    <div class="aideMainBottomCount">
                        计算
                    </div>
                    <div class="aideMainBottomEmpty">
                        清空
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Aide',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .aide {
        width: 100%;
        height: auto;
        padding: 20px 0;
    }

    .aide .aideContent {
        width: 1280px;
        height: auto;
        margin: 0 auto;
    }

    .aide .aideContent .aideTitle {
        width: 1240px;
        height: 50px;
        line-height: 50px;
        padding: 0 20px;
        margin-bottom: 1px;
        background: white;
    }

    .aide .aideContent .aideMain {
        width: 1080px;
        height: auto;
        padding: 30px 100px;
        background: white;
    }

    .aide .aideContent .aideMain .aideMainTop {
        width: 100%;
        height: auto;
        overflow: hidden;
    }

    .aide .aideContent .aideMain .aideMainTop .aideLeft {
        width: 540px;
        height: auto;
        float: left;
    }

    .aide .aideContent .aideMain .aideMainTop .aideLeft .aideLeftCheck {
        width: 100%;
        height: 20px;
        line-height: 12px;
        overflow: hidden;
        margin-bottom: 20px;
    }

    .aide .aideContent .aideMain .aideMainTop .aideLeft .aideLeftCheck .aideLeftCheckItem {
        width: 160px;
        height: 20px;
        float: left;
    }

    .aide .aideContent .aideMain .aideMainTop .aideLeft .aideLeftList {
        width: 100%;
        height: auto;
    }

    .aide .aideContent .aideMain .aideMainTop .aideLeft .aideLeftList .sideLeftItem {
        width: 100%;
        height: 46px;
        overflow: hidden;
        margin-bottom: 20px;
    }

    .aide .aideContent .aideMain .aideMainTop .aideLeft .aideLeftList .sideLeftItem .aideLeftItem_label {
        width: 114px;
        height: 46px;
        line-height: 46px;
        float: left;
    }

    .aide .aideContent .aideMain .aideMainTop .aideLeft .aideLeftList .sideLeftItem .aideLeftItem_label span {
        color: #fc0006;
    }

    .aide .aideContent .aideMain .aideMainTop .aideLeft .aideLeftList .sideLeftItem .aideLeftItem_text {
        float: left;
        width: 156px;
        height: 44px;
        line-height: 44px;
        border: 1px solid #999;
        border-radius: 4px;
    }

    .aide .aideContent .aideMain .aideMainTop .aideLeft .aideLeftList .sideLeftItem .aideLeftItem_text input {
        display: block;
        width: 120px;
        height: 44px;
        border-radius: 4px;
        text-indent: 20px;
        float: left;
    }

    .aide .aideContent .aideMain .aideMainTop .aideLeft .aideLeftList .sideLeftItem .aideLeftItem_text select {
        display: block;
        width: 130px;
        height: 44px;
        border-radius: 4px;
        border: 0;
        margin: 0 10px;
    }

    .aide .aideContent .aideMain .aideMainTop .aideLeft .aideLeftList .sideLeftItem .aideLeftItem_text2 {
        width: 90px;
        height: 44px;
        line-height: 44px;
        border: 1px solid #999;
        border-radius: 4px;
        float: left;
        margin-left: 20px;
    }

    .aide .aideContent .aideMain .aideMainTop .aideLeft .aideLeftList .sideLeftItem .aideLeftItem_text2 select {
        display: block;
        width: 70px;
        height: 44px;
        border-radius: 4px;
        border: 0;
        margin: 0 10px;
    }

    .aide .aideContent .aideMain .aideMainTop .aideLeft .aideLeftList .sideLeftItem .aideLeftItem_des {
        width: 100px;
        height: 20px;
        float: left;
        padding-left: 6px;
        padding-top: 26px;
        color: #878787;
        font-size: 12px;
    }

    .aide .aideContent .aideMain .aideMainTop .aideLeft .aideLeftList .sideLeftItem .aideLeftItem_date {
        float: left;
        margin: 8px 10px;
        cursor: pointer;
    }

    .aide .aideContent .aideMain .aideMainTop .aideLeft .aideLeftList .sideLeftItem .aideLeftItem_date img {
        display: block;
    }

    .aide .aideContent .aideMain .aideMainTop .aideLeft .aideLeftList .sideLeftItem:first-child .aideLeftItem_text {
        width: 268px;
    }

    .aide .aideContent .aideMain .aideMainTop .aideLeft .aideLeftList .sideLeftItem:first-child .aideLeftItem_text input {
        width: 220px;
    }

    .aide .aideContent .aideMain .aideMainTop .aideBorder {
        float: left;
        width: 1px;
        height: 396px;
        margin: 49px 0;
        background: #e1e1e1;
    }

    .aide .aideContent .aideMain .aideMainTop .aideRight {
        width: 519px;
        height: auto;
        float: left;
        padding-left: 19px;
    }

    .aide .aideContent .aideMain .aideMainTop .aideRight .aideRightTitle {
        width: 100%;
        height: 22px;
        font-size: 16px;
        font-weight: 500;
        color: #ff8300;
        margin-bottom: 20px;
    }

    .aide .aideContent .aideMain .aideMainTop .aideRight .aideRightList {
        width: 100%;
        height: auto;
    }

    .aide .aideContent .aideMain .aideMainTop .aideRight .aideRightList .aideRightItem {
        width: 100%;
        height: 46px;
        overflow: hidden;
        margin-bottom: 20px;
    }

    .aide .aideContent .aideMain .aideMainTop .aideRight .aideRightList .aideRightItem .aideRightItem_label {
        width: 114px;
        height: 46px;
        line-height: 46px;
        float: left;
    }

    .aide .aideContent .aideMain .aideMainTop .aideRight .aideRightList .aideRightItem .aideRightItem_text {
        float: left;
        width: 156px;
        height: 44px;
        line-height: 44px;
        border: 1px solid #999;
        border-radius: 4px;
    }

    .aide .aideContent .aideMain .aideMainTop .aideRight .aideRightList .aideRightItem .aideRightItem_text input {
        display: block;
        width: 120px;
        height: 44px;
        border-radius: 4px;
        text-indent: 20px;
        float: left;
    }

    .aide .aideContent .aideMain .aideMainTop .aideRight .aideRightList .aideRightItem:last-child .aideRightItem_text {
        width: 268px;
    }

    .aide .aideContent .aideMain .aideMainTop .aideRight .aideRightList .aideRightItem:last-child .aideRightItem_text input {
        width: 230px;
    }

    .aide .aideContent .aideMain .aideMainBottom {
        width: 420px;
        height: 46px;
        margin: 20px auto 50px;
    }

    .aide .aideContent .aideMain .aideMainBottom .aideMainBottomCount {
        width: 200px;
        height: 46px;
        line-height: 46px;
        text-align: center;
        background: #ff8000;
        border-radius: 4px;
        color: white;
        float: left;
        margin-right: 20px;
        cursor: pointer;
    }

    .aide .aideContent .aideMain .aideMainBottom .aideMainBottomEmpty {
        width: 198px;
        height: 44px;
        line-height: 44px;
        text-align: center;
        color: #ff8000;
        border: 1px solid #ff8000;
        border-radius: 4px;
        float: left;
        cursor: pointer;
    }
</style>
