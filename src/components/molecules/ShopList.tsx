/**
 * 検索結果店一覧
 */

import React, { useContext } from 'react';
import { TypeShopList } from '../../type/globalTypes';
import { Link } from "react-router-dom";
import { ShopListContext } from '../../providers/ShopListProvider';

export const ShopList: React.FC<TypeShopList> = (props) => {
    const { itemId, photoPcM, shopName, lunch, budgetName, address } = props;
    const { setCurrentItemId } = useContext(ShopListContext);

    const getShopDetail = (itemId: string) => {
        setCurrentItemId(itemId);
    }
    return (
        <React.Fragment key={itemId}>
            <li className="shopList__item" onClick={() => getShopDetail(itemId)}>
                <Link to={`/detail/${itemId}`} className="shopList__link">
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