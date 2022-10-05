import axios from 'axios';
import { BASE_URL, UPLOAD_FILE_URL } from '../constant';
import { ResponseInterceptors, RequstInterceptors } from './interceptors';
import { ContentTypeEnum } from '@/enums/httpEnums';
import { getToken } from '../common';

const instance = axios.create({
  // baseURL: BASE_URL,
  timeout: 500000,
  headers: { 'Content-Type': ContentTypeEnum.JSON },
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
    console.log('response', response);

    return ResponseInterceptors(response);
    // return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么

    return Promise.reject(error);
  },
);

export const uploadFile = async (data) => {
  console.log('param', data);

  const formData = new FormData();

  formData.append('file', data);
  // const options = {};

  // options.body = formData;

  // options.headers = { 'Content-Type': 'multipart/form-data' };

  // options.method = 'POST';

  const headers = { 'Content-Type': 'multipart/json', accept: 'application/json' };

  // await fetch(UPLOAD_FILE_URL, {
  //   method: 'POST',
  //   headers,
  //   body: formData,
  // });
  instance.post(UPLOAD_FILE_URL, formData, {
    headers,
  });
  // return instance.request({
  //   url: UPLOAD_FILE_URL,
  //   method: 'POST',
  //   data: formData,
  //   timeout: 6 * 1000 * 1000,
  //   headers: { 'Content-Type': ContentTypeEnum.JSON },
  // });
};
export default instance;
