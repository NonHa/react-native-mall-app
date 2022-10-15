import Http from '../utils/http';

enum Product {
  getInfoById = '/product/info',
  getComment = '/product/comment',
  addProductToCar = '/shopping/car/add',
}

export const getInfoById = (data: { id: number }) => {
  return Http.get(Product.getInfoById, { params: data });
};

export const addProductToCar = (data: {
  quantity: number;
  price: number;
  productId: number;
  productName: string;
  productSkuId: number;
}) => {
  return Http.post(Product.addProductToCar, data);
};
