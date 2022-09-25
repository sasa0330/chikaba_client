import React from 'react';
import { shopListType } from '../../type/shopList';
import axios from 'axios';
import { Link } from "react-router-dom";

type Props = shopListType;

export const ShopList = (props: Props) => {
    const { propsKey, photoPcM, shopName, lunch, budgetName, address } = props;
    const env = process.env;



    const getShopDetail = (thisKey: string) => {
        const requestUrl = `${env.REACT_APP_PROXY_SERVER_URL}${env.REACT_APP_HOTPEPPER_BASE_URL}?key=${env.REACT_APP_HOTPEPPER_API_KEY}&id=${thisKey}&format=json`;
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
                console.log(responseShopList);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always

            });
    }

    return (
        <React.Fragment key={propsKey}>
            <li className="shopList__item" onClick={() => getShopDetail(String(propsKey))}>
                <Link to='/detail' className="shopList__link">
                    <div className="shopList__img">
                        <img src={photoPcM} alt={shopName} />
                    </div>
                    <div className="shopList__text">
                        <h3 className="shopList__title">{shopName}</h3>
                        <ul className="shopList__discription">
                            <li>ランチ：{lunch}</li>
                            <li>ディナー：{budgetName}</li>
                            <li>{`${address}`}</li>
                        </ul>
                    </div>
                </Link>
            </li>

        </React.Fragment>

    )
}