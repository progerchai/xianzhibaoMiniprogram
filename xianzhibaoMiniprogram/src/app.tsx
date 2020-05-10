import Taro, { Component, Config } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";

import Index from "./pages/index";
import server from "./service";
import configStore from "./store";
import { createStore } from "redux";

import "./app.scss";
import "./assets/fonts/iconfont/iconfont.scss";
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore();

class App extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      "pages/index/index",
      "pages/index/search_page",
      "pages/classification/classification",
      "pages/publish/publish",
      "pages/product/product",
      "pages/product/mark_people",
      "pages/cart/cart",
      "pages/activity/activity",
      "pages/activity/artical",
      "pages/me/me"
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    },
    permission: {
      "scope.userLocation": {
        desc: "你的位置信息将用于小程序位置接口的效果展示"
      }
    }
  };
  componentWillMount() {
    let that = this;
    Taro.getSetting()
      .then(res => {
        if (res.authSetting["scope.userInfo"]) {
          return true;
        } else {
          throw new Error("没有授权");
        }
      })
      .then(res => {
        return Taro.getUserInfo();
      })
      .then(res => {
        Taro.setStorage({
          key: "userInfo",
          data: res.userInfo
        });
        console.log(res.userInfo);
      })
      .catch(err => {
        console.log(err);
      });
    //获取用户openid
    Taro.login({
      success: function(res) {
        if (res.code) {
          that.get_openid(res.code);
          //发起网络请求
        } else {
          console.log("登录失败！" + res.errMsg);
        }
      }
    });
  }
  //function 获取用户openid
  async get_openid(code) {
    let openidResult = await server.auth.getOpenid(code);
    if (openidResult) {
      console.log(openidResult.openid);
      Taro.setStorage({
        key: "openid",
        data: openidResult.openid
      });
    }
  }
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
