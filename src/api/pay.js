import instance from "@/utils/request"

// 获取支付订单详情
export const getOrderAPI = (id) => instance.get(`/member/order/${id}`)