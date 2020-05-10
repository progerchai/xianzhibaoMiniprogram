import Taro from "@tarojs/taro";

import _ from "../utils/lodash.min.js";
import { request } from "../utils/utils";

//获取首页数据
export const get_index_message = async () => {
  const res = await request({
    path: "index/get_index_message",
    method: "GET",
    data: null
  });
  if (_.get(res, "statusCode") === 200) {
    return _.get(res, "data");
  }
};

//获取首页商品列表
export const get_index_products = async () => {
  const res = await request({
    path: "index/get_index_products",
    method: "GET",
    data: null
  });
  if (_.get(res, "statusCode") === 200) {
    return _.get(res, "data");
  }
};

//获取商品详情
export const get_product_detail = async pid => {
  const res = await request({
    path: "index/get_product_detail",
    method: "GET",
    data: { pid: pid }
  });
  if (_.get(res, "statusCode") === 200) {
    return _.get(res, "data");
  }
};
export default {
  get_index_message,
  get_index_products,
  get_product_detail
};
