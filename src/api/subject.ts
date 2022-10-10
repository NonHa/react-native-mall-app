import Http from '../utils/http';
import type { Nagevation } from '../../types/index';
import { SubjectAddParam } from './model/subject';
enum Subject {
  categoryList = '/home/subject/category/list',
  recommendSubject = '/home/recommendSubject/list',
  recommendSubjectInfo = '/home/recommendSubject/info/list',
  recommendSubjectDetail = '/home/recommendSubject/detail',
  subjectCommnet = '/subject/comment/list',
  addSubjectCommnet = '/subject/comment/add',
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

export const recommendSubjectDetail = (data) => {
  return Http.get(Subject.recommendSubjectDetail, { params: data });
};

export const getSubjectCommnet = (data) => {
  return Http.post(Subject.subjectCommnet, data);
};

export const addCommnet = (data: SubjectAddParam) => {
  return Http.post(Subject.addSubjectCommnet, data);
};
