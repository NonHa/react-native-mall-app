export type OrderItem = {
  orderSn: string;
  productBrand: string;
  totalPrice: number;
  productList: { name: string }[];
};
