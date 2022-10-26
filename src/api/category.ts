import Http from '../utils/http';

export const getProductList = (data) => {
  return Http.post({ url: '/productCategory/list', data });
};
