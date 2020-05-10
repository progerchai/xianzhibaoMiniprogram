import Taro from "@tarojs/taro";

import _ from "../utils/lodash.min.js";
import { request } from "../utils/utils";

//获取用户openid
export const getOpenid = async code => {
  //data={code:'xxxx'}
  const res = await request({
    path: "auth/getOpenid",
    method: "GET",
    data: { code: code }
  });

  if (_.get(res, "statusCode") === 200) {
    return _.get(res, "data");
  }
};

export default {
  getOpenid
};
