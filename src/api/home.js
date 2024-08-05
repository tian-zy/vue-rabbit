import instance from "@/utils/request"

// 获取轮播图
// 默认为1，商品为2
export const getBannerAPI = ({ distributionSite = '1' } = {}) => instance.get('home/banner', {
  params: { distributionSite }  
})

//新鲜好物
export const findNewAPI = () => instance.get('home/new')

// 人气推荐
export const getHotAPI = () => instance.get('home/hot')

// 商品模块
export const getGoodsAPI = () => instance.get('home/goods')

