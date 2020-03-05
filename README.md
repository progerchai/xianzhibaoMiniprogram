# xianzhibaoMiniprogram

闲置宝微信小程序 助力高校区域新模态闲置品交易

如果没有彩色图标：（参考地址：https://www.ctolib.com/mip/iconfont-cli-taro-iconfont-cli.html）

1.安装插件

# Yarn

yarn add taro-iconfont-cli --dev

# Npm

npm install taro-iconfont-cli --save-dev

2.生成配置文件 iconfont.json
npx iconfont-init

此时项目根目录会生成一个 iconfont.json 的文件，内容如下：

{
"symbol_url": "请参考 README.md，复制 http://iconfont.cn 官网提供的 JS 链接",
"save_dir": "./iconfont",
"use_typescript": false,
"platforms": "\*",
"use_rpx": true,
"trim_icon_prefix": "icon",
"default_icon_size": 18,
"componnent_name": "IconFont"
}
参数解释：
symbol_url

iconfont
官网提供的项目链接。请务必看清是.js 后缀而不是.css 后缀。如果你现在还没有创建 iconfont 的仓库，那么可以填入这个链接去测试：http://at.alicdn.com/t/font_1373348_kk9y3jk2omq.js

save_dir
根据 iconfont 图标生成的组件存放的位置。每次生成组件之前，该文件夹都会被清空。

use_typescript
如果您的项目使用 Typescript 编写，请设置为 true。这个选项将决定生成的图标组件是.tsx 还是.js 后缀。

当该值为 false 时，我们会为您的图标生成.js 和.d.ts 两个文件，以便您能享受到最好的开发体验。

platforms
选择需要支持的平台，默认是\*，意味着所有平台都需要支持（如果有）。如果你只想支持部分平台，也可以设置成数组：

{
// 选择你需要的平台
// 说明 => weapp: 微信 | swan: 百度 | alipay: 支付宝 | tt: 字节跳动
"platforms": ["weapp","swan" ,"alipay", "rn", "h5", "tt", "qq"]
}
use_rpx
是否使用
尺寸单位 rpx
还是普通的像素单位 px。默认值为 true，与 Taro 保持一致的缩放。您也可以设置为 false，强制使用 px

trim_icon_prefix
如果你的图标有通用的前缀，而你在使用的时候又不想重复去写，那么可以通过这种配置这个选项把前缀统一去掉。

default_icon_size
我们将为每个生成的图标组件加入默认的字体大小，当然，你也可以通过传入 props 的方式改变这个 size 值。

component_name
就是组件的名称，默认名称为 IconFont，您也可以改成 Icons 或者您喜欢的名字。记住，它是一个变量名，您必须遵守 Javascript 中关于变量的语法规则。以及作为组件名，请尽量以大写字母开头。

Step 3
开始生成 Taro 标准组件

npx iconfont-taro
生成后查看您设置的保存目录中是否含有所有的图标

在生成代码之前，你可以顺便参考
snapshots 目录
自动生成的快照文件。
在 Page 中使用图标

import Taro, { Component } from '@tarojs/taro';
import IconFont from '../iconfont';

class App extends Component {
render() {
return <IconFont name="alipay" />;
}
}

export default App;
更多用法：

// 原色彩
<IconFont name="alipay" />

// 单色：红色
<IconFont name="alipay" color="red" />

// 多色：红色+橘色
<IconFont name="alipay" color={['red', 'orange']} size={300} />

// 不同格式的颜色写法
<IconFont name="alipay" color={['#333', 'rgb(50, 124, 39)']} />

// 与文字对齐
<View style={{ display: 'flex', alignItems: 'center' }}>
<Text>Hello</text>
<IconFont name="alipay" />
</View>
更新图标
当您在 iconfont.cn 中的图标有变更时，只需更改配置 symbol_url，然后再次执行 Step 3 即可生成最新的图标组件

# 修改 symbol_url 配置后执行：

npx iconfont-taro
