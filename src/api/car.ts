import Http from '../utils/http';

enum Car {
  carList = '/shopping/car/list',
}

export const getCarList = () => {
  return Http.post(Car.carList);
};
