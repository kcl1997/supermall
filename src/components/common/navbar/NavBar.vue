<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    /*可以将真个div撑起来，不需要height了, 但是里面必须要有内容*/
    line-height: 44px;
    text-align: center;


    /*
     h-shadow v-shadow
      blur 模糊距离
       spread 阴影大小
        color 阴影颜色
    */
    box-shadow: 0 1px 1px rgba(100,100,100,.1);

  }

  .left, .right {
    width: 60px;
    /*background: red;*/
  }
  .center {
    flex: 1;
    /*background: #42b983;*/
  }


</style>
