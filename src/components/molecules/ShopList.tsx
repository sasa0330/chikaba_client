/**
 * 検索結果店一覧
 */

import React from 'react';
import { TypeShopList } from '../../type/shopList';
import { Link } from "react-router-dom";

type Props = TypeShopList;

export const ShopList = (props: Props) => {
    const { itemId, photoPcM, shopName, lunch, budgetName, address } = props;

    const getShopDetail = (itemId: string, shopName: string, address: string) => {
        console.log(itemId);
        console.log(shopName);
        console.log(address);
    }
    return (
        <React.Fragment key={itemId}>
            <li className="shopList__item" onClick={() => getShopDetail(itemId, shopName, address)}>
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

        </React.Fragment >

    )
}