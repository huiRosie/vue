<template>
    <div class="helper">
        <div class="helperContent">
            <h2 class="helperTitle">消息中心</h2>
            <div class="helperMain">
                <div class="helperList">
                    <router-link class="helperItem"  to="/helog">
                        <div class="helperItemTitle">
                            <div class="helperItem_dot"></div>
                            <div class="helperItem_text">
                                一笔银票网 注册/登录
                            </div>
                        </div>
                        <div class="helperItemDesc">
                            一笔银票网注册、登录流程，教您如何加入一笔银票网。
                        </div>
                    </router-link>
                    <router-link class="helperItem"  to="/helide">
                        <div class="helperItemTitle">
                            <div class="helperItem_dot"></div>
                            <div class="helperItem_text">
                                一笔银票网认证流程
                            </div>
                        </div>
                        <div class="helperItemDesc">
                            一笔银票网认证流程，让交易彼此多一份信任。
                        </div>
                    </router-link> 
                    <router-link class="helperItem"  to="/helin">
                        <div class="helperItemTitle">
                            <div class="helperItem_dot"></div>
                            <div class="helperItem_text">
                                买家操作流程
                            </div>
                        </div>
                        <div class="helperItemDesc">
                            一笔银票网买家操作详细流程
                        </div>
                    </router-link>
                    <router-link class="helperItem"  to="/helout">
                        <div class="helperItemTitle">
                            <div class="helperItem_dot"></div>
                            <div class="helperItem_text">
                                卖家操作流程
                            </div>
                        </div>
                        <div class="helperItemDesc">
                            一笔银票网买家操作流程，教您如何在一笔银票网出手汇票。
                        </div>
                    </router-link> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Helper',
  data () {
    return {
      msg8: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .helper {
        width: 100%;
        height: auto;
        padding: 20px 0;
    }

    .helper .helperContent {
        width: 1280px;
        height: auto;
        margin: 0 auto;
    }

    .helper .helperContent .helperTitle {
        width: 1280px;
        height: 50px;
        line-height: 50px;
        padding: 0 20px;
        margin-bottom: 1px;
        background: white;
    }

    .helper .helperContent .helperMain {
        width: 1280px;
        height: auto;
        padding: 0 45px;
        background: white;
    }

    .helper .helperContent .helperMain .helperList {
        width: 100%;
        height: auto;
    }

    .helper .helperContent .helperMain .helperList .helperItem {
        display: block;
        width: 1230px;
        height: 89px;
        padding: 24px 20px;
        border-bottom: 1px dashed #e1e1e1;
    }

    .helper .helperContent .helperMain .helperList .helperItem .helperItemTitle {
        width: 100%;
        height: 22px;
        line-height: 22px;
    }

    .helper .helperContent .helperMain .helperList .helperItem .helperItemTitle .helperItem_dot {
        width: 8px;
        height: 8px;
        float: left;
        margin: 6px 5px 8px 0;
        border-radius: 4px;
        background: #f71327;
    }

    .helper .helperContent .helperMain .helperList .helperItem .helperItemTitle .helperItem_text {
        float: left;
        color: #434343;
        font-size: 16px;
    }

    .helper .helperContent .helperMain .helperList .helperItem .helperItemDesc {
        color: #878787;
        font-size: 12px;
        padding-left: 11px;
    }

    .helper .helperContent .helperMain .helperList .helperItemRead {
        background: white;
    }

    .helper .helperContent .helperMain .helperList .helperItemRead .helperItem_dot {
        background: #999;
    }
</style>
