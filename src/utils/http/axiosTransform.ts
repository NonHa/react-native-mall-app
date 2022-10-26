import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import type { Result } from '#/axios';

export interface CreateAxiosOptions extends AxiosRequestConfig {
  authenticationScheme?: string;
  transform?: AxiosTransform;
}

export abstract class AxiosTransform {
  beforeRequestHook?: (config: AxiosRequestConfig) => AxiosRequestConfig;

  transformRequestHook?: (res: AxiosResponse<Result>) => any;

  /**
   * @description: 请求之前的拦截器
   *
   */
  requestInterceptors?: (config: AxiosRequestConfig) => Promise<any>;
  /**
   * @description: 请求之后的拦截器
   *
   */
  responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>;
  /**
   * @description: 请求之前的拦截器错误处理
   *
   */
  requestInterceptosCatch?: (error: Error) => void;
  /**
   * @description: 请求之后的拦截器错误处理
   *
   */
  responseInterceptosCatch?: (error: Error) => void;
}
