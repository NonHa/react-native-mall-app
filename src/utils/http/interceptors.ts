import type { AxiosResponse, AxiosRequestConfig } from 'axios';
import { getToken } from '../common';
import { StackActions } from '@react-navigation/native';
import { ToastAndroid } from 'react-native';
import { removeToken } from '../../utils/common';
import { BASE_URL, UPLOAD_FILE_URL } from '../constant';

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

  if (tokenObj) {
    Object.assign(config.headers, { Authorization: `Bearer ${tokenObj}` });
  }
  config.url = `${BASE_URL}${config.url}`;
  console.log('config', config);

  // if (config.method === 'get') {
  // console.log('method', config.params);
  // }
  // console.log('config==>', config);

  // if (!(await getToken())) {
  //   StackActions.replace('Home');
  // }
  return config;
};
