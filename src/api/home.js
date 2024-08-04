import instance from "@/utils/request"

//获取轮播图
export const getBannerAPI = () => instance.get('home/banner')

//新鲜好物
export const findNewAPI = () => instance.get('home/new')

// 人气推荐
export const getHotAPI = () => instance.get('home/hot')
