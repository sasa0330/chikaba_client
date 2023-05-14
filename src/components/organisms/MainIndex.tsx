/**
 * 検索一覧画面
 */

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SelectGenre } from "../molecules/SelectGenre";
import { useCurrentLocation } from "../../hooks/useCurrentLocation";
import { useLocalStrage } from "../../hooks/useLocalStrage";
import { useShopList } from "../../hooks/useShopList";

import {
  ModalContext,
  SearchStateContext,
} from "../../providers/GlobalProviders";
import { TypeShopList, currentPosition } from "../../type/globalTypes";
import { IndexStyle } from "./Style";

export const MainIndex = () => {
  const { isSearching, setIsSearching } = useContext(SearchStateContext);
  const { setModalState } = useContext(ModalContext);
  const { setLocalStrageArray } = useLocalStrage();
  const { getCurrentPosition } = useCurrentLocation();
  const { getShopList, generateRequestUrl } = useShopList();

  let hotpepper_genre: string;
  const navigation = useNavigate();
  type errorMessage = string;

  /**
   * 「店を検索する」を押した時の処理
   */
  const handleSearchButtonClick: (e: any) => Promise<void | boolean> = async (
    e
  ) => {
    //検索中アニメーション開始
    setIsSearching(true);
    //クリックしたジャンル取得
    hotpepper_genre = e.currentTarget.dataset.genreCode;
    //現在地検索
    const responseCurrentLocation: errorMessage | currentPosition =
      await getCurrentPosition();
    //エラーなら終了処理
    if (typeof responseCurrentLocation === "string") {
      ifResponseIsError(responseCurrentLocation);
      return false;
    }
    //エラーでなければ現在地格納
    const currentPosition: currentPosition = responseCurrentLocation;
    //店情報検索用のリクエストURL生成
    const requestUrl: string = generateRequestUrl(
      currentPosition.lat,
      currentPosition.lng,
      hotpepper_genre
    );
    //店情報取得
    const responseShopList: errorMessage | TypeShopList[] = await getShopList(
      requestUrl
    );
    //エラーなら終了処理
    if (typeof responseShopList === "string") {
      ifResponseIsError(responseShopList);
      return false;
    }
    //エラーでなければ店情報をローカルストレージに格納
    setLocalStrageArray("shopListStorage", responseShopList);
    //検索中アニメーション終了
    setIsSearching(false);
    //検索一覧画面に遷移
    navigation("/list");
  };

  /**
   * レスポンスがエラーだった時の関数
   * レスポンスがstringであればエラーとみなす。
   * @param value
   * @returns false
   */
  const ifResponseIsError: (errorMessage: string) => void = (value) => {
    const errorMessage = value;
    setModalState({
      message: errorMessage,
      isPossibleClose: true,
    });
    setIsSearching(false);
  };

  return (
    <>
      <div className={IndexStyle.content}>
        {isSearching ? (
          <div className={IndexStyle.title}>検索中…</div>
        ) : (
          <div className={IndexStyle.title}>
            <div className={IndexStyle.titleMain}>チカバ</div>
            <div className={IndexStyle.titleSub}>
              の素敵な居酒屋・バーを探しましょう。
            </div>
          </div>
        )}

        <SelectGenre onClickHandler={handleSearchButtonClick}></SelectGenre>
      </div>
    </>
  );
};
