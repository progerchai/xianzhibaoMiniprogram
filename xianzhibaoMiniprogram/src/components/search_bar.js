/*
 *@description: search_bar 搜索框组件封装，其中自定义参数seachType 为搜索框类型：
                1为首页点击跳转，不涉及搜索功能。通过onFocus触发页面跳转
                2为正常搜索框，涉及搜索功能的具体实现
 *@author: progerchai
 *@date: 2020-02-24 09:27:22
*/
import Taro from "@tarojs/taro";
import { AtSearchBar } from "taro-ui";
export default class FqSearchBar extends Taro.Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: "",
      searchType: 1
    };
  }
  onChange(value) {
    this.setState({
      value: value
    });
  }
  onActionClick() {
    console.log("开始搜索");
  }
  onFocus(e) {
    if (this.state.searchType == 1) {
      Taro.navigateTo({ url: "/pages/index/search_page" });
    }
  }
  componentDidShow() {
    const { searchType } = this.props;
    // 获取机型
    this.setState({ searchType });
  }
  render() {
    return (
      <AtSearchBar
        actionName="搜索"
        value={this.state.value}
        onChange={this.onChange.bind(this)}
        onActionClick={this.onActionClick.bind(this)}
        onFocus={this.onFocus.bind(this)}
        searchType={this.state.searchType}
      />
    );
  }
}
