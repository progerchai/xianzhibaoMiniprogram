import Taro, { Component } from "@tarojs/taro";
import {
  View,
  Button,
  Text,
  Swiper,
  SwiperItem,
  Image
} from "@tarojs/components";
import { AtIcon } from "taro-ui";

import "./product.scss";

class Cart extends Component {
  config = {
    navigationBarTitleText: "商品详情"
  };
  state = {
    product: {
      name: "水乳套装",
      sellerInfo: {
        nickName: "哎呦喂。",
        avatarUrl:
          "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ5gUpejVfCsXgoyt8eVPHHib964DTINsqR8C2G98yT5W7kM6icU154UgWYpDicTKlLwFiblqicAfFqOOQ/132",
        userInfoPage: 12,
        integral: 650
      },
      pid: 1,
      pImgList: [
        "https://a.vpimg2.com/upload/merchandise/pdcpos/1100005068/2020/0318/156/85c8923e-acaa-4a54-9120-9b59191bf0f4.jpg",
        "https://img.alicdn.com/img/bao/uploaded/i4/i4/2959591039/O1CN01DEz3E01JXu1qhmdIL_!!0-item_pic.jpg_540x540Q50s50.jpg"
      ],
      price: 139.0,
      description:
        "温碧泉八杯睡补水保湿水乳套装，啥衮服水乳液面霜男女化妆护肤品",
      modelText: "八杯水套盒",
      comments: []
    }
  };
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  render() {
    let { product } = this.state;
    return (
      <View className="container">
        <Swiper
          indicatorColor="#999"
          indicatorActiveColor="#333"
          vertical={false}
          circular
          indicatorDots
          autoplay
        >
          {product.pImgList.map(item => {
            return (
              <SwiperItem className="swiper">
                <Image
                  className="product_image"
                  src={item}
                  mode="aspectFill"
                ></Image>
              </SwiperItem>
            );
          })}
        </Swiper>
        <View className="headerContent">
          <View className="left">
            <Text className="name">
              {product.name}afafakjfasfbhasfhaksfkjasfhakj
            </Text>
            <Text className="description">{product.description}</Text>
          </View>
          <View className="right">
            <AtIcon
              prefixClass="icon"
              value="share"
              size="30"
              color="#6190e8"
            />
          </View>
          <View className="feeAndNumber">
            <View className="leftText">
              <Text>运费：¥0</Text>
            </View>
            <View className="rightText">
              <Text> 库存：1</Text>
            </View>
          </View>
        </View>

        <View className="sellerMessageContent">
          <Image className="sellerAvatar" src={product.sellerInfo.avatarUrl} />
          <Text>
            卖家信用分:
            <Text className="integral">{product.sellerInfo.integral}</Text>
          </Text>
          <View className="toDetail">
            <Text>查看详情</Text>
            <AtIcon prefixClass="icon" value="right" size="20" color="#000" />
          </View>
        </View>
        <View className="commentContent">
          <Text className="commentLeft">评价</Text>
          <Text className="commentRight">
            {product.comments.length ? "" : "暂无评价"}
          </Text>
        </View>
      </View>
    );
  }
}

export default Cart;
