import axios from 'axios'

var service = axios.create({
    // baseURL:'http://192.168.11.26',
    // baseURL:'http://www.elebill.com',
    baseURL:'',
    timeout:2000,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    // headers: {'Content-Type': 'application/json'},
    // headers: {'X-Custom-Header':'foobar'}
    // `withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials: true, // 默认的
});

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

  export default service