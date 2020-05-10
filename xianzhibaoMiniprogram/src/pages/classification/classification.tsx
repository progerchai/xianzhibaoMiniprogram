import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
// import { connect } from '@tarojs/redux'
import { AtTabs, AtTabsPane } from "taro-ui";
import FqProductList from "../../components/product_list";
import service from "../../service";
import "./classification.scss";

class Classification extends Component {
  config = {
    navigationBarTitleText: "分类"
  };
  state = {
    // eslint-disable-next-line taro/duplicate-name-of-state-and-props
    _current: 0,
    tabList: [
      { title: "淘书籍" },
      { title: "淘服饰" },
      { title: "淘美妆" },
      { title: "淘电子" },
      { title: "淘鞋子" },
      { title: "淘生活" },
      { title: "宠物" }
    ],
    classifyList: [],
    model: ""
  };

  componentWillMount() {
    const id = this.$router.params.id;
    if (id && id != "7") {
      this.setState({ _current: parseInt(id) });
    }
  }
  componentDidMount() {
    let classifyId = this.state._current;
    console.log(123, classifyId);
    this.getClassifyProducts(classifyId);
  }
  // 获取商品数据,并分类
  async getClassifyProducts(classifyId) {
    const result = await service.index_page.get_classify_products(classifyId);
    if (result) {
      let classifyList = this.state.classifyList as any;
      classifyList[classifyId] = result.classifyList;
      this.setState({ classifyList });
      console.log(classifyList);
      //获取一个类别的商品
    }
  }
  handleClick(value) {
    if (value === this.state._current) return;
    this.setState({
      _current: value
    });
    //TODO: 后续做到当已经加载或当前tab数据时，第二次不在刷新；
    //TODO: 做触底加载
    this.getClassifyProducts(value);
  }
  render() {
    let { classifyList } = this.state;
    return (
      <View className="container">
        <AtTabs
          animated={false}
          current={this.state._current}
          tabDirection="vertical"
          tabList={this.state.tabList}
          onClick={this.handleClick.bind(this)}
          height="100vh"
        >
          <AtTabsPane
            tabDirection="vertical"
            current={this.state._current}
            index={0}
          >
            <View className="scaleListBox">
              <FqProductList product_list={classifyList[0]} />
            </View>
          </AtTabsPane>
          <AtTabsPane
            tabDirection="vertical"
            current={this.state._current}
            index={1}
          >
            {/* 淘潮牌的内容 */}
            <View className="scaleListBox">
              <FqProductList product_list={classifyList[1]} />
            </View>
          </AtTabsPane>
          <AtTabsPane
            tabDirection="vertical"
            current={this.state._current}
            index={2}
          >
            {/* 淘美妆的内容 */}
            <View className="scaleListBox">
              <FqProductList product_list={classifyList[2]} />
            </View>
          </AtTabsPane>
          <AtTabsPane
            tabDirection="vertical"
            current={this.state._current}
            index={3}
          >
            {/* 淘电子的内容 */}
            <View className="scaleListBox">
              <FqProductList product_list={classifyList[3]} />
            </View>
          </AtTabsPane>
          <AtTabsPane
            tabDirection="vertical"
            current={this.state._current}
            index={4}
          >
            {/* 淘鞋子的内容 */}
            <View className="scaleListBox">
              <FqProductList product_list={classifyList[4]} />
            </View>
          </AtTabsPane>
          <AtTabsPane
            tabDirection="vertical"
            current={this.state._current}
            index={5}
          >
            {/* 淘生活的内容 */}
            <View className="scaleListBox">
              <FqProductList product_list={classifyList[5]} />
            </View>
          </AtTabsPane>
          <AtTabsPane
            tabDirection="vertical"
            current={this.state._current}
            index={6}
          >
            {/* 宠物的内容 */}
            <View className="scaleListBox">
              <FqProductList product_list={classifyList[6]} />
            </View>
          </AtTabsPane>
          <AtTabsPane
            tabDirection="vertical"
            current={this.state._current}
            index={7}
          >
            {/* 更多 */}
            <View className="scaleListBox">
              <FqProductList product_list={classifyList[7]} />
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>
    );
  }
}

export default Classification;
