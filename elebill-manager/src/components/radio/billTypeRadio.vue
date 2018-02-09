
<template>
    <div class="radiobox">
        <div class="radio">
            <Icon type="ios-circle-filled"></Icon>
            <div class="radioLabel">银票</div>
        </div>
        <div class="radio">
            <Icon type="ios-circle-filled"></Icon>
            <div class="radioLabel">商票</div>
        </div>
    </div>
    
</template>

<script>
  export default {
    name: 'BillTypeRadio',
    data() { 
      return {
        
      }
    },
    methods: { 
　　   
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .radiobox{
    width: auto;
    height: 58px;
    overflow: hidden;
    .radio{
      width: 100px;
      float: left;
    }
  }
</style>
