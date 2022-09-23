import React from 'react';
import { shopListType } from '../../type/shopList';

type Props = shopListType;

export const ShopList = (props: Props) => {
    const { id, photoPcM, shopName, lunch, budgetName, large_areaName, access } = props;

    return (
        <React.Fragment key={id}>
            <li className="shopList__item">
                <div className="shopList__img">
                    <img src={photoPcM} alt={shopName} />
                </div>
                <div className="shopList__text">
                    <h3 className="shopList__title">{shopName}</h3>
                    <ul className="shopList__discription">
                        <li>ランチ：{lunch}</li>
                        <li>ディナー：{budgetName}</li>
                        <li>{`${large_areaName}${access}`}</li>
                    </ul>
                </div>
            </li>
        </React.Fragment>

    )
}