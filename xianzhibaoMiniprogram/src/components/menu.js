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
      <View className="menu_box">
        {iconList.map(item => {
          return (
            <View
              className="menu_box_item"
              onClick={this.handleSelect.bind(this, item.id)}
            >
              <IconFont name={item.icon} size={fontsize}></IconFont>
              <Text>{item.title}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}
