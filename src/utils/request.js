import axios from "axios"
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from '@/stores/user';
import router from "@/router";

// 创建实例时配置默认值
const instance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 15000
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response.data
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  // 登录失败的情况
  ElMessage({
    type: 'warning',
    message: error.response.data.message
  })
  // 401 token 失效处理
  // 1.清除本地用户数据
  // 2.跳转到登录页
  const userStore = useUserStore()
  if(error.response.status === 401) {
    userStore.removeUserInfo()
    router.push('/login')
  }
  return Promise.reject(error);
});

export default instance

