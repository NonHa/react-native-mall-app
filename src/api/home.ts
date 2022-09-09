import Http from '../utils/http';

export const getHome = () => {
  return Http.get('/subject/listAll');
};

export const getBrand = (data) => {
  return Http.get('/brand/list', data);
};
