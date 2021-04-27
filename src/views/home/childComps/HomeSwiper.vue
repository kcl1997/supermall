<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'
  import {getHomeMultidata} from "../../../network/home";
  export default {
    name: "HomeSwiper",
    components: {
      SwiperItem,
      Swiper
    },
    //父组件请求数据，然后向子组件传递数据
    props: {
      banners: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
