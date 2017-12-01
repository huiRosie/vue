<template>
    <div class="accountInfo">
        <div class="personInfo">
            <div class="perInfoTop">
                <h2 class="perInfoTitle">个人信息</h2>
                <div class="perInfoEdit">
                    <router-link class='perInfoEditBtn' to='/acc/accInfoEdit'>编辑</router-link>
                </div>
            </div>
            <ul class="perInfoList">
                <li class="perInfoItem">
                    <div class="perInfoItem_label">昵称：</div>
                    <div class="perInfoItem_text">
                        156712889590
                    </div>
                </li>
                <li class="perInfoItem">
                    <div class="perInfoItem_label">联系人：</div>
                    <div class="perInfoItem_text">
                        156712889590
                    </div>
                    <div class="perInfoItem_des">
                        （默认为手机号）
                    </div>
                </li>
                <li class="perInfoItem">
                    <div class="perInfoItem_label">联系电话：</div>
                    <div class="perInfoItem_text">
                        156712889590
                    </div>
                </li>
                <li class="perInfoItem">
                    <div class="perInfoItem_label">联系邮箱：</div>
                    <div class="perInfoItem_text">
                        156712889590
                    </div>
                </li>
            </ul>
        </div>
        <div class="identInfo">
            <div class="identInfoTop">
                <h2 class="identInfoTitle">个人信息</h2>
            </div>
            <ul class="identInfoList">
                <li class="identInfoItem">
                    <div class="identInfoItem_label">个人认证：</div>
                    <div class="identInfoItem_text">
                        未认证
                    </div>
                    <div class="identInfoItem_ident">
                        <router-link class='identInfoItem_identBtn' to='/acc/accInfoIdent'>[去认证]</router-link>
                    </div>
                </li>
                <li class="identInfoItem">
                    <div class="identInfoItem_label">企业认证：</div>
                    <div class="identInfoItem_text">
                        未认证
                    </div>
                    <div class="identInfoItem_ident">
                        <router-link class='identInfoItem_identBtn' to='/acc/accComIdent'>[去认证]</router-link>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AccountInfo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .accountInfo {
        width: 982px;
        height: auto;
    }

    .accountInfo .personInfo {
        padding: 20px;
        width: 982px;
        height: 254px;
        background: white;
        margin-bottom: 1px;
    }

    .accountInfo .personInfo .perInfoTop {
        width: 100%;
        height: 22px;
        line-height: 22px;
        margin-bottom: 10px;
    }

    .accountInfo .personInfo .perInfoTop .perInfoTitle {
        font-size: 16px;
        font-weight: 500;
        text-indent: 10px;
        float: left;
        border-left: 5px solid #ff8000;
    }

    .accountInfo .personInfo .perInfoTop .perInfoEdit {
        float: right;
    }

    .accountInfo .personInfo .perInfoTop .perInfoEdit .perInfoEditBtn {
        color: #ff8000;
    }

    .accountInfo .personInfo .perInfoList {
        padding: 10px;
        width: 942px;
        height: auto;
    }

    .accountInfo .personInfo .perInfoList .perInfoItem {
        width: 100%;
        height: 20px;
        line-height: 20px;
        margin-bottom: 16px;
        overflow: hidden;
    }

    .accountInfo .personInfo .perInfoList .perInfoItem .perInfoItem_label {
        float: left;
    }

    .accountInfo .personInfo .perInfoList .perInfoItem .perInfoItem_text {
        float: left;
    }

    .accountInfo .personInfo .perInfoList .perInfoItem .perInfoItem_des {
        float: left;
        font-size: 12px;
        color: #878787;
    }

    .accountInfo .identInfo {
        padding: 20px;
        width: 982px;
        height: 182px;
        background: white;
    }

    .accountInfo .identInfo .identInfoTop {
        width: 100%;
        height: 22px;
        line-height: 22px;
        margin-bottom: 10px;
    }

    .accountInfo .identInfo .identInfoTop .identInfoTitle {
        font-size: 16px;
        font-weight: 500;
        text-indent: 10px;
        border-left: 5px solid #ff8000;
    }

    .accountInfo .identInfo .identInfoList {
        padding: 10px;
        width: 942px;
        height: auto;
    }

    .accountInfo .identInfo .identInfoList .identInfoItem {
        width: 100%;
        height: 20px;
        line-height: 20px;
        margin-bottom: 16px;
        overflow: hidden;
    }

    .accountInfo .identInfo .identInfoList .identInfoItem .identInfoItem_label {
        float: left;
    }

    .accountInfo .identInfo .identInfoList .identInfoItem .identInfoItem_text {
        float: left;
    }

    .accountInfo .identInfo .identInfoList .identInfoItem .identInfoItem_ident {
        float: left;
        padding-left: 5px;
    }

    .accountInfo .identInfo .identInfoList .identInfoItem .identInfoItem_ident .identInfoItem_identBtn {
        color: #ff8000;
    }
</style>
