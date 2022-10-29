import type { AxiosResponse } from 'axios';
import { BASE_URL, UPLOAD_FILE_URL } from '../constant';
import { ResponseInterceptors, RequstInterceptors } from './interceptors';
import { ContentTypeEnum } from '@/enums/httpEnums';
import { getToken } from '../common';
import VAxios from './VAxios';
import { AxiosTransform } from './axiosTransform';
import type { Result } from '#/axios';
const transform: AxiosTransform = {
  /**
   * @description: 处理请求数据。如果数据不是预期格式，可直接抛出错误
   */
  transformRequestHook: (res: AxiosResponse<Result>) => {
    // console.log('res===>', res);

    return res;
  },
  /**
   * @description: 请求拦截器处理
   */
  requestInterceptors: RequstInterceptors,
  // 请求之前处理config
  beforeRequestHook: (config) => {
    return config;
  },

  /**
   * @description: 响应拦截器处理
   */
  responseInterceptors: ResponseInterceptors,
};

export const uploadFile = (data) => {
  const formData = new FormData();

  formData.append('file', data);

  const headers = { 'Content-Type': 'multipart/form-data', accept: 'application/json' };

  return instance.post(UPLOAD_FILE_URL, formData, {
    headers,
  });
};
export default new VAxios({
  timeout: 500000,
  headers: { 'Content-Type': ContentTypeEnum.JSON },
  transform: transform,
  baseURL: BASE_URL,
});
