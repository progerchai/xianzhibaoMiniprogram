import { Component } from "@tarojs/taro";
import "../assets/styles/product_list.scss";
import { View, Text, Image } from "@tarojs/components";
export default class FqProductList extends Component {
  constructor(props) {
    super(props);
  }

  state = {};
  handleClickProductItem(id) {
    // 跳转到商品详情页面
    console.log(id);
    // Taro.redirectTo({ url: "/pages/classification/classification?id=" + id });
  }
  render() {
    let { product_list } = this.props;
    return (
      <View className="productflow">
        {product_list.map(item => {
          return (
            <View className="product_item">
              <View className="product_box">
                <Image
                  className="product_image"
                  src={
                    "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1281982941,672088714&fm=26&gp=0.jpg"
                  }
                  mode="widthFix"
                ></Image>
                <View className="product_description">
                  <Text>{item.name}</Text>
                  <Text className="price">{`¥${item.price.toFixed(2)}`}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}
