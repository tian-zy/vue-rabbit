import instance from "@/utils/request"

// 加入购物车
export const insertCartAPI = ({ skuId, count }) => instance.post('/member/cart', { skuId, count })

// 获取购物车列表
export const findNewCartListAPI = () => instance.get('/member/cart')

// 删除购物车数据
export const delCartAPI = (ids) => instance.delete('/member/cart', { data: { ids } })
