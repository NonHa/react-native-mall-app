import Http from '../utils/http';
import type { Nagevation } from '../../types/index';

enum Subject {
  categoryList = '/home/subject/category/list',
  recommendSubject = '/home/recommendSubject/list',
  recommendSubjectInfo = '/home/recommendSubject/info/list',
}
export const getSubjectCategoryList = () => {
  return Http.get(Subject.categoryList);
};

export const recommendSubject = (data) => {
  return Http.post(Subject.recommendSubject, data);
};
export const recommendSubjectInfo = (data) => {
  return Http.post(Subject.recommendSubjectInfo, data);
};
