import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
// import { connect } from '@tarojs/redux'
import FqSearchBar from "../../components/search_bar";
// import { add, minus, asyncAdd } from '../../actions/counter'

import "./index.scss";

class SearchPage extends Component {
  config = {
    navigationBarTitleText: "搜索"
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="container">
        <FqSearchBar searchType={2} />
      </View>
    );
  }
}

export default SearchPage;
