import instance from "@/utils/request"

//获取一级导航数据
export const getTopCategoryAPI = (id) => instance.get('/category', { params: { id } })