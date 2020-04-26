/*
 *@description: 卡片效果封装组件，传入参数为
 *              title（左侧文本）
 *              icon_left（左侧图标）
 *              message（右侧文本）
 *              icon_right（右侧图标）
 *@author: progerchai
 *@date: 2020-02-25 16:29:35
 */
import Taro, { Component } from "@tarojs/taro";
import "../assets/styles/card.scss";
import { View, Text } from "@tarojs/components";
import { AtIcon } from "taro-ui";
export default class FqCard extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    title: "",
    icon_left: "",
    message: "",
    icon_right: ""
  };
  componentWillMount() {
    const { title, icon_left, message, icon_right } = this.props;
    this.setState({ title, icon_left, message, icon_right });
  }
  render() {
    const {
      title,
      icon_left,
      message,
      icon_right,
      border_top = false,
      border_bottom = true
    } = this.props;
    return (
      <View
        className={`card_box ${border_top ? "borderTop" : ""} ${
          border_bottom ? "borderBottom" : ""
        }`}
      >
        <View className="left">
          <AtIcon prefixClass="icon" value={icon_left} size="20"></AtIcon>
          <Text className="card_box_text">{title}</Text>
        </View>
        <View className="right">
          <Text className="card_box_text">{message}</Text>
          <AtIcon prefixClass="icon" value={icon_right} size="20"></AtIcon>
        </View>
      </View>
    );
  }
}
