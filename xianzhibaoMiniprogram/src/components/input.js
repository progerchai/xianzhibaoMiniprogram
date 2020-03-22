/*
 *@description: 再次封装at-input组件 适配发布页面
 *@author: progerchai
 *@email: progerchai@gmail.com
 *@date: 2020-03-22 22:50:55
 */
import { Component } from "@tarojs/taro";
import "../assets/styles/input.scss";
import { View, Text } from "@tarojs/components";
import AtInput from "taro-ui";
export default class FqInput extends Component {
  constructor(props) {
    super(props);
  }

  state = {};

  render() {
    let {
      isRed = false,
      name,
      title,
      type,
      placeholder,
      value,
      handleChange
    } = this.props;
    return (
      <View className="input_box">
        <Text className={isRed ? "star red" : "star none"}>*</Text>
        <AtInput
          name={name}
          title={title}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </View>
    );
  }
}
