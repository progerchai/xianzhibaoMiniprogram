import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { AtAvatar } from "taro-ui";
// import { connect } from '@tarojs/redux'
import FqBottom from "../../components/bottom";
import FqCard from "../../components/card";
import FqsliceSpace from "../../components/slice_space";
import "./me.scss";

class Me extends Component {
  config = {
    navigationBarTitleText: "我的"
  };
  state = {
    userInfo: null,
    infoCheckStates: "已认证"
  };
  componentWillMount() {
    Taro.getStorage({
      key: "userInfo",
      success: res => {
        console.log(res);
        this.setState({ userInfo: res.data });
      }
    });
  }
  // 用户授权操作后按钮回调
  onGotUserInfo = res => {
    if (res.detail.userInfo) {
      this.setState({ userInfo: res.detail.userInfo });
      Taro.setStorage({
        key: "userInfo",
        data: res.detail.userInfo
      });
      // 返回的信息中包含用户信息则证明用户允许获取信息授权
      console.log("授权成功");
    } else {
      // 用户取消授权，进行提示，促进重新授权
      Taro.showModal({
        title: "温馨提示",
        content: "简单的信任，是你我俩故事的开始",
        showCancel: false // 不展示取消按钮
      });
    }
  };
  render() {
    let { userInfo, infoCheckStates } = this.state;
    return (
      <View className="container">
        {userInfo ? (
          <View className="noUserInfo">
            <AtAvatar
              size="normal"
              circle={true}
              image={userInfo.avatarUrl}
            ></AtAvatar>
            <View className="loginText">
              <Text>{userInfo.nickName}</Text>
              <Text className="infoCheckStatesText">
                身份状态：{infoCheckStates}
              </Text>
            </View>
          </View>
        ) : (
          <Button
            className="loginBtn"
            openType="getUserInfo"
            onGetUserInfo={this.onGotUserInfo}
          >
            <View className="noUserInfo">
              <AtAvatar size="normal" circle text="闲"></AtAvatar>
              <Text className="loginText1">登录</Text>
            </View>
          </Button>
        )}
        <View>
          {/* TODO: icon需要自己提供 */}

          <View className="cardList">
            积分信息 我的订单
            {/* TODO:个人信息中加入实名认证 */}
            <FqCard
              title="个人信息"
              icon_left="laba"
              border_top
              url="123"
            ></FqCard>
            <FqCard
              title="消息中心"
              icon_left="laba"
              border_bottom
              url="456"
            ></FqCard>
          </View>
          <FqsliceSpace
            bgcolor="#f6f7f8"
            width="100%"
            height="14px"
          ></FqsliceSpace>
          <View className="cardList">
            <FqCard
              title="我的收藏"
              icon_left="laba"
              border_bottom
              url="000"
            ></FqCard>
            <FqCard
              title="收货地址"
              icon_left="laba"
              border_bottom
              url="000"
            ></FqCard>
            <FqCard
              title="银行卡信息"
              icon_left="laba"
              border_bottom
              url="555"
            ></FqCard>
            <FqCard title="其他" icon_left="laba" url="555"></FqCard>
          </View>
          <FqsliceSpace
            bgcolor="#f6f7f8"
            width="100%"
            height="14px"
          ></FqsliceSpace>
          <View className="cardList">
            <FqCard
              title="我的优惠券"
              icon_left="laba"
              border_bottom
              url="000"
            ></FqCard>
            <FqCard
              title="我的出售"
              icon_left="laba"
              border_bottom
              url="000"
            ></FqCard>
            <FqCard
              title="意见反馈"
              icon_left="laba"
              border_bottom
              url="555"
            ></FqCard>
            <FqCard title="关与我们" icon_left="laba" url="555"></FqCard>
          </View>
        </View>
        {/* TODO:底部增加auth@proger@gmail.com 身份信息*/}
        <FqBottom current={4}></FqBottom>
      </View>
    );
  }
}

export default Me;
