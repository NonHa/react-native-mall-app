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
    skuCode: number;
  }[];
  price: number;
  productId: number;
  productName: string;
};

export type ProductList = {
  id: number;
  productBrand: string;
  productList: {
    id: number;
    productName: string;
    productPic: string;
    price: number;
    quantity: number;
  }[];
}[];
