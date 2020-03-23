/*
 *@description: 再次封装picker组件 用以适配发布页面
 *@author: progerchai
 *@email: progerchai@gmail.com
 *@date: 2020-03-22 22:50:02
 */
import Taro, { Component } from "@tarojs/taro";
import "../assets/styles/picker.scss";
import { View, Text, Picker } from "@tarojs/components";
export default class FqPicker extends Component {
  constructor(props) {
    super(props);
  }

  state = {};
  render() {
    const {
      isRed = false,
      selector,
      title,
      selectorChecked,
      onSelectChange
    } = this.props;
    return (
      <View className="picker_box">
        <Text className={isRed ? "star red" : "star none"}>*</Text>
        <Picker
          className="picker_content"
          mode="selector"
          range={selector}
          onChange={onSelectChange.bind(this)}
        >
          <Text className="picker">{title}</Text>
          <Text className="picker_result">{selectorChecked}</Text>
        </Picker>
      </View>
    );
  }
}
