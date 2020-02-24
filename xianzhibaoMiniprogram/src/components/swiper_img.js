/*
 *@description: 轮播图组件
 *@author: progerchai
 *@date: 2020-02-24 10:04:01
 */
import Taro from "@tarojs/taro";
import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import "../assets/styles/swiper_img.scss";
export default class FqSwiperImg extends Taro.Component {
  constructor() {
    super(...arguments);
    this.state = {
      swiperList: []
    };
  }

  componentDidShow() {
    const { swiperList } = this.props;
    this.setState({ swiperList });
  }
  render() {
    let { swiperList } = this.state;
    return (
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
            <SwiperItem>
              <Image className="swiper_item" mode="widthFix" src={item}></Image>
            </SwiperItem>
          );
        })}
      </Swiper>
    );
  }
}
