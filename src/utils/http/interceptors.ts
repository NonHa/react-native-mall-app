import type { AxiosResponse } from 'axios';

export const ResponseInterceptors = (response: AxiosResponse) => {
  console.log('response', response);
  return response.data;
};
