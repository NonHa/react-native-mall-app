import axios from 'axios';
import { BASE_URL } from '../constant';
import { ResponseInterceptors } from './interceptors';
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 500000,
});

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
