export enum ServiceType {
  safe_return = 1, //无忧退货
  quick_refund = 2, // 快速退款
  free_package_mail = 3, //免费包邮
}
// 0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭；5->无效订单'
export enum OrderStatus {
  obligation = 0,
  pending = 1,
  waitreceive = 2,
  waitConment = 3,
}
// 0->未确认；1->已确认
export enum OrderConfirmStatus {
  unconfirmed = 0,
  confirmed = 1,
}
