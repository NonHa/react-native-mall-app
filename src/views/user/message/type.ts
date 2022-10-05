export type UserMessage = {
  id: number;
  username: string;
  job: string;
  gender: string;
  birthday: Date;
  personalizedSignature: string;
  nickname: string;
  city: string;
  categoryList: Array<{ name: string }>;
};
