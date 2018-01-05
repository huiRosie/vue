<template>
    <div class="us">
        <div class="usContent">
            <h2 class="usTitle">联系我们</h2>
            <div class="usMain">
                <ul class="usMainLeft">
                    <li class="usMainLeftItem">
                        <div class="usMainLeftItem_label">
                            客服热线
                        </div>
                        <div class="usMainLeftItem_text">
                            400-9929-272
                        </div>
                    </li>
                    <li class="usMainLeftItem">
                        <div class="usMainLeftItem_label">
                            企业邮箱
                        </div>
                        <div class="usMainLeftItem_text">
                            elebill@163.com
                        </div>
                    </li>
                    <li class="usMainLeftItem">
                        <div class="usMainLeftItem_label">
                            企业官网
                        </div>
                        <div class="usMainLeftItem_text">
                            www.elebill.com
                        </div>
                    </li>
                </ul>
                <div class="usMainRight">
                    <h3 class="usMainRightTitle">公司地址：武汉市洪山区光谷大道41号现代光谷世贸中心A座1108</h3>
                    <div class="usMainRightMap">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Us',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .us {
        width: 100%;
        height: auto;
        background: #f1f1f1;
        padding: 36px 0 50px;
    }

    .us .usContent {
        width: 1280px;
        margin: 0 auto;
    }

    .us .usContent .usTitle {
        width: 100%;
        height: 26px;
        line-height: 26px;
        font-size: 18px;
        margin-bottom: 18px;
    }

    .us .usContent .usMain {
        width: 100%;
        height: 612px;
        overflow: hidden;
    }

    .us .usContent .usMain .usMainLeft {
        width: 206px;
        height: 198px;
        float: left;
        color: white;
        padding: 16px 20px;
        margin-right: 16px;
        background-image: linear-gradient(
            134deg, 
            rgba(253, 189, 21, 0.5), 
            rgba(244, 38, 38, 0.5)), 
            linear-gradient(#ff8000, #ff8000);
    }

    .us .usContent .usMain .usMainLeft .usMainLeftItem {
        margin-bottom: 10px;
    }

    .us .usContent .usMain .usMainLeft .usMainLeftItem .usMainLeftItem_text {
        font-size: 16px;
    }

    .us .usContent .usMain .usMainRight {
        width: 1055px;
        height: 612px;
        float: left;
    }

    .us .usContent .usMain .usMainRight .usMainRightTitle {
        width: 100%;
        height: 60px;
        line-height: 60px;
        color: #434343;
        background: white;
        text-indent: 20px;
    }

    .us .usContent .usMain .usMainRight .usMainRightMap {
        width: 1055px;
        height: 552px;
    }
</style>
