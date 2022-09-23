import React, { useState } from 'react';
import axios from 'axios';
//import { BrowserRouter, Route } from 'react-router-dom';

import { Header } from './components/molecules/Header';
import { ShopSearch } from './components/molecules/ShopSearch';
import { ShopList } from './components/molecules/ShopList';
import { Footer } from './components/molecules/Footer'
import { MesageModal } from './components/MesageModal';
import { shopListType } from './type/shopList';

export const App = () => {
  const [shopList, setShoplist] = useState<Array<shopListType>>([]);
  const [genreSelectbox, setGenreSelectbox] = useState({ "code": "G001", "genre": "居酒屋" });
  const [messageModalText, setMessageModalText] = useState("");
  const [isDispShopList, setIsDispShopList] = useState(false);
  const AxiosRequests = {
    PROXY_SERVER_URL: "https://radiant-spire-39097.herokuapp.com/",
    BASE_URL_HOTPEPPER: "http://webservice.recruit.co.jp/hotpepper/gourmet/v1/",
    API_KEY_HOTPEPPER: "d1ad78d8ad96165e"
  };
  let hotpepper_lat: number;
  let hotpepper_lng: number;
  const hotpepper_genre = genreSelectbox.code;

  const clickGetShopList = () => {
    setMessageModalText("検索中…")
    getCurrentLocation();
  };

  //現在地の取得
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      // Geolocation APIに対応していない場合
      setMessageModalText("この端末は位置情報取得に対応していません。")
      setIsDispShopList(false);
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
        setIsDispShopList(false);
        const geolocationErrorCode: string = String(geolocationError.code);
        switch (geolocationErrorCode) {
          // 位置情報が取得できない場合
          case "POSITION_UNAVAILABLE":
            setMessageModalText("位置情報の取得ができませんでした。")
            break;
          // Geolocationの使用が許可されない場合
          case "PERMISSION_DENIED":
            setMessageModalText("位置情報取得の使用許可がされませんでした。")
            break;
          // タイムアウトした場合
          case "PERMISSION_DENIED_TIMEOUT":
            setMessageModalText("位置情報取得中にタイムアウトしました。")
            break;
          default:
        }
      }
    )
  }

  //店一覧の取得
  const getShopList = () => {
    setShoplist([]);
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
            id: item.id,
            photoPcM: item.photo.pc.m,
            shopName: item.name,
            lunch: item.lunch,
            budgetName: item.budget.name,
            large_areaName: item.large_area.name,
            Access: item.access
          }
        ));
        if (responseShopList.length === 0) {
          console.log("0件");
        }
        setShoplist((prevState) => [...prevState, ...responseShopList]);
        setMessageModalText("")
        setIsDispShopList(true);
      })
      .catch(function (error) {
        // handle error
        // TODO：画面にエラーメッセージを出したい
        console.log("HotpepperAPI 失敗");
        setMessageModalText("情報が取得できませんでした。" + error)
        setIsDispShopList(false);
      })
      .finally(function () {
        // always
        console.log("HotpepperAPI 完了");
      });
  }

  return (
    <>
      <div className="frameSpSize">
        <Header />
        <ShopSearch clickGetShopList={clickGetShopList} setGenreSelectbox={setGenreSelectbox} />
        <ul className="shopList">
          {
            shopList.map((shop) => {
              return (
                <ShopList id={shop.id} photoPcM={shop.photoPcM} shopName={shop.shopName} lunch={shop.lunch} budgetName={shop.budgetName} large_areaName={shop.large_areaName} access={shop.access} />
              )
            })
          }
        </ul>
        <Footer isDispShopList={isDispShopList} />
        <MesageModal messageModalText={messageModalText} />
      </div>
    </>
  );
}