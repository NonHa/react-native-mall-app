export type CarBottomBtnProps = {
  JoinCar: () => void;
};

export type BuyModelProps = {
  attributeList: { id: number; inputList: string; name: string }[];
  skuList: {
    id: number;
    stock: number;
    pic: string;
    spData: string;
    selectType: {};
    price: number;
  }[];
  price: number;
  productId: number;
  productName: string;
};
