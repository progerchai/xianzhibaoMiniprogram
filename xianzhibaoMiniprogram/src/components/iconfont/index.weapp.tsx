/* tslint:disable */
/* eslint-disable */

import Taro, { FunctionComponent } from '@tarojs/taro';

interface Props {
  name: 'ziyuan' | 'book-2' | 'shenghuo' | 'yifu' | 'meizhuang' | 'yidongdianzishebei' | 'pets' | 'xian_xiezi' | 'add' | 'right' | 'laba' | 'gerenzhongxin' | 'huodong' | 'gouwuche' | 'wushuju' | 'shouye' | 'view_off' | 'view' | 'check' | 'check_filled' | 'search' | 'heart_filled' | 'heart' | 'list' | 'question' | 'copy' | 'setting';
  size?: number;
  color?: string | string[];
}

export const IconFont: FunctionComponent<Props> = (props) => {
  const { name, size, color } = props;

  // @ts-ignore
  return <iconfont name={name} size={parseFloat(Taro.pxTransform(size))} color={color} />;
};

IconFont.defaultProps = {
  size: 18,
};

IconFont.config = {
  usingComponents: {
    iconfont: './weapp/weapp',
  },
};

export default IconFont;
