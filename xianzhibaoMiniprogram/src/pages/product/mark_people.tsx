import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import {
  AtAvatar,
  AtRate,
  AtTextarea,
  AtButton,
  AtProgress,
  AtToast
} from "taro-ui";
import FqCard from "../../components/card";
import "./mark_people.scss";

class MarkPeople extends Component {
  config = {
    navigationBarTitleText: "卖家详情"
  };
  state = {
    value: 0,
    commentText: "",
    isLoding: false,
    isOpened: false,
    text: "",
    status: "error",
    sellerInfo: {
      nickName: "",
      openid: "",
      avatarUrl: "",
      userInfoPage: 0,
      integral: 0
    },
    topStyle: { fontColor: "white", bgColor: "#24231F" }
  };
  componentDidMount() {
    const sellerInfo = JSON.parse(this.$router.params.sellerInfo);
    this.setState({ sellerInfo });
  }
  //用户评分
  handleChangeRate(value) {
    this.setState({
      value
    });
  }
  //   文本区域改变
  handleChange(value) {
    this.setState({
      commentText: value
    });
  }
  //   提交评论
  handleMark() {
    this.setState({ isLoding: true });
    setTimeout(() => {
      this.setState({
        isOpened: true,
        text: "评价成功！",
        status: "success",
        isLoding: false
      });
    }, 2000);
  }

  render() {
    let { sellerInfo, isLoding, topStyle, isOpened, text, status } = this.state;
    return (
      <View className="container">
        <AtAvatar circle image={`${sellerInfo.avatarUrl}`}></AtAvatar>
        <Text className="nackName">{sellerInfo.nickName}</Text>
        <View className="card">
          <FqCard
            title="闲置宝"
            message="积分信息"
            icon_left="none"
            icon_right="none"
            noClickFunction={true}
            border_bottom
            childrenExit={true}
            topStyle={topStyle}
          >
            <View className="progressBarBox">
              <Text>{sellerInfo.integral}</Text>
              <View className="progressBar">
                <AtProgress
                  percent={(100 * sellerInfo.integral) / 750}
                  strokeWidth={8}
                  isHidePercent
                  color="#6190E8"
                />
              </View>
            </View>
          </FqCard>
        </View>
        <View className="rate">
          <AtRate
            value={this.state.value}
            onChange={this.handleChangeRate.bind(this)}
          />
        </View>
        <View className="textArea">
          <AtTextarea
            count
            height={150}
            value={this.state.commentText}
            onChange={this.handleChange.bind(this)}
            maxLength={200}
            placeholder="你对该用户评分的依据是..."
          />
        </View>
        <View className="submitBtn">
          <AtButton
            loading={isLoding}
            type="primary"
            onClick={this.handleMark.bind(this)}
          >
            提交评价
          </AtButton>
        </View>
        <AtToast isOpened={isOpened} text={text} status={status}></AtToast>
      </View>
    );
  }
}

export default MarkPeople;
