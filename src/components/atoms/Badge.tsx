/*
 * バッジコンポーネント
 */
import React, { useContext } from "react";
import { BadgeStyle } from "./Style";
import { SearchStateContext } from "../../providers/GlobalProviders";

interface PropsType {
  //バッジをクリックした時のfuntion
  genreCode?: string;
  //バッジのテキスト
  value: string;
  //基本のバッジスタイル以外のスタイル
  icon: JSX.Element | undefined;
  //検索中か
  isSearching: boolean;
  onClickHandler: (e: any) => Promise<void>;
}

export const Badge: React.FC<PropsType> = (props) => {
  const { genreCode, value, icon, isSearching, onClickHandler } = props;
  return (
    <>
      <button
        onClick={onClickHandler}
        className={isSearching ? BadgeStyle.badgeSearching : BadgeStyle.badge}
        data-genre-code={genreCode}
      >
        <div className={BadgeStyle.svg}>{icon}</div>
        <div
          className={BadgeStyle.text}
          dangerouslySetInnerHTML={{ __html: value }}
        ></div>
      </button>
    </>
  );
};
