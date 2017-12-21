<template>
    <div class="aide">
        <div class="aideContent">
            <h2 class="aideTitle">贴现计算器</h2>
            <div class="aideMain">
                <div class="aideMainTop">
                    <div class="aideLeft">
                        <div class="aideLeftCheck">
                            <div class="aideLeftCheckItem">
                                <input type="radio" name="payType" v-model="checked" id="" value="按利息计算" /> <label>按利息计算</label>
                            </div>
                            <div class="aideLeftCheckItem">
                                <input type="radio" name="payType" v-model="checked" id="" value="每十万计算" /> <label>每十万计算</label>
                            </div>
                        </div>
                        <!-- 按利息计算 -->
                        <ul v-if="checked=='按利息计算'" class="aideLeftList">
                            <li class="sideLeftItem">
                                <div class="aideLeftItem_label">
                                    <span>*</span>票面金额：
                                </div>
                                <div class="aideLeftItem_text">
                                    <input type="number" v-model="billMoney" name="" id="" value="" />
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
                                    <input type="number" v-model="billRate" name="" id="" value="" />
                                    <span>(%)</span>
                                </div>
                                <div class="aideLeftItem_text2">
                                    <select v-model="billRateType" name="">
                                        <option disabled>请选择</option>
                                        <option value="年利率">年利率</option>
                                        <option value="月利率">月利率</option>
                                    </select>
                                </div>
                                <div class="aideLeftItem_tip">
                                    
                                </div>
                            </li>
                            <li class="sideLeftItem">
                                <div class="aideLeftItem_label">
                                    <span>*</span>贴现日：
                                </div>
                                <DatePicker  type="date" format='yyyy-MM-dd' v-model="billTradeDate" placeholder="请选择汇票贴现日" style="width:240px;height:46px;padding:7px 0;"></DatePicker>
                                <!-- <div class="aideLeftItem_text">
                                    <input type="text" v-model="billTradeDate" name="" id="" value="" />
                                </div>
                                <div class="aideLeftItem_date">
                                    <img src="../../assets/calender.png"/>
                                </div> -->
                            </li>
                            <li class="sideLeftItem">
                                <div class="aideLeftItem_label">
                                    <span>*</span>到期日：
                                </div>
                                <DatePicker  type="date" format='yyyy-MM-dd' v-model="billDeadline" placeholder="请选择汇票到期日" style="width:240px;height:46px;padding:7px 0;"></DatePicker>
                                <!-- <div class="aideLeftItem_text">
                                    <input type="text" v-model="billDeadline" name="" id="" value="" />
                                </div>
                                <div class="aideLeftItem_date">
                                    <img src="../../assets/calender.png"/>
                                </div> -->
                            </li>
                            <li class="sideLeftItem">
                                <div class="aideLeftItem_label">
                                    票据类型：
                                </div>
                                <div class="aideLeftItem_text">
                                    <select v-model="billType" name="">
                                        <option disabled>请选择</option>
                                        <option value="电票">电票</option>
                                        <option value="纸票">纸票</option>
                                    </select>
                                </div>
                            </li>
                            <li class="sideLeftItem">
                                <div class="aideLeftItem_label">
                                    手续费：
                                </div>
                                <div class="aideLeftItem_text">
                                    <input type="number" v-model="billChange" name="" id="" value="" />
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
                                    <input type="number" v-model="billSearMoney" name="" id="" value="" />
                                    <span>(元)</span>
                                </div>
                                <div class="aideLeftItem_tip">
                                    
                                </div>
                            </li>
                        </ul>
                        <!-- 每十万计算 -->
                        <ul v-if="checked=='每十万计算'" class="aideLeftList">
                            <li class="sideLeftItem">
                                <div class="aideLeftItem_label">
                                    <span>*</span>票面金额：
                                </div>
                                <div class="aideLeftItem_text">
                                    <input type="number" v-model="billMoney" name="" id="" value="" />
                                    <span>(万元)</span>
                                </div>
                                <div class="aideLeftItem_tip">
                                    
                                </div>
                            </li>
                            <li class="sideLeftItem">
                                <div class="aideLeftItem_label">
                                    <span>*</span>每10万贴息：
                                </div>
                                <div class="aideLeftItem_text">
                                    <input type="number" v-model="billRate" name="" id="" value="" />
                                </div>
                            </li>
                            <li class="sideLeftItem">
                                <div class="aideLeftItem_label">
                                    <span>*</span>贴现日：
                                </div>
                                <DatePicker  type="date" format='yyyy-MM-dd' v-model="billTradeDate" placeholder="请选择汇票贴现日" style="width:240px;height:46px;padding:7px 0;"></DatePicker>
                            </li>
                            <li class="sideLeftItem">
                                <div class="aideLeftItem_label">
                                    <span>*</span>到期日：
                                </div>
                                <DatePicker  type="date" format='yyyy-MM-dd' v-model="billDeadline" placeholder="请选择汇票到期日" style="width:240px;height:46px;padding:7px 0;"></DatePicker>
                            </li>
                            <li class="sideLeftItem">
                                <div class="aideLeftItem_label">
                                    票据类型：
                                </div>
                                <div class="aideLeftItem_text">
                                    <select v-model="billType" name="">
                                        <option disabled>请选择</option>
                                        <option value="电票">电票</option>
                                        <option value="纸票">纸票</option>
                                    </select>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="aideBorder"></div>
                    <div class="aideRight">
                        <div class="aideRightTitle">
                            计算结果：
                        </div>
                        <!-- 按利息计算 -->
                        <ul v-if="checked=='按利息计算'" class="aideRightList">
                            <li class="aideRightItem">
                                <div class="aideRightItem_label">
                                    调整天数：
                                </div>
                                <div class="aideRightItem_text">
                                    <input type="number" v-model="billAdjustDate" name="" id="" value="" />
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
                                    <input type="number" v-model="billInterestDate" name="" id="" value="" />
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
                                    <input type="number" v-model="billAdd" name="" id="" value="" />
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
                                    <input type="number" v-model="billRateMoney" name="" id="" value="" />
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
                                    <input type="number" v-model="billDiscountMoney" name="" id="" value="" />
                                    <span>(元)</span>
                                </div>
                                <div class="aideRightItem_tip">
                                    
                                </div>
                            </li>
                        </ul>
                        <!-- 每十万计算 -->
                        <ul v-if="checked=='每十万计算'" class="aideRightList">
                            <li class="aideRightItem">
                                <div class="aideRightItem_label">
                                    贴息金额：
                                </div>
                                <div class="aideRightItem_text">
                                    <input type="number" v-model="billRateMoney" name="" id="" value="" />
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
                                    <input type="number" v-model="billDiscountMoney" name="" id="" value="" />
                                    <span>(元)</span>
                                </div>
                                <div class="aideRightItem_tip">
                                    
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="aideMainBottom">
                    <div class="aideMainBottomCount" @click="caculate">
                        计算
                    </div>
                    <div class="aideMainBottomEmpty" @click="empty">
                        清空
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import globalData from '../globalData'

export default {
    name: 'Aide',
    data () {
        return {
            checked:'按利息计算',
            billMoney:'',
            billRate:'',
            billRateType:'年利率',
            billTradeDate:'',
            billDeadline:'',
            billType:'电票',
            billChange:'',
            billSearMoney:'',
            billAdjustDate:'',
            billInterestDate:'',
            billAdd:'',
            billRateMoney:'',
            billDiscountMoney:''
        }
    },
    methods:{
        caculate(){
            var self = this;
            const title = '提示';
            if(self.billMoney==''){
                const content = '<p>请输入票面金额！</p>';
                this.$Modal.info({
                    title: title,
                    content: content
                });
                return;
            }
            if(self.billRate==''){
                const content = '<p>请输入利率！</p>';
                this.$Modal.info({
                    title: title,
                    content: content
                });
                return;
            }
            if(self.billTradeDate==''){
                const content = '<p>请选择汇票贴现日！</p>';
                this.$Modal.info({
                    title: title,
                    content: content
                });
                return;
            }
            if(self.billDeadline==''){
                const content = '<p>请选择汇票到期日！</p>';
                this.$Modal.info({
                    title: title,
                    content: content
                });
                return;
            }
            if(self.billChange==''){
                const content = '<p>请输入汇票手续费！</p>';
                this.$Modal.info({
                    title: title,
                    content: content
                });
                return;
            }
            if(self.billSearMoney==''){
                const content = '<p>请输入查询费！</p>';
                this.$Modal.info({
                    title: title,
                    content: content
                });
                return;
            }
            // 转换日期格式
            var linedates = self.billDeadline;
            self.billDeadline = globalData.methods.changeVueDate(linedates,'yyyy-MM-dd');
            var tradedates = self.billTradeDate;
            self.billTradeDate = globalData.methods.changeVueDate(tradedates,'yyyy-MM-dd');
            console.log(self.billTradeDate)
            console.log(self.billDeadline)
            console.log(self.billRateType)
            console.log(self.billType)
            self.billAdjustDate = Math.abs(self.billDeadline.substring(8,10)-self.billTradeDate.substring(8,10))+1;
            self.billInterestDate = Math.abs(self.billDeadline.substring(8,10)-self.billTradeDate.substring(8,10))+1;
            console.log(self.billAdjustDate)
        },
        empty(){
            var self = this;
            self.billMoney='',
            self.billRate='',
            self.billTradeDate='',
            self.billDeadline='',
            self.billType='',
            self.billChange='',
            self.billSearMoney='',
            self.billAdjustDate='',
            self.billInterestDate='',
            self.billAdd='',
            self.billRateMoney='',
            self.billDiscountMoney='';
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
        width: 1280px;
        height: 50px;
        line-height: 50px;
        padding: 0 20px;
        margin-bottom: 1px;
        background: white;
    }

    .aide .aideContent .aideMain {
        width: 1280px;
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
        height: 46px;
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
        height: 46px;
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
        width: 106px;
        height: 46px;
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
        width: 538px;
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
        height: 46px;
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
        background: #f71327;
        border-radius: 4px;
        color: white;
        float: left;
        margin-right: 20px;
        cursor: pointer;
    }

    .aide .aideContent .aideMain .aideMainBottom .aideMainBottomEmpty {
        width: 198px;
        height: 46px;
        line-height: 44px;
        text-align: center;
        color: #f71327;
        border: 1px solid #f71327;
        border-radius: 4px;
        float: left;
        cursor: pointer;
    }
</style>
