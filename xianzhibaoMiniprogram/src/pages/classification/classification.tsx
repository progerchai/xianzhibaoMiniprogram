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
      { title: "标签页1" },
      { title: "标签页2" },
      { title: "标签页3" },
      { title: "标签页4" },
      { title: "标签页5" },
      { title: "标签页6" }
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
            <View style="font-size:18px;text-align:center;">
              标签页一的内容
            </View>
          </AtTabsPane>
          <AtTabsPane
            tabDirection="vertical"
            current={this.state._current}
            index={1}
          >
            <View style="font-size:18px;text-align:center;">
              标签页二的内容
            </View>
          </AtTabsPane>
          <AtTabsPane
            tabDirection="vertical"
            current={this.state._current}
            index={2}
          >
            <View style="font-size:18px;text-align:center;">
              标签页三的内容
            </View>
          </AtTabsPane>
          <AtTabsPane
            tabDirection="vertical"
            current={this.state._current}
            index={3}
          >
            <View style="font-size:18px;text-align:center;">
              标签页四的内容
            </View>
          </AtTabsPane>
          <AtTabsPane
            tabDirection="vertical"
            current={this.state._current}
            index={4}
          >
            <View style="font-size:18px;text-align:center;">
              标签页五的内容
            </View>
          </AtTabsPane>
          <AtTabsPane
            tabDirection="vertical"
            current={this.state._current}
            index={5}
          >
            <View style="font-size:18px;text-align:center;">
              标签页六的内容
            </View>
          </AtTabsPane>
        </AtTabs>
        <FqBottom current={1}></FqBottom>
      </View>
    );
  }
}

export default Classification;
