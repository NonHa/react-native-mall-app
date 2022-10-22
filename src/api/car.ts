import Http from '../utils/http';

enum Car {
  carList = '/shopping/car/list',
  generateOrder = '/order/generate',
  confirmOrder = '/order/confirm',
}

export const getCarList = () => {
  return Http.post(Car.carList);
};
export const confirmOrder = (data) => {
  return Http.post(Car.confirmOrder, data);
};
export const generateOrder = (data: {
  memberReceiveAddressId?: number;
  couponId?: number;
  payType?: number;
  cartIds: number[];
}) => {
  return Http.post(Car.generateOrder, data);
};
