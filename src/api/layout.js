import instance from "@/utils/request"

//获取导航列表
export const getCategoryAPI = () => instance.get('/home/category/head')
