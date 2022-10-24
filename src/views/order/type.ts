export type OrderItem = {
  orderSn: string;
  productBrand: string;
  totalPrice: number;
  productList: { name: string; id: number; discription: string; productPic: string }[];
};

export type OrderCommentRef = {
  selectStar: number;
  inputText: string;
};
