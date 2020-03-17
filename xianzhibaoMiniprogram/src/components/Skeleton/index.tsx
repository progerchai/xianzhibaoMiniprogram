import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import classnames from "classnames";
import "./index.scss";

/*
 *@description: 骨架屏 （单页面
 *@author: progerchai
 *@e-mail: progerchai@gmail.com
 *@date: 2020-03-17 13:18:40
 */
export interface SkeletonProps {
  /**
   * @description 排列方向  横向 或者 纵向， 默认 row
   * @type {('row' | 'column')}
   * @memberof SkeletonProps
   */
  type?: "column" | "row";
  /**
   * @description 段落占位图行数
   * @type {number}
   */
  row?: number;
  /**
   * @description 是否显示占位图，传 `false` 时会展示子组件内容
   * @type {boolean}
   */
  loading?: boolean;
  /**
   * @description 是否显示标题占位图
   * @type {boolean}
   */
  title?: boolean;
  /**
   * @description 标题占位图宽度
   * @type {(string | number)}
   */
  titleWidth?: string | number;
  /**
   * @description 是否显示头像占位图
   * @type {boolean}
   */
  avatar?: boolean;
  /**
   * @description avatar-size
   * @type {number}
   */
  avatarSize?: number;
  /**
   * @description 头像占位图形状，可选值为 `square` 、`round` 默认值：round
   * @type {AvatarShapeOptions}
   */
  avatarShape?: AvatarShapeOptions;
  //-------------------------
  /**
   * @description 是否显示图片占位图，
   * @type {number}
   */
  boxImg?: boolean;
  /**
   * @description img-size
   * @type {ImgShapeOptions}
   */
  imgShape?: ImgShapeOptions;
  /**
   * @description 是否显示菜单占位图，
   * @type {number}
   */
  menu?: boolean;
  /**
   * @description 搜索栏
   * @type {number}
   */
  searchbar?: boolean;
  /**
   * @description 商品栏
   * @type {number}
   */
  body?: boolean;
  /**
   * @description img-size
   * @type {boolean}
   */
  action?: boolean;
  /**
   * @description 是否开启动画
   * @type {boolean}
   */
  animate?: boolean;
  /**
   * @description 动画名称
   * @type {AnimateName}
   * @memberof SkeletonProps
   */
  animateName?: AnimateName;

  //---------------------------
  /**
   * @description 段落占位图宽度，可传数组来设置每一行的宽度
   * @type {(number | string | (number | string)[])}
   */
  rowWidth?: number | string | (number | string)[];
  /**
   * @description 段落占位图高度，可传数组来设置每一行的高度
   * @type {(number | string | (number | string)[])}
   * @memberof SkeletonProps
   */
  rowHeight?: number | string | (number | string)[];
  /**
   * @description 用于定制 row 的宽跟高，可传数组来设置每一行的宽跟高，如果配置了该属性，则 rowWidth 配置无效
   * @type {(RowProps | RowProps[])}
   * @memberof SkeletonProps
   */
  rowProps?: RowProps | RowProps[];
  /**
   * @description 子组件内容
   * @type {JSX.Element}
   */
  children?: JSX.Element;
}
/**
 * @description Row 属性的宽高
 * @author lentoo
 * @date 2019-08-16
 * @export
 * @interface RowProps
 */
export interface RowProps {
  width: string | number;
  height: string | number;
}
export type AnimateName = "blink" | "elastic";
export type AvatarShapeOptions = "round" | "square";
export type ImgShapeOptions = "square" | "rectangle";
export default function Skeleton(props: SkeletonProps) {
  if (!props.loading) {
    return <View>{props.children}</View>;
  }

  // 矩形骨架
  const renderBoxImg = (width, height): JSX.Element | null => {
    if (props.boxImg) {
      const boxImgClass = classnames("skeleton-box_img", {
        "skeleton-squareimg100": props.imgShape === "square"
      });
      return (
        <View
          className={boxImgClass}
          style={`width: ${width};height:${height}`}
        />
      );
    }
    return null;
  };
  // 菜单骨架
  const renderMenu = (menuCount): JSX.Element | null => {
    if (props.menu) {
      const arr = new Array(menuCount);
      return (
        <View className="skeleton-menu">
          {arr.map(() => {
            return (
              <View className="menu_item">
                <View className="menu_redius"></View>
                <View className="menu_text"></View>
              </View>
            );
          })}
        </View>
      );
    }
    return null;
  };

  const rootClass = classnames([
    "skeleton",
    {
      [`skeleton-type-${props.type}`]: true,
      "skeleton-animate-blink": props.animate && props.animateName === "blink",
      "skeleton-animate-elastic":
        props.animate && props.animateName === "elastic"
    }
  ]);
  return (
    <View className={rootClass}>
      {this.props.searchbar ? renderBoxImg("100%", "60rpx") : null}
      {this.props.boxImg ? renderBoxImg("100%", "300rpx") : null}
      {this.props.menu ? renderMenu(this.props.menuCount) : null}
      {this.props.body ? renderBoxImg("100%", "800rpx") : null}
    </View>
  );
}
Skeleton.options = {
  addGlobalClass: true
};
Skeleton.defaultProps = {
  avatarSize: 90,
  type: "row",
  row: 0,
  loading: true,
  animate: true,
  rowWidth: "100%",
  rowHeight: 24,
  titleWidth: "40%",
  avatarShape: "round",
  animateName: "blink",
  imgShape: "rectangle", //长矩形，aquare正方形
  menu: true,
  menuCount: 8,
  searchbar: true,
  body: true
};
