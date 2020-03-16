/*
 *@description: news_block 组件
 *@author: progerchai
 *@date: 2020-03-07 15:05:29
 */
import { Component } from "@tarojs/taro";
import "../assets/styles/news_block.scss";
import { View, Text, Image } from "@tarojs/components";
export default class FqBlock extends Component {
  constructor(props) {
    super(props);
  }

  state = {};

  render() {
    let { active_url, active_intr_text, active_img_url } = this.props;
    return (
      <View className="menu_box">
        <View className="menu_box_content">
          <Image className="menu_box_content_img" src={active_img_url}></Image>
        </View>
      </View>
    );
  }
}
