<template>
  <div class="wrap">
      <!-- 公共头部 -->
        <top></top>
        <div class="container">
            <div class="indexMain">
                <sidebar></sidebar>
                <!-- 路由出口 -->
                <!-- 路由匹配到的组件将渲染在这里 -->
                <appMain></appMain>
                <!-- 悬浮框 -->
                <div class="addBill" @click="publishBill">
                  <Icon class="addBillIcon" type="ios-plus-empty"></Icon>
                  <div class="addBillTitle">发布汇票</div>
                </div>
                
            </div>
        </div>
        <!--公共底部-->
        <bottom></bottom>
  </div>
</template>

<script>
    import top from './top'
    import sidebar from './sidebar'
    import appMain from './appMain'
    import bottom from './bottom'

    export default {
        name: 'Layout',
        components:{
            top,
            sidebar,
            appMain,
            bottom
        },
        data() { 
          return {
              oheight:' ' 
          }
        },
        created:function(){
          this.getData('eleManagerLogin');
        },
        methods: { 
        　　publishBill:function(){
                this.$router.push('/out/pub');
            },
            //localStorage取值
            getData:function(key){
                var data = localStorage.getItem(key);
                var dataObj = JSON.parse(data);
                // console.log(dataObj)
                if(dataObj==null||data==''){
                    this.$router.push('/login');
                    return;
                }
                var dataObiTime = ((new Date().getTime() - dataObj.time)/1000/60).toFixed(2);//分钟
                if (dataObiTime>120) {
                    this.$router.push('/login');
                }else{
                    var dataObjToJson = dataObj.data;
                    return dataObjToJson;
                }
            },
        }
    }
</script>

<style>
    .wrap {
        width:100%;
        height: auto;
    }

    .wrap .container {
        min-width: 1280px;
        min-height: 769px;
        background: #f1f1f1;
        padding: 41px 0 42px;
    }

    .wrap .container .indexMain {
        width: 1280px;
        margin: 0 auto;
        min-height: 696px;
        /* position: relative; */
    }

    .addBill{
      position: absolute;
      top: 50%;
      right:20px;
      margin-top: -40px;
      width: 136px;
      height: 136px;
      border-radius: 4px;
      color: white;
      background: #f71327;
      text-align: center;
      padding: 0 26px;
      cursor: pointer;
      z-index: 999;
      /* display: none; */
    }

    .addBill .addBillIcon{
      font-size: 100px;
    }

    .addBill .addBillTitle{
      font-size: 16px;
    }
</style>
