<template>
    <div class="index">
        <!--banner-->
        <Banner></Banner>
        <!--四大特点-->
        <!-- <FourFeature></FourFeature> -->
        <!--电票交易流程-->
        <Flow></Flow>
        <!-- 银票列表标题 -->
        <div class="billTitleBox">
            <h2 class="billTitle">优质汇票 · 买到即是赚到</h2>
        </div>
        <!--在售银票列表-->
        <BillList></BillList>
        <!--合作伙伴-->
        <Partner></Partner>
    </div>
</template>

<script>
    import globalData from '../globalData'
    import Partner from '../components/index/partner'
    import Banner from '../components/index/banner'
    // import FourFeature from '../components/index/fourFeature'
    import Flow from '../components/index/flow'
    import BillList from '../components/index/billList'

    export default {
        name: 'Index1',
        components:{
            Partner,
            Banner,
            // FourFeature,
            Flow,
            BillList
        },
        data () {
            return {
                
            }
        },
        created:function(){
            
        },
        methods:{
            
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .index {
        width: 100%;
        height: auto;
        .billTitleBox{
            min-width: 1280px;
            height: 79px;
            background: white;
            margin:2px 0 0;
            .billTitle{
                font-size: 18px;
                width: 1280px;
                height: 79px;
                line-height: 26px;
                margin:0 auto ;
                padding: 26px 0;
                font-weight: 500;
                border-bottom: 1px solid #eee;
            }
        }
    }
</style>
