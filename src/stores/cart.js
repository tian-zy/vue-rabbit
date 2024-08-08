// 购物车模块
import { delCartAPI, findNewCartListAPI, insertCartAPI } from '@/api/cart'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './user'

export const useCartStore = defineStore('cart', () => {
  // 定义state  cartList
  const cartList = ref([])

  const userStore = useUserStore()
  // const isLogin = computed(() => userStore.userInfo.token)

  // 封装更新头部购物车的action
  const updateCartList = async () => {
    const res = await findNewCartListAPI()
    cartList.value = res.result
  }

  // 定义添加购物车的action 函数
  const addCart = async (goods) => {
    const { skuId, count } = goods
    if (userStore.userInfo.token) {
      // 已登录
      await insertCartAPI({ skuId, count })
      updateCartList()
    } else {
      // 未登录
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
  }

  // 头部购物车商品删除功能 action
  const removeCart = async (skuId) => {
    if (userStore.userInfo.token) {
      await delCartAPI([skuId])
      updateCartList()
    } else {
      cartList.value = cartList.value.filter(item =>item.skuId !== skuId)
    }
    
  }

  // 退出登录清空购物车数据
  const clearList = () => {
    cartList.value = []
  }

  // 头部购物计算商品总数
  const allCount = computed(() => cartList.value.reduce((prev, item) => prev + item.count, 0))

  // 头部购物车计算商品总价
  const allPrice = computed(() => cartList.value.reduce((prev, item) => prev + item.count * item.price, 0))

  // 小选框
  const singleCheck = (i, selected) => {
    cartList.value.find(item => item.skuId === i.skuId).selected = selected
  }

  // 小选控制大选
  const isAll = computed(() => {
    return cartList.value.every(item => item.selected)
  })
  // 大选控制小选
  const allCheck = (selected) => {
    cartList.value.forEach(item => item.selected = selected)
  }

  // 已选商品总数量
  const selCount = computed(() => cartList.value.filter(item => item.selected).reduce((prev, item) => prev + item.count, 0))

  // 已选商品总价
  const selPrice = computed(() => cartList.value.filter(item => item.selected).reduce((prev, item) => prev + item.count * item.price, 0))

  // 以对象的方式把state和action  return出去
  return {
    cartList,
    addCart,
    removeCart,
    allCount,
    allPrice,
    singleCheck,
    isAll,
    allCheck,
    selCount,
    selPrice,
    clearList,
    updateCartList
  }
},{
  persist: true
})