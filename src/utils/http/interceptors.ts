import type { AxiosResponse, AxiosRequestConfig } from 'axios';
import { getToken } from '../common';
import { StackActions } from '@react-navigation/native';
import { ToastAndroid } from 'react-native';
import { removeToken } from '../../utils/common';
export const ResponseInterceptors = (response: AxiosResponse) => {
  const data = response.data;
  // console.log('response', data);
  if (data.code === 401) {
    console.log('response.code', data.code);

    ToastAndroid.showWithGravityAndOffset(
      '认证信息已过期',
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      25,
      50,
    );
    removeToken();
  }
  return data;
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
