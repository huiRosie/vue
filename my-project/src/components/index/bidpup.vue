
<template>
    <div class="bidPouup">
        <div class="bidPouupTop">
            <h2 class="bidPouupTopTitle">参与竞价<span> (请输入您的报价)</span></h2>
            <div class="bidPouupClose">
                <img src="../../assets/close.png"/>
            </div>
        </div>
        <div class="bidPouupMain">
            <div class="bidPouupRate">
                <div class="bidPouupRate_label">
                    年利率：
                </div>
                <div class="bidPouupRate_text">
                    <input type="text" name="" id="" value="" />
                    <span>%</span>
                </div>
            </div>
            <div class="bidPouupAdd">
                <div class="bidPouupAdd_label">
                    每十万加（元）:
                </div>
                <div class="bidPouupAdd_text">
                    <input type="text" name="" id="" value="" />
                </div>
            </div>
            <div class="bidPouupInterest">
                <div class="bidPouupInterest_label">
                    贴息金额（元）:
                </div>
                <div class="bidPouupInterest_text">
                    
                </div>
            </div>
            <div class="bidPouupDiscount">
                <div class="bidPouupDiscount_label">
                    贴现金额（元）:
                </div>
                <div class="bidPouupDiscount_text">
                    
                </div>
            </div>
            <div class="bidPouupBtn">
                <a class="bidPouupOffer">立即报价</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Bidpup',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .bidPouup {
        width: 600px;
        height: 500px;
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: 999;
        margin-top: -250px;
        margin-left: -300px;
        display: none;
    }

    .bidPouup .bidPouupTop {
        width: 560px;
        height: 18px;
        margin-bottom: 1px;
        background: white;
        padding: 20px;
    }

    .bidPouup .bidPouupTop .bidPouupTopTitle {
        width: 300px;
        height: 18px;
        float: left;
        color: #f71327;
        font-size: 16px;
    }

    .bidPouup .bidPouupTop .bidPouupTopTitle span {
        color: #878787;
        font-size: 12px;
    }

    .bidPouup .bidPouupTop .bidPouupClose {
        width: 18px;
        height: 18px;
        float: right;
        cursor: pointer;
    }

    .bidPouup .bidPouupTop .bidPouupClose img {
        display: block;
        width: 18px;
        height: 18px;
    }

    .bidPouup .bidPouupMain {
        width: 424px;
        height: 352px;
        padding: 44px 88px;
        background: white;
    }

    .bidPouup .bidPouupMain .bidPouupRate {
        width: 100%;
        height: 46px;
        line-height: 46px;
        margin-bottom: 24px;
    }

    .bidPouup .bidPouupMain .bidPouupRate .bidPouupRate_label {
        width: 105px;
        height: 46px;
        text-align: right;
        float: left;
        margin-right: 19px;
    }

    .bidPouup .bidPouupMain .bidPouupRate .bidPouupRate_text {
        width: 298px;
        height: 44px;
        float: left;
        border: 1px solid #999;
        border-radius: 4px;
    }

    .bidPouup .bidPouupMain .bidPouupRate .bidPouupRate_text input {
        display: block;
        width: 280px;
        height: 44px;
        float: left;
        border-radius: 4px;
        text-indent: 20px;
    }

    .bidPouup .bidPouupMain .bidPouupRate .bidPouupRate_text span {
        float: left;
        color: #f71327;
    }

    .bidPouup .bidPouupMain .bidPouupAdd {
        width: 100%;
        height: 46px;
        line-height: 46px;
        margin-bottom: 24px;
    }

    .bidPouup .bidPouupMain .bidPouupAdd .bidPouupAdd_label {
        width: 105px;
        height: 46px;
        text-align: right;
        float: left;
        margin-right: 19px;
    }

    .bidPouup .bidPouupMain .bidPouupAdd .bidPouupAdd_text {
        width: 298px;
        height: 44px;
        float: left;
        border: 1px solid #999;
        border-radius: 4px;
    }

    .bidPouup .bidPouupMain .bidPouupAdd .bidPouupAdd_text input {
        display: block;
        width: 280px;
        height: 44px;
        float: left;
        border-radius: 4px;
        text-indent: 20px;
    }

    .bidPouup .bidPouupMain .bidPouupInterest {
        width: 100%;
        height: 46px;
        line-height: 46px;
        margin-bottom: 24px;
    }

    .bidPouup .bidPouupMain .bidPouupInterest .bidPouupInterest_label {
        width: 105px;
        height: 46px;
        text-align: right;
        float: left;
        margin-right: 19px;
    }

    .bidPouup .bidPouupMain .bidPouupInterest .bidPouupInterest_text {
        width: 298px;
        height: 46px;
        float: left;
    }

    .bidPouup .bidPouupMain .bidPouupDiscount {
        width: 100%;
        height: 46px;
        line-height: 46px;
        margin-bottom: 24px;
    }

    .bidPouup .bidPouupMain .bidPouupDiscount .bidPouupDiscount_label {
        width: 105px;
        height: 46px;
        text-align: right;
        float: left;
        margin-right: 19px;
    }

    .bidPouup .bidPouupMain .bidPouupDiscount .bidPouupDiscount_text {
        width: 298px;
        height: 46px;
        float: left;
    }

    .bidPouup .bidPouupMain .bidPouupBtn {
        width: 240px;
        height: 46px;
        color: white;
        line-height: 46px;
        text-align: center;
        border-radius: 4px;
        margin: 0 auto;
        background-color: #f71327;
    }

    .bidPouup .bidPouupMain .bidPouupBtn .bidPouupOffer {
        display: block;
        width: 240px;
        height: 46px;
        color: white;
    }
</style>
