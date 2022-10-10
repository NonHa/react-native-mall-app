export type SubjectItem = {
  id: number;
  pic?: string;
  subjectName: string;
  subjectId: number;
};

export type SubjectItemState = {
  pic: string;
  title: string;
  categoryName: string;
  createTime: string;
  content: string;
  productList: { name: string; price: number }[];
};
