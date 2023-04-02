/**
 * 検索一覧画面
 */

import { useEffect, useContext } from "react";
import { ShopListSearchResult } from "../molecules/ShopListSearchResult";
import { useNavigate } from "react-router-dom";
import { ShopListContext } from "../../providers/GlobalProviders";

export const MainList = () => {
  const { shopList } = useContext(ShopListContext);
  const navigation = useNavigate();
  useEffect(() => {
    //検索結果がなかったらトップに戻す
    if (shopList.length === 0) {
      navigation("/");
    }
    console.log(shopList);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ShopListSearchResult shopList={shopList}></ShopListSearchResult>
    </>
  );
};
