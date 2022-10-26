import Http from '../utils/http';
import type { Nagevation } from '../../types/index';
import type { AxiosRequestConfig } from 'axios';
enum Home {
  brandList = '/brand/list',
  advertiseList = '/home/advertise/list',
}
export const getHome = () => {
  return Http.get({ url: '/subject/listAll' });
};

export const getBrand = (data: Nagevation) => {
  return Http.get({ url: Home.brandList, data });
};
export const getAdvertise = (data: Nagevation) => {
  return Http.post({ url: Home.advertiseList, data });
};
