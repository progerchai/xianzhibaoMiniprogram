import Taro, { useShareAppMessage } from "@tarojs/taro";
import { connect } from "@tarojs/redux";
import defaultShareImg from "xxx.jpg";

// 分享商品
function handleShare(product = {}) {
  useShareAppMessage(res => {
    if (res.from === "button") {
      // 来自页面内转发按钮
      console.log(res.target);
    }
    return {
      title: product.name,
      path: `/page/user?pid=${product.pid}`
    };
  });
}

export default handleShare;
