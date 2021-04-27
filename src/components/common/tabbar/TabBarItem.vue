<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!--防止插槽替换，class样式消失-->
    <!--style传入一个对象-->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>

</template>

<script>
  export default {
    name: "TabBarItem",
    //组件的属性，从create就固有
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    computed: {
      isActive: {
        get: function () {
          // /home -> item1(/home) = true
          return this.$route.path === this.path
        }
      },
      activeStyle(){
        if(this.isActive){
          return{
            color: this.activeColor
          }
        }else{
          return{}
        }
      }
    },
    data(){
      return{

      }
    },
    methods: {
      itemClick(){
        console.log(this.path);
        //连点两下会报错
        if(this.path === this.$route.path) return
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 2px;
  }


</style>
