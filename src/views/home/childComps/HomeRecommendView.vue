<template>
  <div id="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>

</template>

<script>


  export default {
    name: "HomeRecommendView",
    props: {
      recommends: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  #recommend{
    /* flex布局 内容太大，会超过屏幕宽度 */
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 14px;
    padding: 10px 0 15px 0;
    border-bottom: 8px solid #eee;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 68px;
    height: 68px;
    margin-bottom: 8px;
  }
</style>
