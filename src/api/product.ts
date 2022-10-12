import Http from '../utils/http';

enum Product {
  getInfoById = '/product/info',
  getComment = '/product/comment',
}

export const getInfoById = (data: { id: number }) => {
  return Http.get(Product.getInfoById, { params: data });
};

export const getComment = (data: { id: number; pageNum: number; pageSize: number }) => {
  return Http.get(Product.getComment, { params: data });
};
