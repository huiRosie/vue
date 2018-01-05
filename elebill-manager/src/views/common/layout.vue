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
        methods: { 
    　　   publishBill:function(){
            this.$router.push('/out/pub');
          }
        }
    }
</script>

<style>
    .wrap {
        width: 100%;
        height: auto;
    }

    .wrap .container {
        min-width: 1280px;
        min-height: 743px;
        background: #f1f1f1;
        padding: 20px 0;
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

  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  form,
  fieldset,
  input,
  p,
  blockquote,
  th,
  td {
    margin: 0;
    padding: 0;
    border: 0;
  }

  body {
    font-size: 14px;
    color: #555;
    font-family: Verdana, "Microsoft YaHei", Simsun;
  }

  fieldset,
  img {
    border: 0;
  }

  ol,
  ul,
  dl {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: 100;
  }

  em {
    font-style: normal;
  }

  input,
  button,
  select,
  textarea {
    outline: none;
  }

  textarea {
    resize: none;
  }

  b,
  strong {
    font-weight: normal;
  }

  a {
    color: #616161;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    color: #f71327;
    text-decoration: none;
  }

  .clear:before,
  .clearfix:after {
    content: "";
    display: table;
  }

  .clear:after {
    content: ".";
    clear: both;
    display: block;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  .clearfix {
    zoom: 1;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0;
  }
</style>
