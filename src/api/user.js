import instance from "@/utils/request"

//登录
export const loginAPI = ({ account, password }) => instance.post('/login', { account, password })

// 个人中心 猜你喜欢
export const getLikeListAPI = ({ limit = 4 }) => instance.get('/goods/relevant', { params: { limit } })
