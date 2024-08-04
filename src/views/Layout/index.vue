<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import { onMounted } from 'vue';
import { useCategoryStore } from '@/stores/category'
const categorystore = useCategoryStore()

//dom加载完毕直接调用getCategory方法渲染导航数据
onMounted(() => categorystore.getCategory())
</script>

<template>
  <LayoutFixed></LayoutFixed>
  <LayoutNav></LayoutNav>
  <LayoutHeader></LayoutHeader>
  <!-- 二级路由出口 -->
   <router-view></router-view>
   <LayoutFooter></LayoutFooter>
</template>