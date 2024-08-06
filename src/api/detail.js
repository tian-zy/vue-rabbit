import instance from "@/utils/request"

//获取商品详情数据
export const getDetailAPI = (id) => instance.get('/goods', { params: { id } })

//获取热榜商品数据
export const getHotGoodsAPI = ({ id, type, limit = 3 }) => instance.get('/goods/hot', { params: { id, type, limit } })