<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<style>
  html,body,#app{
    width: 100%;
    height: 100%;
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
    font-weight: 500;
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
  a:active {
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
