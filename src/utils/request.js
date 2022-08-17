import axios from "axios"

const instance = axios.create({
  baseURL: '/api',
  timeout: 3000,
  // withCredentials: true
})

// 请求拦截器
instance.interceptors.request.use(config => {
      return config
    }, err => {
      return Promise.reject(err)
    }
)

// 响应拦截器
instance.interceptors.response.use(res => {
  return res
}, err => {
  return Promise.reject(err)
})

export default (url, method, submitData) => {
  return instance({
    url,
    method,
    // get: 使用 params
    // post: 使用 data
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
