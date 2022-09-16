import type { AxiosResponse, AxiosRequestConfig } from 'axios';
import { getToken } from '../common';
import { StackActions } from '@react-navigation/native';
export const ResponseInterceptors = (response: AxiosResponse) => {
  return response.data;
};

export const RequstInterceptors = async (config: AxiosRequestConfig) => {
  const tokenObj = JSON.parse(await getToken());
  // console.log('tokenObj', tokenObj);

  if (tokenObj) {
    Object.assign(config.headers, { Authorization: `${tokenObj.tokenHead} ${tokenObj.token}` });
  }

  // if (!(await getToken())) {
  //   StackActions.replace('Home');
  // }
  return config;
};
