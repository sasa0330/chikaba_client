/*
 * バッジコンポーネント
 */
import React from "react";
import { BadgeStyle } from "./Style";

interface PropsType {
  //バッジをクリックした時のfuntion
  thisOnClick: VoidFunction;
  //バッジのテキスト
  thisValue: string;
  //基本のバッジスタイル以外のスタイル
  thisSelected: boolean;
  thisIcon: JSX.Element | undefined;
}
export const Badge: React.FC<PropsType> = (props) => {
  const { thisOnClick, thisValue, thisSelected, thisIcon } = props;
  return (
    <>
      <div
        onClick={thisOnClick}
        //TODO：なんかここ動いてない。。
        className={thisSelected ? BadgeStyle.badgeSelected : BadgeStyle.badge}
      >
        <div>{thisIcon}</div>
        <div dangerouslySetInnerHTML={{ __html: thisValue }}></div>
      </div>
    </>
  );
};
