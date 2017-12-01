<template>
    <div class="accInfoEdit">
        <h2 class="accInfoEditTitle">
            <router-link to="/acc/accInfo" >账户信息</router-link> >
            <span >个人信息编辑</span>
        </h2>
        <div class="accInfoEditMain">
            <div class="accInfoEditTop">
                个人信息编辑
            </div>
            <ul class="changPassList">
                <li class="accInfoEditItem">
                    <div class="accInfoEditItem_label">
                        昵称：
                    </div>
                    <div class="accInfoEditItem_text">
                        <input type="text" name="" id="" value="" />
                    </div>
                </li>
                <li class="accInfoEditItem">
                    <div class="accInfoEditItem_label">
                        姓名：
                    </div>
                    <div class="accInfoEditItem_text">
                        <input type="text" name="" id="" value="" />
                    </div>
                </li>
                <li class="accInfoEditItem">
                    <div class="accInfoEditItem_label">
                        联系电话：
                    </div>
                    <div class="accInfoEditItem_text">
                        <input type="tel" name="" id="" value="" />
                    </div>
                </li>
                <li class="accInfoEditItem">
                    <div class="accInfoEditItem_label">
                        Email：
                    </div>
                    <div class="accInfoEditItem_text">
                        <input type="email" name="" id="" value="" />
                    </div>
                </li>
            </ul>
            <div class="accInfoEditBtn">
                <a class="accInfoEditEnsure">确认修改</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AccInfoEdit',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .accInfoEdit {
        width: 982px;
        height: auto;
    }

    .accInfoEdit .accInfoEditTitle {
        width: 982;
        height: 58px;
        line-height: 58px;
        padding: 0 20px;
        margin-bottom: 1px;
        background: white;
    }

    .accInfoEdit .accInfoEditMain {
        width: 100%;
        height: auto;
        background: white;
    }

    .accInfoEdit .accInfoEditMain .accInfoEditTop {
        width: 100%;
        height: 76px;
        font-size: 18px;
        text-align: center;
        color: #ff8000;
        padding-top: 50px;
        margin: 0 auto 26px;
    }

    .accInfoEdit .accInfoEditMain .changPassList {
        width: 700px;
        height: auto;
        padding-left: 282px;
    }

    .accInfoEdit .accInfoEditMain .changPassList .accInfoEditItem {
        width: 100%;
        height: 46px;
        line-height: 46px;
        margin-bottom: 24px;
    }

    .accInfoEdit .accInfoEditMain .changPassList .accInfoEditItem .accInfoEditItem_label {
        float: left;
        width: 84px;
        margin-right: 10px;
    }

    .accInfoEdit .accInfoEditMain .changPassList .accInfoEditItem .accInfoEditItem_text {
        float: left;
        width: 312px;
        height: 46px;
        line-height: 44px;
        border: 1px solid #999;
        border-radius: 4px;
    }

    .accInfoEdit .accInfoEditMain .changPassList .accInfoEditItem .accInfoEditItem_text input {
        width: 310px;
        height: 44px;
        display: block;
        border-radius: 4px;
        text-indent: 20px;
    }

    .accInfoEdit .accInfoEditMain .changPassList .accInfoEditItem .accInfoEditItem_tip {
        float: left;
        width: 100px;
        color: red;
        padding-left: 10px;
    }

    .accInfoEdit .accInfoEditMain .accInfoEditBtn {
        width: 240px;
        height: 138px;
        margin: 50px auto;
        padding-bottom: 80px;
    }

    .accInfoEdit .accInfoEditMain .accInfoEditBtn .accInfoEditEnsure {
        display: block;
        width: 240px;
        height: 58px;
        line-height: 58px;
        text-align: center;
        color: white;
        background: #ff8000;
        font-size: 16px;
        border-radius: 4px;
    }
</style>
