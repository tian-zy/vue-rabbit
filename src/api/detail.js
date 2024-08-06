import instance from "@/utils/request"

//获取商品详情数据
export const getDetailAPI = (id) => instance.get('/goods', { params: { id } })