<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
  *{
    margin:0;
    padding:0;
    list-style: none;
  }
  body,html{
    width:100%;
    height:100%;
  }
  @media screen and (min-width:320px){
    html{
      font-size:43px;
    }
  }
  @media screen and (min-width:360px){
    html{
      font-size:48px;
    }
  }
  @media screen and (min-width:375px){
    html{
      font-size:50px;
    }
  }
  @media screen and (min-width:412px){
    html{
      font-size:55px;
    }
  }
  @media screen and (min-width:412px){
    html{
      font-size:55px;
    }
  }
  @media screen and (min-width:414px){
    html{
      font-size:55px;
    }
  }
  @media screen and (min-width:750px){
    html{
      font-size:100px;
    }
  }
  a{
    color: #333;
    text-decoration: none;
  }
  body {
    font-family: sans-serif;
    font-size: 0.5rem;
  }
  @font-face { font-family: 'iconfont';  /* project id 432825 */src: url('//at.alicdn.com/t/font_432825_sd57421erpet57b9.eot'); src: url('//at.alicdn.com/t/font_432825_sd57421erpet57b9.eot?#iefix') format('embedded-opentype'),url('//at.alicdn.com/t/font_432825_sd57421erpet57b9.woff') format('woff'),url('//at.alicdn.com/t/font_432825_sd57421erpet57b9.ttf') format('truetype'),url('//at.alicdn.com/t/font_432825_sd57421erpet57b9.svg#iconfont') format('svg');}
  #app{width:100%;height: 100%;}
</style>
