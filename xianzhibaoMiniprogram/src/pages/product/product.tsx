import Taro, { Component, useShareAppMessage } from "@tarojs/taro";
import {
  View,
  Button,
  Text,
  Swiper,
  SwiperItem,
  Image
} from "@tarojs/components";
import { AtIcon, AtFloatLayout } from "taro-ui";
import NoData from "../../components/no_data";
import FqBuyBar from "../../components/buy_bar";
import "./product.scss";
import share from "./share";
import service from "../../service";

class Cart extends Component {
  config = {
    navigationBarTitleText: "商品详情"
  };
  state = {
    isShowFloatLayout: false,
    product: {
      name: "",
      sellerInfo: {
        nickName: "哎呦喂。",
        openid: "asdfj9sjdfasdf9982329939",
        avatarUrl:
          "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ5gUpejVfCsXgoyt8eVPHHib964DTINsqR8C2G98yT5W7kM6icU154UgWYpDicTKlLwFiblqicAfFqOOQ/132",
        userInfoPage: 12,
        integral: 650
      },
      pid: 1,
      pImgList: [],
      price: 139.0,
      description: "",
      modelText: "八杯水套盒",
      comments: [
        {
          avatarUrl:
            "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ5gUpejVfCsXgoyt8eVPHHib964DTINsqR8C2G98yT5W7kM6icU154UgWYpDicTKlLwFiblqicAfFqOOQ/132",
          nickName: "proger",
          time: "2020-04-25 19:22:46",
          text: "hello .. world"
        },
        {
          avatarUrl:
            "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ5gUpejVfCsXgoyt8eVPHHib964DTINsqR8C2G98yT5W7kM6icU154UgWYpDicTKlLwFiblqicAfFqOOQ/132",
          nickName: "proger",
          time: "2020-04-25 19:22:46",
          text: "楼主价格还可以再刀一下吗？"
        }
      ],
      detail: {
        name: { title: "宝贝名称", value: "我是宝贝名称" },
        size: { title: "宝贝尺寸", value: "我是尺寸" },
        depreciation: { title: "新旧程度", value: "99新" },
        model: { title: "宝贝型号", value: "型号" },
        pick_palce: { title: "可区间地点", value: "E区" },
        brand: { title: "宝贝品牌", value: "品牌" },
        save_time: { title: "卖家持有时间", value: "<=一个月" },
        weight: { title: "重量", value: "<1kg" },
        description: {
          title: "卖家描述",
          value: "我是卖家的一些描述"
        }
      }
    }
  };
  // 初始化
  componentDidMount() {
    const pid = this.$router.params.pid;
    this.getProductDetail(pid);
  }
  // 获取商品详细数据
  async getProductDetail(pid) {
    const result = await service.index_page.get_product_detail(pid);
    if (result) {
      let { product } = this.state;

      let detail = result.detail;
      product.name = detail.name;
      product.pid = detail.pid;
      product.price = detail.price;
      let pImgList = [] as any;
      for (let i = 0; i < 3; i++) {
        if (detail[`image_url${i + 1}`])
          pImgList.push(detail[`image_url${i + 1}`]);
      }
      product.pImgList = pImgList;
      product.description = detail.description;
      product.modelText = detail.model;
      product.detail.name.value = detail.name;
      product.detail.size.value = detail.size;
      product.detail.depreciation.value = detail.depreciation;
      product.detail.model.value = detail.name;
      product.detail.brand.value = detail.brand;
      product.detail.pick_palce.value = detail.pick_palce;
      product.detail.save_time.value = detail.save_time;
      product.detail.weight.value = detail.weight;
      product.detail.description.value = detail.description;
      product.pImgList = pImgList;

      this.setState({ product });
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }
  // 打开floatLayout
  handleShowFloatLayout() {
    this.setState({ isShowFloatLayout: true });
  }
  // 关闭floatLayout
  handleClose() {
    console.log("关闭浮动弹窗");
  }
  // 跳转到评分用户页
  handleMark(sellerInfo) {
    let sellerInfoString = JSON.stringify(sellerInfo);
    Taro.redirectTo({
      url:
        "/pages/product/mark_people?sellerInfo=" + encodeURI(sellerInfoString)
    });
  }
  // 分享商品
  handleShare(product) {
    share(product);
  }

  render() {
    let { product, isShowFloatLayout } = this.state;
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
            <Text className="name">{product.name}</Text>
            <Text className="description">{product.description}</Text>
          </View>
          <View className="right">
            <AtIcon
              prefixClass="icon"
              value="share"
              size="30"
              color="#6190e8"
              onClick={this.handleShare.bind(this, product)}
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
          <View
            className="toDetail"
            onClick={this.handleMark.bind(this, product.sellerInfo)}
          >
            <Text>查看详情</Text>
            <AtIcon prefixClass="icon" value="right" size="20" color="#000" />
          </View>
        </View>
        <View
          className="detailContent"
          onClick={this.handleShowFloatLayout.bind(this)}
        >
          <Text className="detailLeft">商品详情</Text>
          <Text className="detailRight">点击查看</Text>
        </View>
        <View className="commentContent">
          <Text className="commentLeft">评价</Text>
          <Text className="commentRight">
            {product.comments.length ? "" : "暂无评价"}
          </Text>
          <View className="commentBox">
            {product.comments.length ? (
              product.comments.map(comment => {
                return (
                  <View className="commentList">
                    <View className="header">
                      <Image className="avatar" src={comment.avatarUrl} />
                      <Text>
                        {`用户 ${comment.nickName} 评论于：${comment.time}`}
                      </Text>
                    </View>
                    <View className="text">
                      <Text>{comment.text}</Text>
                    </View>
                  </View>
                );
              })
            ) : (
              <NoData desc={"评论区为空哦"} icon={"wushuju"}></NoData>
            )}
          </View>
        </View>

        <AtFloatLayout
          isOpened={isShowFloatLayout}
          title="商品详情"
          scrollY
          onClose={this.handleClose.bind(this)}
        >
          {Object.keys(product.detail).map(key => {
            return product.detail[key] ? (
              <View className="detailRow">
                <View className="detailRowLeft">
                  {product.detail[key].title}:
                </View>
                <View className="detailRowRight">
                  <Text>{product.detail[key].value}</Text>
                </View>
              </View>
            ) : null;
          })}
        </AtFloatLayout>
        <FqBuyBar type="product" isCollected />
      </View>
    );
  }
}

export default Cart;
