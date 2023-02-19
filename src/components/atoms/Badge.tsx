/*
 * バッジコンポーネント
 */
import React from "react";
import { css } from "@emotion/css";
const styles = {
  badge: css`
    display: block;
    font-size: 13px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28vw;
    height: 18vw;
    border: solid 1px #000;
    margin-bottom: 5vw;
    cursor: pointer;
    box-shadow: 1px 1px 1px 1px rgb(0 0 0 / 50%);
    padding: 10px;
  `,
  badgeSelected: css`
    display: block;
    font-size: 13px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28vw;
    height: 18vw;
    border: solid 1px #000;
    margin-bottom: 5vw;
    cursor: pointer;
    box-shadow: 1px 1px 1px 1px rgb(0 0 0 / 50%);
    padding: 10px;
    background-color: #ddd;
  `,
};

interface PropsType {
  //バッジをクリックした時のfuntion
  thisOnClick: VoidFunction;
  //バッジのテキスト
  thisValue: string;
  //基本のバッジスタイル以外のスタイル
  thisSelected: boolean;
}
export const Badge: React.FC<PropsType> = (props) => {
  const { thisOnClick, thisValue, thisSelected } = props;
  return (
    <>
      <div
        onClick={thisOnClick}
        //TODO：なんかここ動いてない。。
        className={thisSelected ? styles.badgeSelected : styles.badge}
      >
        {thisValue}
      </div>
    </>
  );
};
