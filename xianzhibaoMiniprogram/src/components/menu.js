import { Component } from "@tarojs/taro";
import "../assets/styles/menu.scss";
import { View, Text } from "@tarojs/components";
import IconFont from "../components/iconfont";
export default class FqMenu extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    fontsize: 100,
    iconList: [
      { id: 0, icon: "book-2", title: "淘书籍" },
      { id: 1, icon: "yifu", title: "淘服饰" },
      { id: 2, icon: "meizhuang", title: "淘美妆" },
      { id: 3, icon: "yidongdianzishebei", title: "淘电子" },
      { id: 4, icon: "xian_xiezi", title: "淘鞋子" },
      { id: 5, icon: "shenghuo", title: "淘生活" },
      { id: 6, icon: "pets", title: "宠物" },
      { id: 7, icon: "ziyuan", title: "更多" }
    ]
  };
  handleSelect(id) {
    // 跳转到分类页面
    console.log(id);
    Taro.redirectTo({ url: "/pages/classification/classification?id=" + id });
  }
  render() {
    let { fontsize, iconList } = this.state;
    return (
      <View
        className="menu_box"
        style={
          "width: 100%;height: 300rpx;padding: 5rpx 0;display:flex;flex-drection:row;"
        }
      >
        <View
          className="menu_wrap"
          style={"width: 100%;height: 100%;display: flex;flex-flow: row wrap;"}
        >
          {iconList.map(item => {
            return (
              <View
                key={item}
                className="menu_box_item"
                style={
                  "width: 22%;padding: 10rpx;display: flex;flex-direction: column;justify-content: center;align-items: center;font-size: 22rpx;"
                }
                onClick={this.handleSelect.bind(this, item.id)}
              >
                <IconFont name={item.icon} size={fontsize} />
                <Text>{item.title}</Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}
