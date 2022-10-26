import Http from '../utils/http';

enum Product {
  getInfoById = '/product/info',
  getComment = '/product/comment',
  addProductToCar = '/shopping/car/add',
  addComment = '/product/comment/add',
}

export const getInfoById = (data: { id: number }) => {
  return Http.get({ url: Product.getInfoById, params: data });
};
export const getComment = (data: { id: number; pageNum: number; pageSize: number }) => {
  return Http.get({ url: Product.getComment, params: data });
};
export const addProductToCar = (data: {
  quantity: number;
  price: number;
  productId: number;
  productName: string;
  productSkuId: number;
  productSkuCode: number;
  productAttr: string;
}) => {
  return Http.post({ url: Product.addProductToCar, data });
};

export const addComment = (data: {
  content: string;
  productId: number;
  productName: string;
  star: number;
}) => {
  return Http.post({ url: Product.addComment, data });
};
