import { Component } from "@tarojs/taro";
import "../assets/styles/product_list.scss";
import { View, Text, Image } from "@tarojs/components";
export default class FqProductList extends Component {
  constructor(props) {
    super(props);
  }

  state = {};
  handleClickProductItem(pid) {
    // 跳转到商品详情页面
    Taro.redirectTo({ url: "/pages/product/product?pid=" + pid });
  }
  render() {
    let { product_list = [] } = this.props;
    return (
      <View className="productflow">
        {product_list.map(item => {
          return (
            <View
              className="product_item"
              onClick={this.handleClickProductItem.bind(this, item.pid)}
            >
              <View className="product_box">
                <Image
                  className="product_image"
                  src={item.image_url1}
                  mode="aspectFill"
                />
              </View>
              <View className="product_description">
                <Text className="prodectText">
                  {item.name},{item.description}
                </Text>
                <View className="price">{`¥ ${item.price.toFixed(2)}`}</View>
              </View>
            </View>
          );
        })}
        <View className="bottomSpace"></View>
      </View>
    );
  }
}
