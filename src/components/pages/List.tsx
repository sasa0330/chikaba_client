import React, { useState, useEffect, useContext } from 'react';
import { ShopList } from '../molecules/ShopList';
import axios from 'axios';
import { shopListType } from '../../type/shopList';
import { ShopSearch } from '../molecules/ShopSearch';
import { ModalContext } from '../../providers/ModalProvider';



export const List = () => {
    const { changeModalState } = useContext(ModalContext);
    const [genreSelectbox, setGenreSelectbox] = useState({ "code": "G001", "genre": "居酒屋" });
    const [shopList, setShoplist] = useState<Array<shopListType>>([]);

    let hotpepper_lat: number;
    let hotpepper_lng: number;
    const hotpepper_genre: string = genreSelectbox.code;
    useEffect(() => {

    }, []);

    const clickGetShopList = async () => {

        //店情報初期化
        setShoplist([]);
        changeModalState("検索中…", true, false);
        await getCurrentLocation().catch((error) => console.log(error));
        await getShopList().catch((error) => console.log(error));
        console.log("HotpepperAPI 完了");
        changeModalState("", false, false);
    };

    //現在地の取得
    const getCurrentLocation = () => {
        return new Promise(function (resolve: any, rejecte: any) {
            if (!navigator.geolocation) {
                // Geolocation APIに対応していない場合
                changeModalState("この端末は位置情報取得に対応していません。", false, false);
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
                    enableHighAccuracy: true, // より高精度な位置
                }
            )
        })
    }

    //店一覧の取得
    const getShopList = () => {
        return new Promise(function (resolve: any, rejecte: any) {
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

                    if (responseShopList.length === 0) {
                        changeModalState("検索結果なし", false, true);
                    }
                    else {
                        changeModalState("", false, true);
                    }
                    sessionStorage.setItem("shopListStorage", JSON.stringify(responseShopList));
                    resolve();
                })
                .catch(function (error) {
                    // handle error
                    console.log("HotpepperAPI 失敗");
                    console.log(error);
                    changeModalState("情報が取得できませんでした。", false, true);
                    rejecte();
                });
        })
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
