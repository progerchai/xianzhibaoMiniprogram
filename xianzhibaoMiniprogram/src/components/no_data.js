/*
 *@description: 空数据组件
 *@author: progerchai
 *@date: 2020-03-16 14:53:23
 */
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import IconFont from "../components/iconfont";
import "../assets/styles/no_data.scss";

export default class NoData extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { desc, icon, fontsize = 200 } = this.props;
    return (
      <View className="noData">
        <IconFont
          className="noData_icon"
          name={icon || "wushuju"}
          size={fontsize}
        />
        <Text className="noDataDesc">{desc || "暂无数据～"}</Text>
      </View>
    );
  }
}
