
<!--最组件进行封装，填充具体的数据样式，数据处理-->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <home-swiper :banners="banners" ></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>


  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import {getHomeMultidata} from '../../network/home'

  // import Swiper from "../../components/common/swiper/Swiper";
  // import SwiperItem from "../../components/common/swiper/SwiperItem";
  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommendView from "./childComps/HomeRecommendView";



  export default {
    name: "Home",
    components: {
      HomeRecommendView,
      NavBar,
      HomeSwiper
      },
    data(){
      return{
        banners: [],
        recommends: []
      }
    },
    created() {
      //请求更多个数据
      getHomeMultidata().then(res=>{
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      }).catch(err=>{
        console.log(err);
      })
    }

  }



</script>



<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: white;
  }

</style>
