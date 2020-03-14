import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
// import { connect } from '@tarojs/redux'
import FqBottom from "../../components/bottom";
import FqScrollNotice from "../../components/scroll_notice";
import FqBlock from "../../components/news_block";

// import { add, minus, asyncAdd } from '../../actions/counter'

import "./activity.scss";

class Activity extends Component {
  config = {
    navigationBarTitleText: "活动"
  };
  state = {
    active_list: [
      {
        active_id: 1,
        active_weight: 0,
        active_intr_text: "快用你的能量来种树吧！",
        active_img_url:
          "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4183863574,3435833752&fm=26&gp=0.jpg",
        active_url: "https://mp.weixin.qq.com/s/N9LIa0BzLse-b5jSciM3OQ"
      },
      {
        active_id: 2,
        active_weight: 0,
        active_intr_text: "我爱你，也爱这身白衣！",
        active_img_url:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584208109413&di=9d4455cd2dfcff36834ca7d9d8add5a7&imgtype=0&src=http%3A%2F%2Fpic.anhuinews.com%2F003%2F010%2F876%2F00301087613_bd13fd4a.jpg",
        active_url: "https://mp.weixin.qq.com/s/er5ID3_UbWwOdNc5jfjIbA"
      }
    ]
  };
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    var { active_list } = this.state;
    return (
      <View className="container">
        <FqScrollNotice
          noticeText="我是轮播公告我是轮播公告我是轮播公告公告"
          bgColor="#fffbe6"
          fontColor="#6d511e"
        ></FqScrollNotice>
        {active_list.map(item => {
          return <FqBlock item={item}></FqBlock>;
        })}
        <FqBottom current={1}></FqBottom>
      </View>
    );
  }
}

export default Activity;
