<template>
  <TabBar>
    <!--如果是变量用:path，字符串字面量不需要绑定-->
    <!--整个template是父组件，父组件向子组件传递数据-->
    <TabBarItem path="/home" activeColor="red" >
      <img src="~assets/img/tabbar/home.png" alt="" slot="item-icon">
      <img src="~assets/img/tabbar/home_active.png" alt="" slot="item-icon-active">
      <div slot="item-text">
        <div>首页</div>
      </div>
    </TabBarItem>
    <TabBarItem path="/category" activeColor="red">
      <img src="~assets/img/tabbar/categories.png" alt="" slot="item-icon">
      <img src="~assets/img/tabbar/categories_active.png" alt="" slot="item-icon-active">
      <div slot="item-text">
        <div>分类</div>
      </div>
    </TabBarItem>
    <TabBarItem path="/cart" activeColor="red">
      <img src="~assets/img/tabbar/shopcart.png" alt="" slot="item-icon">
      <img src="~assets/img/tabbar/shopcart_active.png" alt="" slot="item-icon-active">
      <div slot="item-text">
        <div>购物车</div>
      </div>
    </TabBarItem>
    <TabBarItem path="/profile" activeColor="red">
      <img src="~assets/img/tabbar/profile.png" alt="" slot="item-icon">
      <img src="~assets/img/tabbar/profile_active.png" alt="" slot="item-icon-active">
      <div slot="item-text">
        <div>我的</div>
      </div>
    </TabBarItem>
  </TabBar>
</template>

<script>
  import TabBarItem from "../common/tabbar/TabBarItem";
  import TabBar from "../common/tabbar/TabBar";
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
