import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { AtAvatar, AtBadge } from "taro-ui";
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
    infoCheckStates: "已认证",
    // TODO:订单数据的徽标数量
    orderAmountByStatus: [1, 2, 0, 1]
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
  //查看全部订单
  handleClickOrder(index) {
    console.log("订单页面跳转-->", index);
    // Taro.navigateTo({
    //   url: '/pages/order/order?current=' + index
    // });
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
    let { userInfo, infoCheckStates, orderAmountByStatus } = this.state;
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
            <FqCard
              title="我的订单"
              message="查看全部订单"
              icon_left="none"
              noClickFunction={true}
              border_bottom={false}
              extraOnClick={this.handleClickOrder.bind(this, 0)}
              childrenExit={true}
            >
              <View className="at-row">
                <View
                  className="at-col at-col-3 order-item"
                  onClick={this.handleClickOrder.bind(this, 1)}
                >
                  {orderAmountByStatus[0] ? (
                    <AtBadge value={orderAmountByStatus[0]}>
                      <View className="at-icon at-icon-credit-card order-item-icon"></View>
                    </AtBadge>
                  ) : (
                    <View className="at-icon at-icon-credit-card order-item-icon"></View>
                  )}
                  <View className="order-item-text">待付款</View>
                </View>
                <View
                  className="at-col at-col-3 order-item"
                  onClick={this.handleClickOrder.bind(this, 2)}
                >
                  {orderAmountByStatus[1] ? (
                    <AtBadge value={orderAmountByStatus[1]}>
                      <View className="at-icon at-icon-shopping-bag order-item-icon"></View>
                    </AtBadge>
                  ) : (
                    <View className="at-icon at-icon-shopping-bag order-item-icon"></View>
                  )}
                  <View className="order-item-text">待发货</View>
                </View>
                <View
                  className="at-col at-col-3 order-item"
                  onClick={this.handleClickOrder.bind(this, 3)}
                >
                  {orderAmountByStatus[2] ? (
                    <AtBadge value={orderAmountByStatus[2]}>
                      <View className="at-icon at-icon-shopping-cart order-item-icon"></View>
                    </AtBadge>
                  ) : (
                    <View className="at-icon at-icon-shopping-cart order-item-icon"></View>
                  )}
                  <View className="order-item-text">待收货</View>
                </View>
                <View
                  className="at-col at-col-3 order-item"
                  onClick={this.handleClickOrder.bind(this, 4)}
                >
                  {orderAmountByStatus[3] ? (
                    <AtBadge value={orderAmountByStatus[3]}>
                      <View className="at-icon at-icon-message order-item-icon"></View>
                    </AtBadge>
                  ) : (
                    <View className="at-icon at-icon-message order-item-icon"></View>
                  )}
                  <View className="order-item-text">待评价</View>
                </View>
              </View>
            </FqCard>
          </View>
          <View className="cardList">
            积分信息
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
              title="我的出售"
              icon_left="laba"
              border_bottom
              url="000"
            ></FqCard>
            <FqCard
              title="我的收藏"
              icon_left="laba"
              border_bottom
              url="000"
            ></FqCard>
            <FqCard
              title="我的优惠券"
              icon_left="laba"
              border_bottom
              url="555"
            ></FqCard>
          </View>
          <FqsliceSpace
            bgcolor="#f6f7f8"
            width="100%"
            height="14px"
          ></FqsliceSpace>
          <View className="cardList">
            <FqCard
              title="银行卡信息"
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
