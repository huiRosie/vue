<template>
    <div class="fourFeature">
        <ul class="fourFeatureList">
            <li class="fourFeatureItem">
                <img src="../../../assets/safe.png"/>
                <p class="fourFeatureItemName">安全</p>
            </li>
            <li class="fourFeatureItem">
                <img src="../../../assets/efficient.png"/>
                <p class="fourFeatureItemName">高效</p>
            </li>
            <li class="fourFeatureItem">
                <img src="../../../assets/profession.png"/>
                <p class="fourFeatureItemName">专业</p>
            </li>
            <li class="fourFeatureItem">
                <img src="../../../assets/norm.png"/>
                <p class="fourFeatureItemName">规范</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'FourFeature',
        data() { 
            return {

            }
        }
    }
</script>

<style  scoped>
    .fourFeature {
        min-width: 1280px;
        height: 260px;
        background: white;
        margin-bottom: 1px;
    }

    .index .fourFeature .fourFeatureList {
        width: 1280px;
        height: 260px;
        margin: 0 auto;
        padding-top: 40px;
    }

    .index .fourFeature .fourFeatureList .fourFeatureItem {
        float: left;
        width: 126px;
        text-align: center;
        margin-right: 258px;
    }

    .index .fourFeature .fourFeatureList .fourFeatureItem img {
        display: block;
    }

    .index .fourFeature .fourFeatureList .fourFeatureItem .fourFeatureItemName {
        font-size: 20px;
        color: #444;
        height: 28px;
        line-height: 28px;
        margin: 18px auto;
    }

    .index .fourFeature .fourFeatureList .fourFeatureItem:last-child {
        margin: 0;
    }
</style>


