import Taro, { Component } from "@tarojs/taro";
import { View, Text, Picker } from "@tarojs/components";
import {
  AtDivider,
  AtTextarea,
  AtImagePicker,
  AtButton,
  AtForm,
} from "taro-ui";
// import { connect } from '@tarojs/redux'
import FqInput from "../../components/input";
import FqPicker from "../../components/picker";
import FqBottom from "../../components/bottom";
import service from "../../service";

import "./publish.scss";

class Publish extends Component {
  config = {
    navigationBarTitleText: "发布",
  };
  state = {
    name: "", //宝贝名称
    description: "", //宝贝描述
    brand: "", //宝贝品牌
    price: "", //价格
    size: "", //宝贝尺寸
    model: "", //商品型号

    pick_place: "",
    files: [], //图片
    classify_selector: ["书籍", "服饰", "美妆", "电子", "鞋子", "生活", "宠物"],
    classify: "生活", //商品分类
    depreciation_selector: ["99新", "88新", "66新"],
    depreciation: "99新", //折旧程度
    save_time_selector: ["<=一周", "<=一个月", "<=半年", "半年以上"],
    save_time: "<=一周", //持有时间
    weight_selector: ["<1kg", "1kg-2.5kg", ">2.5kg"],
    weight: "<1kg", //宝贝重量
    image_list: [], //宝贝上传图片
  };
  // 评论输入
  handleTextChange(event) {
    this.setState({
      description: event.target.value,
    });
  }
  //修改对应inpup内容
  handleChange(name, value) {
    this.setState({
      [name]: value,
    });
  }
  //image picker function
  onImageChange(files) {
    this.setState({
      files,
    });
  }
  //image picker function end
  // 检查价格的合理性
  checkNumber(num: any) {
    if (!num) return "请填写宝贝价格";
    if (parseFloat(num) != num) return "宝贝价格请填写数字";
    if (parseFloat(num).toFixed(0) == num || parseFloat(num).toFixed(1) == num)
      return "数字正确";
    if (parseFloat(num).toFixed(2) != num) {
      return "价格最多保留两位小树";
    } else return "数字正确";
  }
  //表单提交
  async onSubmit() {
    let {
      name,
      description,
      brand,
      price,
      size,
      model,
      pick_place,
      classify,
      depreciation,
      save_time,
      weight,
      image_list,
    } = this.state;
    // 格式校验 + 图片url分配到image_url1、2、3
    let check = "";
    if (!name) {
      check = "宝贝名称不能为空哦";
    } else if (this.checkNumber(price) != "数字正确") {
      check = this.checkNumber(price);
    } else if (!pick_place) {
      check = "请填写可取件地点";
    } else if (!description) {
      check = "请填写商品描述";
    } else if (!save_time) {
      check = "请至少上传一张宝贝照片";
    }
    if (check) {
      Taro.showToast({ title: check, icon: "none", duration: 1500 });
      return false;
    }
    // const result = await service.publish.get_index_message();
    const result = await service.publish.upload_goods({
      name: name,
      description: description,
      brand: brand,
      price: price,
      size: size,
      model: model,
      pick_place: pick_place,
      classify: classify,
      depreciation: depreciation,
      save_time: save_time,
      weight: weight,
      image_url1: 11,
      image_url2: 11,
      image_url3: 11,
    });
    console.log(result);
  }
  onReset() {
    this.setState({
      name: "",
      description: "",
      classify: "生活",
      model: "",
      files: [],
      depreciation: "99新",
      save_time: "<=一周",
      weight: "<1kg",
      brand: "",
      price: 0.0,
      size: "",
      pick_place: "",
    });
  }
  onSelectChange(name, e) {
    //修改 picker数据
    switch (name) {
      case "depreciation":
        this.setState({
          depreciation: this.state.depreciation_selector[e.detail.value],
        });
        break;
      case "save_time":
        this.setState({
          save_time: this.state.save_time_selector[e.detail.value],
        });
        break;
      case "weight":
        this.setState({
          save_time: this.state.weight_selector[e.detail.value],
        });
        break;
      case "classify":
        this.setState({
          classify: this.state.classify_selector[e.detail.value],
        });
        break;
    }
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
          标注<Text className="red">*</Text>
          为必填哦～
        </Text>
        <FqInput
          isRed
          name="name"
          title="宝贝名称"
          type="text"
          placeholder="宝贝名称"
          value={this.state.name}
          handleChange={this.handleChange.bind(this, "name")}
        ></FqInput>
        <FqInput
          isRed
          name="price"
          title="宝贝价格"
          type="number"
          placeholder="0.00"
          value={this.state.price}
          handleChange={this.handleChange.bind(this, "price")}
        ></FqInput>
        <FqPicker
          isRed
          title="商品类别"
          selector={this.state.classify_selector}
          selectorChecked={this.state.classify}
          onSelectChange={this.onSelectChange.bind(this, "classify")}
        ></FqPicker>
        <FqInput
          name="size"
          title="尺寸"
          type="text"
          placeholder="尺寸"
          value={this.state.size}
          handleChange={this.handleChange.bind(this, "size")}
        ></FqInput>
        <FqInput
          name="model"
          title="型号"
          type="text"
          placeholder="型号"
          value={this.state.model}
          handleChange={this.handleChange.bind(this, "model")}
        ></FqInput>
        <FqPicker
          isRed
          title="折旧程度"
          selector={this.state.depreciation_selector}
          selectorChecked={this.state.depreciation}
          onSelectChange={this.onSelectChange.bind(this, "depreciation")}
        ></FqPicker>
        <FqInput
          isRed
          name="pick_place"
          title="可取件地点"
          type="text"
          placeholder="可取件地点"
          value={this.state.pick_place}
          handleChange={this.handleChange.bind(this, "pick_place")}
        ></FqInput>
        <FqInput
          name="brand"
          title="品牌"
          type="text"
          placeholder="品牌"
          value={this.state.brand}
          handleChange={this.handleChange.bind(this, "brand")}
        ></FqInput>
        <FqPicker
          isRed
          title="持有时间"
          selector={this.state.save_time_selector}
          selectorChecked={this.state.save_time}
          onSelectChange={this.onSelectChange.bind(this, "save_time")}
        ></FqPicker>
        <FqPicker
          title="宝贝重量"
          selector={this.state.weight_selector}
          selectorChecked={this.state.weight}
          onSelectChange={this.onSelectChange.bind(this, "weight")}
        ></FqPicker>
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
          length={4}
          count={3}
          className="imagepicker"
          files={this.state.files}
          onChange={this.onImageChange.bind(this)}
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
        <View style="height:54px"></View>
        <FqBottom current={2}></FqBottom>
      </AtForm>
    );
  }
}

export default Publish;
