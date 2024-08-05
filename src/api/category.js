import instance from "@/utils/request"

//获取一级导航数据
export const getTopCategoryAPI = (id) => instance.get('/category', { params: { id } })

// 获取二级导航数据
export const getCategoryFilterAPI = (id) => instance.get('/category/sub/filter', { params: { id } })
