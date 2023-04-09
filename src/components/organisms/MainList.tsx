/**
 * 検索一覧画面
 */

import { useEffect } from "react";
import { ShopListSearchResult } from "../molecules/ShopListSearchResult";
import { useNavigate } from "react-router-dom";
import { useLocalStrage } from "../../hooks/useLocalStrage";
import { TypeShopList } from "../../type/globalTypes";
import { ListStyle } from "./Style";

export const MainList = () => {
  const { getLocalStrageArray } = useLocalStrage();
  const shopList: TypeShopList[] = getLocalStrageArray("shopListStorage");
  const navigation = useNavigate();
  useEffect(() => {
    //検索結果がなかったらトップに戻す
    if (shopList.length === 0) {
      navigation("/");
    }
    console.log(shopList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={ListStyle.content}>
      <ShopListSearchResult shopList={shopList}></ShopListSearchResult>
    </div>
  );
};
