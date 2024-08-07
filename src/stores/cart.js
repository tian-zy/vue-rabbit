// 购物车模块
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // 定义state  cartList
  const cartList = ref([])

  // 定义添加购物车的action 函数
  const addCart = (goods) => {
    // 添加购物车操作
    // 已添加过 - count + 1
    // 没有添加过 - 直接push
    // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
    const item = cartList.value.find(item => item.skuId === goods.skuId)
    if (item) {
      // 找到了
      item.count++
    } else {
      // 没找到
      cartList.value.push(goods)
    }
  }
  // 头部购物车商品删除功能 action
  const removeCart = (skuId) => {
    cartList.value = cartList.value.filter(item =>item.skuId !== skuId)
  }

  // 以对象的方式把state和action  return出去
  return {
    cartList,
    addCart,
    removeCart
  }
},{
  persist: true
})