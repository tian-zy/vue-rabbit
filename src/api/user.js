import instance from "@/utils/request"

//登录
export const loginAPI = ({ account, password }) => instance.post('/login', { account, password })