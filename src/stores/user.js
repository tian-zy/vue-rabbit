import { loginAPI } from '@/api/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useCartStore } from './cart'
import { mergeCartAPI } from '@/api/cart'

export const useUserStore = defineStore('user', () => {
  const cartStore = useCartStore()
  // 定义管理用户数据的state
  const userInfo = ref({})
  // 定义获取接口数据的action 函数
  const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    userInfo.value = res.result
    // 合并购物车
    await mergeCartAPI(cartStore.cartList.map(item => {
      return {
        skuId: item.skuId,
        selected: item.selected,
        count: item.count
      }
    }))
    // 重新刷新购物车列表
    cartStore.updateCartList()
  }
  // 清除用户数据  同时清空购物车
  const removeUserInfo = () => {
    userInfo.value = {}
    cartStore.clearList()
  }
  // 以对象的方式把state和action  return出去
  return {
    userInfo,
    getUserInfo,
    removeUserInfo
  }
},{
  persist: true
})