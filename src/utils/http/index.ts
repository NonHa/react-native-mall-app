import axios from 'axios';
import { BASE_URL } from '../constant';
import { ResponseInterceptors, RequstInterceptors } from './interceptors';
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 500000,
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return RequstInterceptors(config);
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  function (response) {
    return ResponseInterceptors(response);
    // return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么

    return Promise.reject(error);
  },
);
export default instance;
