import axios from 'axios'

const request = axios.create({
  // baseURL: 'https://service.test.nttcc.com.cn',
  timeout: 6000,
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  }
})

request.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
request.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default request
