import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
// import { connect } from '@tarojs/redux'
import FqBottom from "../../components/bottom";
import { AtTabs, AtTabsPane } from "taro-ui";

import "./classification.scss";

class Classification extends Component {
  config = {
    navigationBarTitleText: "分类"
  };
  state = {
    // eslint-disable-next-line taro/duplicate-name-of-state-and-props
    _current: 0,
    tabList: [
      { title: "淘书籍" },
      { title: "淘潮牌" },
      { title: "淘美妆" },
      { title: "淘电子" },
      { title: "淘生活" }
    ],
    model: ""
  };

  handleClick(value) {
    if (value === this.state._current) return;
    this.setState({
      _current: value
    });
  }
  render() {
    return (
      <View className="container">
        <AtTabs
          animated={false}
          current={this.state._current}
          tabDirection="vertical"
          tabList={this.state.tabList}
          onClick={this.handleClick.bind(this)}
          height="100vh"
        >
          <AtTabsPane
            tabDirection="vertical"
            current={this.state._current}
            index={0}
          >
            <View style="font-size:18px;text-align:center;">淘书籍的内容</View>
          </AtTabsPane>
          <AtTabsPane
            tabDirection="vertical"
            current={this.state._current}
            index={1}
          >
            <View style="font-size:18px;text-align:center;">淘潮牌的内容</View>
          </AtTabsPane>
          <AtTabsPane
            tabDirection="vertical"
            current={this.state._current}
            index={2}
          >
            <View style="font-size:18px;text-align:center;">淘美妆的内容</View>
          </AtTabsPane>
          <AtTabsPane
            tabDirection="vertical"
            current={this.state._current}
            index={3}
          >
            <View style="font-size:18px;text-align:center;">淘电子的内容</View>
          </AtTabsPane>
          <AtTabsPane
            tabDirection="vertical"
            current={this.state._current}
            index={4}
          >
            <View style="font-size:18px;text-align:center;">淘生活的内容</View>
          </AtTabsPane>
        </AtTabs>
        <FqBottom current={1}></FqBottom>
      </View>
    );
  }
}

export default Classification;
