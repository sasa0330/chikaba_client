/**
 * 検索一覧画面
 */

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SelectGenre } from "../molecules/SelectGenre";
import { useCurrentLocation } from "../../hooks/useCurrentLocation";
import { useLocalStrage } from "../../hooks/useLocalStrage";

import {
  ModalContext,
  SearchStateContext,
} from "../../providers/GlobalProviders";
import { TypeShopList } from "../../type/globalTypes";
import { IndexStyle } from "./Style";

export const Index = () => {
  const { changeModalState } = useContext(ModalContext);
  const { isSearching, setIsSearching } = useContext(SearchStateContext);
  const { setModalState } = useContext(ModalContext);
  const { setLocalStrageArray } = useLocalStrage();

  let hotpepper_genre: string;
  //let isGenreCodeBrank: boolean;

  const navigation = useNavigate();
  const { getCurrentPosition } = useCurrentLocation();
  /**
   * 「店を検索する」を押した時の処理
   */
  const handleSearchButtonClick: (e: any) => Promise<void | boolean> = async (
    e
  ) => {
    setIsSearching(true);
    hotpepper_genre = e.currentTarget.dataset.genreCode;
    //店情報初期化
    //検索中のローディング表示
    //changeModalState("検索中…", true, false);
    //現在地取得
    const currentPositionOrErrorMessage = await getCurrentPosition();
    if (typeof currentPositionOrErrorMessage === "string") {
      const errorMessage = currentPositionOrErrorMessage;
      setModalState({
        message: errorMessage,
        isPossibleClose: true,
      });
      setIsSearching(false);
      return false;
    }
    const currentPosition = currentPositionOrErrorMessage;
    const requestUrl: string = generateRequestHotpepperUrl(
      currentPosition.lat,
      currentPosition.lng,
      hotpepper_genre
    );

    //現在地店一覧取得
    console.log("HotpepperAPI 開始");
    await getShopList(requestUrl);
    console.log("HotpepperAPI 完了");
    setIsSearching(false);
    //changeModalState("", false, false);
    navigation("/list"); /* /hoge に遷移 */
  };

  /**
   * ホットペッパーAPIに投げるURLを作成する関数
   * @param lat - 緯度
   * @param lng - 経度
   * @param genre - ジャンルコード
   * @returns - 引数をもとにした周辺の店情報URL
   */
  const generateRequestHotpepperUrl: (
    lat: number | undefined,
    lng: number,
    genre: string
  ) => string = (lat, lng, genre) => {
    const getParameter = `?lat=${lat}&lng=${lng}&genre=${genre}`;
    //return `http://localhost:3001/api/shopList${getParameter}`;
    return `https://express-search-shop.onrender.com/api/shopList${getParameter}`;
  };
  //店一覧の取得
  const getShopList: (requestUrl: string) => Promise<void> = async (
    requestUrl
  ) => {
    try {
      console.log("fetch開始");
      const response: any = await fetch(requestUrl);
      console.log("fetch実行済み");
      const data: TypeShopList[] = await response.json();
      console.log("fetch終了");

      const responseShopList: TypeShopList[] = data;
      if (responseShopList.length) {
        changeModalState("", false, true);
      }
      setLocalStrageArray("shopListStorage", responseShopList);
    } catch (error) {
      // handle error
      console.log("HotpepperAPI 失敗");
      console.log(error);
      changeModalState("情報が取得できませんでした。", false, true);
    }
  };
  return (
    <>
      <div className={IndexStyle.content}>
        {isSearching ? (
          <div className={IndexStyle.title}>検索中…</div>
        ) : (
          <div className={IndexStyle.title}>
            どのような飲食店をお探しですか？
          </div>
        )}

        <SelectGenre onClickHandler={handleSearchButtonClick}></SelectGenre>
      </div>
    </>
  );
};
