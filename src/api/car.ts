import Http from '../utils/http';

enum Car {
  carList = '/shopping/car/list',
  generateOrder = '/order/generate',
}

export const getCarList = () => {
  return Http.post(Car.carList);
};

export const generateOrder = (data: {
  memberReceiveAddressId?: number;
  couponId?: number;
  memberReceiveAddressId?: number;
  payType?: number;
  cartIds: number[];
}) => {
  return Http.post(Car.generateOrder, data);
};
