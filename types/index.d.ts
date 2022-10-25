export type Nagevation = {
  page: number;
  pageSize: number;
};

export type UserInfo = {
  id: number;
  username: string;
  job: string;
  gender: string | number;
  birthday: Date;
  personalizedSignature: string;
  nickname: string;
  city: string;
  categoryList: Array<{ name: string }>;
  icon?: string;
};
