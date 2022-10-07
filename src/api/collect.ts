import Http from '../utils/http';

enum Collect {
  collectList = '/collect/list',
}

export const getCollectList = (data: { memberId: number; collectType: number }) => {
  return Http.post(Collect.collectList, data);
};
