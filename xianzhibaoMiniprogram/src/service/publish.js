import Taro from "@tarojs/taro";

import _ from "../utils/lodash.min.js";
import { request } from "../utils/utils";

//用户上传商品数据
export const upload_goods = async data => {
  const res = await request({
    path: "publish/upload_goods",
    method: "POST",
    data: data
  });

  if (_.get(res, "statusCode") === 200) {
    return _.get(res, "data");
  }
};

export default {
  upload_goods
};
