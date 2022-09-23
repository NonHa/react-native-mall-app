import type { AxiosResponse, AxiosRequestConfig } from 'axios';
import { getToken } from '../common';
import { StackActions } from '@react-navigation/native';
export const ResponseInterceptors = (response: AxiosResponse) => {
  return response.data;
};

export const RequstInterceptors = async (config: AxiosRequestConfig) => {
  const tokenObj = await getToken();
  // console.log('config', config);

  if (tokenObj) {
    Object.assign(config.headers, { Authorization: `Bearer ${tokenObj}` });
  }

  // if (config.method === 'get') {
  // console.log('method', config.params);
  // }
  // console.log('config==>', config);

  // if (!(await getToken())) {
  //   StackActions.replace('Home');
  // }
  return config;
};
