/*
 *@description: 一些公用封装函数 如：request
 *@author: progerchai
 *@email: progerchai@gmail.com
 *@date: 2020-03-16 21:32:44
 */
import Taro from "@tarojs/taro";
import { getStore } from "@tarojs/redux";

import { setCartList } from "../actions/cart";
import { set as setGlobalData, get as getGlobalData } from "./global_data";
import _ from "./lodash.min.js";
import service from "../service";

function jsonToForm(obj) {
  if (_.isEmpty(obj)) {
    return "";
  }

  const formData = _.map(
    obj,
    (v, k) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`
  );

  return formData.join("&");
}

export const request = async params => {
  let { path, data, method = "GET" } = params;
  let contentType = "application/x-www-form-urlencoded";
  contentType = params.contentType || contentType;
  let option = {
    url: requestHost + path,
    data: data,
    method: method,
    //   token暂时用伪造的替代
    header: { "content-type": contentType, token: "faketoken" } // 默认contentType ,预留token
  };
  return await Taro.request(option);
};
