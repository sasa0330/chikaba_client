import React, { useState } from 'react';
import axios from 'axios';
//import { BrowserRouter, Route } from 'react-router-dom';

import { Header } from './components/molecules/Header';
import { ShopSearch } from './components/molecules/ShopSearch';
import { ShopList } from './components/molecules/ShopList';
import { Footer } from './components/molecules/Footer'
import { MesageModal } from './components/molecules/MesageModal';
import { shopListType } from './type/shopList';

export const App = () => {
  const [shopList, setShoplist] = useState<Array<shopListType>>([]);
  const [genreSelectbox, setGenreSelectbox] = useState({ "code": "G001", "genre": "居酒屋" });
  const [modalText, setModalText] = useState<string>("");
  const [isModalCancel, setIsModalCancel] = useState<boolean>(false);
  const [shopListCount, setShopListCount] = useState<number>(0);
  const AxiosRequests = {
    PROXY_SERVER_URL: "https://radiant-spire-39097.herokuapp.com/",
    BASE_URL_HOTPEPPER: "http://webservice.recruit.co.jp/hotpepper/gourmet/v1/",
    API_KEY_HOTPEPPER: "d1ad78d8ad96165e"
  };
  let hotpepper_lat: number;
  let hotpepper_lng: number;
  const hotpepper_genre = genreSelectbox.code;


  const clickGetShopList = () => {
    //店情報初期化
    setShoplist([]);
    setShopListCount(0);

    setModalText("検索中…")
    getCurrentLocation();
  };

  //現在地の取得
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      // Geolocation APIに対応していない場合
      setModalText("この端末は位置情報取得に対応していません。")
      setShopListCount(0);
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // handle success
        //緯度
        hotpepper_lat = position.coords.latitude;
        //経度
        hotpepper_lng = position.coords.longitude;
        getShopList();
      },
      (geolocationError) => {
        // handle error
        const geolocationErrorCode: string = String(geolocationError.code);
        let modalMsg: string = "";
        switch (geolocationErrorCode) {
          // 位置情報が取得できない場合
          case "POSITION_UNAVAILABLE":
            modalMsg = "位置情報の取得ができませんでした。";
            break;
          // Geolocationの使用が許可されない場合
          case "PERMISSION_DENIED":
            modalMsg = "位置情報取得の使用許可がされませんでした。";
            break;
          // タイムアウトした場合
          case "PERMISSION_DENIED_TIMEOUT":
            modalMsg = "位置情報取得中にタイムアウトしました。";
            break;
          default:
        }
        setModalText(modalMsg);
        setShopListCount(0);
      }
    )
  }

  //店一覧の取得
  const getShopList = () => {
    const requestUrl = `${AxiosRequests.PROXY_SERVER_URL}${AxiosRequests.BASE_URL_HOTPEPPER}?key=${AxiosRequests.API_KEY_HOTPEPPER}&lat=${hotpepper_lat}&lng=${hotpepper_lng}&genre=${hotpepper_genre}&format=json`;
    console.log(requestUrl);
    axios.get(requestUrl)
      .then(function (response) {
        // handle success
        //メモ
        //mapとかで一つ一つデータを格納するときは、その中でsetStateすると無駄に再描画する
        //ので、一回配列とかにしちゃうのが良さそう
        const responseShopList: Array<shopListType> = response.data.results.shop.map((item: any) => (
          {
            key: item.id,
            photoPcM: item.photo.pc.m,
            shopName: item.name,
            lunch: item.lunch,
            budgetName: item.budget.name,
            address: item.address
          }
        ));

        setShoplist((prevState) => [...prevState, ...responseShopList]);

        let modalMsg: string = "";
        if (responseShopList.length === 0) {
          modalMsg = "検索結果なし";
          setIsModalCancel(true);
        }
        else {
          modalMsg = "";
        }
        setModalText(modalMsg);
        setShopListCount(responseShopList.length);
      })
      .catch(function (error) {
        // handle error
        console.log("HotpepperAPI 失敗");
        setModalText("情報が取得できませんでした。" + error)
        setShopListCount(0);
      })
      .finally(function () {
        // always
        console.log("HotpepperAPI 完了");
      });
  }

  return (
    <>
      <Header />
      <ShopSearch clickGetShopList={clickGetShopList} setGenreSelectbox={setGenreSelectbox} />
      <ul className="shopList">
        {
          shopList.map((shop) => {
            return (
              <ShopList key={shop.key} photoPcM={shop.photoPcM} shopName={shop.shopName} lunch={shop.lunch} budgetName={shop.budgetName} address={shop.address} />
            )
          })
        }
      </ul>
      <Footer shopListCount={shopListCount} />
      <MesageModal modalText={modalText} isModalCancel={isModalCancel} setModalText={setModalText} />
    </>
  );
}