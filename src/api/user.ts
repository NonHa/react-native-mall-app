import Http from '../utils/http';
enum User {
  login = '/admin/login',
  advertiseList = '/home/advertise/list',
  UserInfo = '/sso/info',
  addMemeber = '/sso/addMemeber',
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
