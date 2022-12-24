/**
 * 検索一覧画面
 */

import { useState, useEffect, useContext } from 'react';
import { ShopList } from '../molecules/ShopList';
import { TypeShopList } from '../../type/shopList';
import { ShopSearch } from '../molecules/ShopSearch';
import { ModalContext } from '../../providers/ModalProvider';


type TypeGenle = {
    code: string;
    genre: string;
}

export const List = () => {
    const { changeModalState } = useContext(ModalContext);
    const [genreSelectbox, setGenreSelectbox] = useState<TypeGenle>({ "code": "", "genre": "" });
    const [shopList, setShoplist] = useState<TypeShopList[]>([]);

    let hotpepper_lat: number;
    let hotpepper_lng: number;
    const hotpepper_genre: string = genreSelectbox.code !== "" ? genreSelectbox.code : "";

    useEffect(() => {
        if (hotpepper_genre) {
            changeShopList();
        }
        //ESLintが「hotpepper_genreとchangeShopListの更新時もuseEffectしてよ」と注意してくる。無視する。
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [genreSelectbox]);

    /**
     * 「店を検索する」を押した時の処理
     */
    const changeShopList = async () => {
        //店情報初期化
        setShoplist([]);
        //検索中のローディング表示
        changeModalState("検索中…", true, false);
        //現在地取得
        await getCurrentLocation().catch((error) => console.log(error));
        //現在地店一覧取得
        console.log("HotpepperAPI 開始");
        await getShopList();
        console.log("HotpepperAPI 完了");
        //検索中のローディング非表示
        changeModalState("", false, false);
    };

    /**
     * 現在地を取得する処理 
     */
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
                    //enableHighAccuracy: true, // より高精度な位置
                }
            )
        })
    }

    //店一覧の取得
    const getShopList = async () => {

        const requestUrl: string = `https://express-search-shop.onrender.com/api/shopList?lat=${hotpepper_lat}&lng=${hotpepper_lng}&shopGenre=${hotpepper_genre}`;
        try {
            const response = await fetch(requestUrl);
            const data = await response.json();
            console.log("HotpepperAPI then data");
            const responseShopList: TypeShopList[] = data;
            setShoplist((prevState) => [...prevState, ...responseShopList]);
            if (responseShopList.length === 0) {
                changeModalState("検索結果なし", false, true);
            }
            else {
                changeModalState("", false, true);
            }
            sessionStorage.setItem("shopListStorage", JSON.stringify(responseShopList));
        } catch (error) {
            // handle error
            console.log("HotpepperAPI 失敗");
            console.log(error);
            changeModalState("情報が取得できませんでした。", false, true);
        }
    }



    return (
        <>
            <ShopSearch setGenreSelectbox={setGenreSelectbox} />
            <ul className="shopList">
                {
                    shopList.map((shop) => {
                        return (
                            <ShopList itemId={shop.itemId} photoPcM={shop.photoPcM} shopName={shop.shopName} lunch={shop.lunch} budgetName={shop.budgetName} address={shop.address} />
                        )
                    })
                }
            </ul>
        </>
    )
}
