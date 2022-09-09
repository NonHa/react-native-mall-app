import Http from '../utils/http';
import type { Nagevation } from '../../types/index';
import type { AxiosRequestConfig } from 'axios';
enum Home {
  brandList = '/brand/list',
}
export const getHome = () => {
  return Http.get('/subject/listAll');
};

export const getBrand = (data: Nagevation) => {
  return Http.get(Home.brandList, data);
};
