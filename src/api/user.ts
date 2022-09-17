import Http from '../utils/http';
enum User {
  login = '/admin/login',
  advertiseList = '/home/advertise/list',
  UserInfo = '/admin/info',
  addMemeber = '/sso/addMemeber',
}

export const userLogin = (data: { username: string; password: string }) => {
  return Http.post(User.login, data);
};

export const getUserInfo = () => {
  return Http.get(User.UserInfo);
};

export const addMemeber = (data) => {
  return Http.post(User.addMemeber, data);
};
