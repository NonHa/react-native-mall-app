import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
import axios from 'axios';
import { Result, RequestOptions } from '#/axios';
import { BASE_URL, UPLOAD_FILE_URL } from '../constant';
import { CreateAxiosOptions } from './axiosTransform';
import { isFunction } from '../is';
class VAxios {
  config: CreateAxiosOptions;
  instance: AxiosInstance;
  constructor(options: CreateAxiosOptions) {
    this.config = options;
    this.instance = axios.create(options);
    this.setupInterceptors();
  }
  private getTransform() {
    const { transform } = this.config;
    return transform;
  }
  private setupInterceptors() {
    const transform = this.getTransform();
    if (!transform) {
      return;
    }
    const {
      requestInterceptosCatch,
      responseInterceptors,
      responseInterceptosCatch,
      requestInterceptors,
    } = transform;

    requestInterceptosCatch &&
      isFunction(requestInterceptosCatch) &&
      this.instance.interceptors.request.use(undefined, requestInterceptosCatch);
    this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
      if (requestInterceptors && isFunction(requestInterceptors)) {
        config = requestInterceptors(config);
      }
      return config;
    }, undefined);
    this.instance.interceptors.response.use((res: AxiosResponse) => {
      if (responseInterceptors && isFunction(responseInterceptors)) {
        res = responseInterceptors(res);
      }
      return res;
    }, undefined);

    responseInterceptosCatch &&
      isFunction(responseInterceptosCatch) &&
      this.instance.interceptors.response.use(undefined, responseInterceptosCatch);
  }
  // 类型参数的作用，T决定AxiosResponse实例中data的类型
  request<T = any>(config: CreateAxiosOptions, options?: RequestOptions): Promise<Result<T>> {
    const transform = this.getTransform();

    const { beforeRequestHook, requestCatchHook, transformRequestHook } = transform || {};

    return new Promise((resolve, reject) => {
      this.instance
        .request<any, AxiosResponse<Result>>(config)
        .then((res: AxiosResponse<Result>) => {
          if (transformRequestHook && isFunction(transformRequestHook)) {
            try {
              const ret = transformRequestHook(res);
              resolve(ret as Result<T>);
            } catch (err) {
              reject(err || new Error('request error!'));
            }
            return;
          }
          resolve(res as unknown as Promise<Result<T>>);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<Result<T>> {
    return this.request({ ...config, method: 'GET' }, options);
  }

  post<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<Result<T>> {
    return this.request({ ...config, method: 'POST' }, options);
  }

  delete<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<Result<T>> {
    return this.request({ ...config, method: 'DELETE' }, options);
  }

  patch<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<Result<T>> {
    return this.request({ ...config, method: 'PATCH' }, options);
  }

  uploadFile = (data) => {
    const formData = new FormData();

    formData.append('file', data);

    const headers = { 'Content-Type': 'multipart/form-data', accept: 'application/json' };

    return this.instance.post(UPLOAD_FILE_URL, formData, {
      headers,
    });
  };
}

export default VAxios;
