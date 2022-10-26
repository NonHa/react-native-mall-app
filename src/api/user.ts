import Http from '../utils/http';
import { UserMessage } from '../views/user/message/type';
import { AddressModel } from '@/views/user/address/type';
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
  return Http.post({ url: User.login, data });
};

export const getUserInfo = (params) => {
  return Http.get({ url: User.UserInfo, params });
};

export const addMemeber = (data) => {
  return Http.post({ url: User.addMemeber, data });
};

export const updateMemeber = (data: UserMessage) => {
  return Http.post({ url: User.updateMemeber, data });
};

export const memberAddress = () => {
  return Http.post<AddressModel[]>({ url: User.memberAddress });
};

export const addMemberAddress = (data) => {
  return Http.post({ url: User.addMemberAddress, data });
};
