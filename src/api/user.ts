import Http from '../utils/http';
import { UserMessage } from '../views/user/message/type';
enum User {
  login = '/admin/login',
  advertiseList = '/home/advertise/list',
  UserInfo = '/sso/info',
  addMemeber = '/sso/addMemeber',
  updateMemeber = '/sso/updateMemeber',
  memberAddress = '/member/address/list',
  addMemberAddress = '/member/address/add',
}

export const userLogin = (data: { username: string; password: string; platform: string }) => {
  return Http.post(User.login, data);
};

export const getUserInfo = (params) => {
  return Http.get(User.UserInfo, { params });
};

export const addMemeber = (data) => {
  return Http.post(User.addMemeber, data);
};

export const updateMemeber = (data: UserMessage) => {
  return Http.post(User.updateMemeber, data);
};

export const memberAddress = () => {
  return Http.post(User.memberAddress);
};

export const addMemberAddress = (data) => {
  return Http.post(User.addMemberAddress, data);
};
