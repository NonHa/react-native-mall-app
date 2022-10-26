import Http from '../utils/http';

export const getHome = () => {
  return Http.get({ url: '/subject/listAll' });
};
