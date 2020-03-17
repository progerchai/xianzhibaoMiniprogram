/*
 *@description: 轮播图组件
 *@author: progerchai
 *@date: 2020-02-24 10:04:01
 */
import Taro, { Component } from "@tarojs/taro";
import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import "../assets/styles/swiper_img.scss";
export default class FqSwiperImg extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { swiperList } = this.props;
    return (
      <View>
        <Swiper
          className="swiper_img"
          circular
          indicatorDots
          indicatorColor="#999"
          indicatorActiveColor="#333"
          autoplay
        >
          {swiperList.map(item => {
            return (
              <SwiperItem key={item}>
                <Image
                  className="swiper_item"
                  mode="widthFix"
                  src={item.scroll_url}
                ></Image>
              </SwiperItem>
            );
          })}
        </Swiper>
      </View>
    );
  }
}
