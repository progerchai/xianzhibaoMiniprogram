import Taro, { Component } from "@tarojs/taro";
import { View, Text, Picker } from "@tarojs/components";
import {
  AtDivider,
  AtTextarea,
  AtImagePicker,
  AtButton,
  AtForm
} from "taro-ui";
// import { connect } from '@tarojs/redux'
import FqInput from "../../components/input";
import FqPicker from "../../components/picker";
import FqBottom from "../../components/bottom";

import "./publish.scss";

class Publish extends Component {
  config = {
    navigationBarTitleText: "发布"
  };
  state = {
    name: "",
    description: "",
    files: [],
    product: [],
    img: "",
    selector: ["美国", "中国", "巴西", "日本"],
    selectorChecked: "美国"
  };
  // 评论输入
  handleTextChange(event) {
    this.setState({
      comments: event.target.value
    });
  }
  handleChange(value) {
    console.log(value);
    // this.setState({
    //   value
    // });
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    // return value;
  }
  //image picker function
  onChange(files) {
    this.setState({
      files
    });
  }
  onFail(mes) {
    // console.log(mes);
  }
  onImageClick(index, file) {
    // console.log(index, file);
  }

  //image picker function end
  //表单提交
  onSubmit(event) {
    console.log("表单提交");
  }
  onReset(event) {
    console.log("表单重置");
  }
  onSelectChange(e) {
    console.log("你选择了-->", [e.detail.value]);
    // this.setState({
    //   selectorChecked: this.state.selector[e.detail.value]
    // });
  }
  render() {
    let { description } = this.state;

    return (
      <AtForm
        className="container"
        onSubmit={this.onSubmit.bind(this)}
        onReset={this.onReset.bind(this)}
      >
        <Text className="notice">
          ---标注<Text className="red">*</Text>为必填哦～
        </Text>
        <FqInput
          isRed
          name="value1"
          title="宝贝名称"
          type="text"
          placeholder="宝贝名称"
          value={this.state.name}
          handleChange={this.handleChange}
        ></FqInput>
        <FqInput
          isRed
          name="value1"
          title="宝贝价格"
          type="number"
          placeholder="0.00"
          value={this.state.name}
          handleChange={this.handleChange}
        ></FqInput>
        <FqInput
          name="value1"
          title="尺寸"
          type="text"
          placeholder="尺寸"
          value={this.state.name}
          handleChange={this.handleChange}
        ></FqInput>
        <FqPicker
          selector={this.state.selector}
          selectorChecked={this.state.selectorChecked}
          onSelectChange={this.onSelectChange}
        ></FqPicker>
        <FqInput
          isRed
          name="value1"
          title="折旧程度"
          type="text"
          placeholder="折旧程度"
          value={this.state.name}
          handleChange={this.handleChange}
        ></FqInput>

        <FqInput
          isRed
          name="value1"
          title="可取件地点"
          type="text"
          placeholder="可取件地点"
          value={this.state.name}
          handleChange={this.handleChange}
        ></FqInput>
        <FqInput
          name="value1"
          title="品牌"
          type="text"
          placeholder="品牌"
          value={this.state.name}
          handleChange={this.handleChange}
        ></FqInput>
        <FqInput
          isRed
          name="value1"
          title="持有时间"
          type="text"
          placeholder="持有时间"
          value={this.state.name}
          handleChange={this.handleChange}
        ></FqInput>
        <FqInput
          name="value1"
          title="重量"
          type="text"
          placeholder="重量"
          value={this.state.name}
          handleChange={this.handleChange}
        ></FqInput>
        <AtDivider className="line" lineColor="#eeeeee" />
        <AtTextarea
          className="textarea"
          value={description}
          onChange={this.handleTextChange.bind(this)}
          height={200}
          maxLength={200}
          placeholder="宝贝不错哦，快给小伙伴们介绍一下宝贝吧"
        />
        <AtImagePicker
          length={3}
          count={3}
          className="imagepicker"
          files={this.state.files}
          onChange={this.onChange.bind(this)}
        />
        <AtButton
          className="btn_submit"
          type="primary"
          size="normal"
          formType="submit"
        >
          我要发布
        </AtButton>
        <AtButton formType="reset">重置</AtButton>
        <FqBottom current={2}></FqBottom>
      </AtForm>
    );
  }
}

export default Publish;
