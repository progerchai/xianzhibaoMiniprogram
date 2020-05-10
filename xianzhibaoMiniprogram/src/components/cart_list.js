import { Component } from "@tarojs/taro";
import "../assets/styles/menu.scss";
import { View, Text } from "@tarojs/components";
import { AtIcon, AtInputNumber } from "taro-ui";
import "../assets/styles/cart_list.scss";
export default class FqCartList extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    //   userInfoPage为卖家信息页面
    cartList: [],
    totalPrice: 0
  };
  componentDidMount() {
    this.setState({ cartList: this.props.products });
  }
  componentWillReceiveProps() {
    this.compouteTotalPrice();
  }
  //遍历购物车数据，检查到选中状态到商品就去计算总价
  compouteTotalPrice() {
    let cartList = this.state.cartList;
    let totalPrice = 0;
    cartList.forEach((cart, index) => {
      let count = 0;
      cart.productList.forEach(item => {
        if (item.isChoosed) {
          count++;
          //判断一个项目是否应该全选
          if (count === cart.productList.length) {
            cartList[index].isAllChoosed = true;
          } else {
            cartList[index].isAllChoosed = false;
          }
          totalPrice = totalPrice + parseInt(item.number * item.price * 100);
        }
      });
    });
    this.setState({ cartList });
    this.props.compouteTotalPrice(totalPrice);
  }
  handleItemAllSelect(index) {
    let cartList = this.state.cartList;
    let chooseFlag = cartList[index].isAllChoosed;
    cartList[index].isAllChoosed = !chooseFlag;
    cartList[index].productList.map(item => {
      item.isChoosed = !chooseFlag;
    });
    this.setState({ cartList });
    this.compouteTotalPrice();
  }
  handleItemSelect(productIndex, index) {
    let cartList = this.state.cartList;
    let chooseFlag = cartList[index].productList[productIndex].isChoosed;
    cartList[index].productList[productIndex].isChoosed = !chooseFlag;
    this.setState({ cartList });
    this.compouteTotalPrice();
    // TODO:当同一个卖家所有商品都被选择后，外部当全选按钮也应该是选中状态
  }
  //购物车商品数量变化函数
  handleNumberChange(productIndex, index, value) {
    let cartList = this.state.cartList;
    cartList[index].productList[productIndex].number = value;
    this.setState({ cartList });
    this.compouteTotalPrice();
  }
  render() {
    let { cartList } = this.state;

    return (
      <View className="cartListContainer">
        {cartList && cartList.length !== 0
          ? cartList.map((item, index) => {
              return (
                <View className="cartItem">
                  <View className="cartItemHeader">
                    <AtIcon
                      value="check-circle"
                      size="20"
                      color={item.isAllChoosed ? "#6190e8" : "#c1c1c1"}
                      onClick={this.handleItemAllSelect.bind(this, index)}
                    />
                    <AtIcon prefixClass="icon" value="shouye" size="20" />
                    {/* TODO:点击卖家姓名、箭头都跳转到卖家信息页中 */}
                    <Text className="nickName">{item.sellerInfo.nickName}</Text>
                    <AtIcon prefixClass="icon" value="right" size="18" />
                  </View>
                  {item.productList.map((product, productIndex) => {
                    return (
                      <View className="cartItemBody">
                        <View className="bodyLeft">
                          <AtIcon
                            value="check-circle"
                            size="20"
                            color={product.isChoosed ? "#6190e8" : "#c1c1c1"}
                            onClick={this.handleItemSelect.bind(
                              this,
                              productIndex,
                              index
                            )}
                          />
                          <Image
                            className="product_image"
                            src={product.pImg}
                            mode="aspectFill"
                          />
                        </View>
                        <View className="bodyRight">
                          <Text className="description">
                            {product.description}
                          </Text>
                          <Text className="modelText">
                            {product.modelText !== "" && product.modelText
                              ? product.modelText
                              : ""}
                          </Text>
                          <View className="bottomContent">
                            <Text className="price">{`¥ ${product.price}`}</Text>
                            <View className="number">
                              <AtInputNumber
                                min={1}
                                step={1}
                                value={product.number}
                                onChange={this.handleNumberChange.bind(
                                  this,
                                  productIndex,
                                  index
                                )}
                              />
                            </View>
                          </View>
                        </View>
                      </View>
                    );
                  })}
                </View>
              );
            })
          : null}
        <View className="bottomSpace"></View>
      </View>
    );
  }
}
