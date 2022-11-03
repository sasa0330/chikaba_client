import React, { useState, useEffect } from 'react';
import { ShopList } from '../molecules/ShopList';
import axios from 'axios';
import { shopListType } from '../../type/shopList';
import { ShopSearch } from '../molecules/ShopSearch';

type Props = {
    setShopListCount: Function;
    setIsModalCancel: Function;
    setModalText: Function;
}


export const List = (props: Props) => {
    const { setShopListCount, setIsModalCancel, setModalText } = props;
    const [genreSelectbox, setGenreSelectbox] = useState({ "code": "G001", "genre": "居酒屋" });
    const [shopList, setShoplist] = useState<Array<shopListType>>([]);

    let hotpepper_lat: number;
    let hotpepper_lng: number;
    const hotpepper_genre: string = genreSelectbox.code;
    useEffect(() => {
        /*
          初めて表示したとき（詳細画面から戻ってきた時）は
          セッションストレージに情報があれば、その店舗情報を表示する。
          的なことをしたいなー
        */
        console.log(sessionStorage.getItem("shopListStorage"));
        //setShoplist(sessionStorage.getItem("shopListStorage"));
        console.log("表示した");
    }, []);
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
        //すごく良くないことをしているのでどうにかしたい
        const PROXY_SERVER_URL = "https://radiant-spire-39097.herokuapp.com/";
        const HOTPEPPER_API_KEY = "a6972642ce7d9bcd";
        const HOTPEPPER_BASE_URL = "http://webservice.recruit.co.jp/hotpepper/gourmet/v1/";

        const requestUrl = `${PROXY_SERVER_URL}${HOTPEPPER_BASE_URL}?key=${HOTPEPPER_API_KEY}&lat=${hotpepper_lat}&lng=${hotpepper_lng}&genre=${hotpepper_genre}&format=json`;
        console.log(requestUrl);
        axios.get(requestUrl)
            .then(function (response) {
                // handle success
                //メモ
                //mapとかで一つ一つデータを格納するときは、その中でsetStateすると無駄に再描画する
                //ので、一回配列とかにしちゃうのが良さそう
                const responseShopList: Array<shopListType> = response.data.results.shop.map((item: any) => (
                    {
                        propsKey: item.id,
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
                sessionStorage.setItem("shopListStorage", JSON.stringify(responseShopList));
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
            <ShopSearch clickGetShopList={clickGetShopList} setGenreSelectbox={setGenreSelectbox} />
            <ul className="shopList">
                {
                    shopList.map((shop) => {
                        return (
                            <ShopList propsKey={shop.propsKey} photoPcM={shop.photoPcM} shopName={shop.shopName} lunch={shop.lunch} budgetName={shop.budgetName} address={shop.address} />
                        )
                    })
                }
            </ul>
        </>
    )
}
