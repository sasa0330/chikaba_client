/**
 * 検索一覧画面
 */

import {
  useState,
  useContext,
  useRef,
  useEffect,
  EffectCallback,
  DependencyList,
} from "react";
import { useNavigate } from "react-router-dom";
import { SelectGenre } from "../molecules/SelectGenre";
import {
  ShopListContext,
  ModalContext,
  SearchStateContext,
} from "../../providers/GlobalProviders";
import { TypeShopList } from "../../type/globalTypes";
import { IndexStyle } from "./Style";

export const Index = () => {
  const { changeModalState } = useContext(ModalContext);
  const { setShopList, shopList } = useContext(ShopListContext);
  const { isSearching, setIsSearching } = useContext(SearchStateContext);

  let hotpepper_lat: number;
  let hotpepper_lng: number;
  let hotpepper_genre: string;
  //let isGenreCodeBrank: boolean;

  const navigation = useNavigate();
  useEffect(() => {
    console.log("shopList");
    console.log(shopList);
    console.log(hotpepper_lat);
    console.log(hotpepper_lng);
    console.log(hotpepper_genre);
  });
  /**
   * 「店を検索する」を押した時の処理
   */
  const handleSearchButtonClick: (e: any) => Promise<void> = async (e) => {
    setShopList([]);
    setIsSearching(true);
    hotpepper_genre = e.currentTarget.dataset.genreCode;
    //店情報初期化
    //検索中のローディング表示
    //changeModalState("検索中…", true, false);
    //現在地取得
    await getCurrentLocation().catch((error) => console.log(error));
    //現在地店一覧取得
    console.log("HotpepperAPI 開始");
    await getShopList();
    console.log("HotpepperAPI 完了");
    setIsSearching(false);
    //changeModalState("", false, false);
    navigation("/list"); /* /hoge に遷移 */
  };

  /**
   * 現在地を取得する処理
   */
  const getCurrentLocation: () => Promise<void> = () => {
    return new Promise(function (resolve: any, rejecte: any) {
      if (!navigator.geolocation) {
        // Geolocation APIに対応していない場合
        changeModalState(
          "この端末は位置情報取得に対応していません。",
          false,
          false
        );
        rejecte();
      }
      //現在地取得API
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // handle success

          //緯度
          hotpepper_lat = position.coords.latitude;
          //経度
          hotpepper_lng = position.coords.longitude;

          resolve();
        },
        (geolocationError) => {
          // handle error
          const geolocationErrorCode: string = String(geolocationError.code);
          let modalMsg: string = "";
          switch (geolocationErrorCode) {
            // 位置情報が取得できない場合
            case "1":
              modalMsg = "位置情報の取得ができませんでした。";
              break;
            // Geolocationの使用が許可されない場合
            case "2":
              modalMsg = "位置情報取得の使用許可がされませんでした。";
              break;
            // タイムアウトした場合
            case "3":
              modalMsg = "位置情報取得中にタイムアウトしました。";
              break;
            default:
          }
          changeModalState(modalMsg, false, true);
          rejecte();
        },
        {
          //enableHighAccuracy: true, // より高精度な位置
        }
      );
    });
  };

  /**
   * ホットペッパーAPIに投げるURLを作成する関数
   * @param lat - 緯度
   * @param lng - 経度
   * @param genre - ジャンルコード
   * @returns - 引数をもとにした周辺の店情報URL
   */
  const generateRequestHotpepperUrl: (
    lat: number,
    lng: number,
    genre: string
  ) => string = (lat: number, lng: number, genre: string) => {
    const getParameter = `?lat=${lat}&lng=${lng}&genre=${genre}`;
    //return `http://localhost:3001/api/shopList${getParameter}`;
    return `https://express-search-shop.onrender.com/api/shopList${getParameter}`;
  };
  //店一覧の取得
  const getShopList: () => Promise<void> = async () => {
    const requestUrl: string = generateRequestHotpepperUrl(
      hotpepper_lat,
      hotpepper_lng,
      hotpepper_genre
    );
    try {
      console.log("fetch開始");
      console.log(requestUrl);
      const response: any = await fetch(requestUrl);
      console.log("fetch実行済み");
      const data: TypeShopList[] = await response.json();
      console.log("fetch終了");

      const responseShopList: TypeShopList[] = data;
      setShopList((prevState: TypeShopList[]) => [
        ...prevState,
        ...responseShopList,
      ]);
      if (responseShopList.length) {
        changeModalState("", false, true);
      }
      sessionStorage.setItem(
        "shopListStorage",
        JSON.stringify(responseShopList)
      );
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
