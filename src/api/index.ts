import Http from '../utils/http';

export const getHome = () => {
  return Http.get('/subject/listAll');
};
