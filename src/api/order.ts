import Http from '../utils/http';
import type { Nagevation } from '#/index';
enum Order {
  orderList = '/order/itemList',
}

export const getOrderList = (data: { status?: number } & Nagevation) => {
  return Http.post(Order.orderList, data);
};
