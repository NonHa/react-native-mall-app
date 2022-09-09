import Http from '../utils/http';

export const getProductList = (data) => {
  return Http.post('/productCategory/list', data);
};
