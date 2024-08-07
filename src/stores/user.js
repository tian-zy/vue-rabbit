import { loginAPI } from '@/api/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  // 定义管理用户数据的state
  const userInfo = ref({})
  // 定义获取接口数据的action 函数
  const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    userInfo.value = res.result
  }
  // 以对象的方式把state和action  return出去
  return {
    userInfo,
    getUserInfo
  }
})