import React from 'react';
import { shopListType } from '../../type/shopList';

type Props = shopListType;

export const ShopList = (props: Props) => {
    const { key, photoPcM, shopName, lunch, budgetName, address } = props;

    return (
        <React.Fragment key={key}>
            <li className="shopList__item">
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
            </li>
        </React.Fragment>

    )
}