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
  //点击跳转到相应活动文章
  handleClickArtical(active_url) {
    Taro.navigateTo({
      url:
        "/pages/activity/artical?active_url=" + encodeURIComponent(active_url)
    });
  }
  render() {
    let { props } = this.props;
    return (
      <View>
        {props.map(item => {
          return (
            <View
              className="menu_box"
              onClick={this.handleClickArtical.bind(this, item.active_url)}
            >
              <View className="menu_box_content">
                <Image
                  className="menu_box_content_img"
                  src={item.active_img_url}
                ></Image>
                <Text className="menu_box_text"></Text>
                <Text className="menu_box_text_co">
                  {item.active_intr_text}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}
