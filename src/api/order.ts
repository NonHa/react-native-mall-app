import Http from '../utils/http';
import type { Nagevation } from '#/index';
enum Order {
  orderList = '/order/itemList',
  payOrder = '/order/pay',
  confirmOrder = '/order/confirmOrder',
}

export const getOrderList = (data: { status?: number } & Nagevation) => {
  return Http.post({ url: Order.orderList, data });
};

export const payOrder = (data: { orderId: string; orderItemIds: number[] }) => {
  return Http.post({ url: Order.payOrder, data });
};

export const confirmOrder = (data: { orderItemIds: number[] }) => {
  return Http.post({ url: Order.confirmOrder, data });
};
