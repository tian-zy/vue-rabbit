import instance from "@/utils/request"

// 结算页获取商品及地址数据
export const getCheckoutInfoAPI = () => instance.get('/member/order/pre')