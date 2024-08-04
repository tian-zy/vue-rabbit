import instance from "@/utils/request"

//获取轮播图
export const getBannerAPI = () => instance.get('home/banner')