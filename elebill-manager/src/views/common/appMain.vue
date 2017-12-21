<template>
    <div class="indexRight">
        <router-view :key="key"></router-view>
    </div>
</template>

<script>
  export default {
    name: 'appMain',
    computed: {
        key() {
        return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
        }
    }
  }
</script>

<style>
    .indexRight {
        width: 982px;
        min-height: 357px;
        float: left;
    }
</style>
