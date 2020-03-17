import Taro from "@tarojs/taro";

import _ from "../utils/lodash.min.js";
import { request } from "../utils/utils";

export const get_index = async () => {
  const res = await request({
    // path: "get_index",
    path: "index/get_index",
    method: "GET",
    data: null
  });
};

export default {
  get_index
};
