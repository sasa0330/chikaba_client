/**
 * 検索結果店一覧
 */

import React from "react";
import { TypeShopList } from "../../type/globalTypes";
import { Link } from "react-router-dom";
import { ShopListItemStyle } from "./Style";

export const ShopListItem: React.FC<TypeShopList> = (props) => {
  const { itemId, photoPcM, shopName, lunch, budgetName, address } = props;

  return (
    <React.Fragment key={itemId}>
      <li className={ShopListItemStyle.item}>
        <Link to={`/detail/${itemId}`} className={ShopListItemStyle.link}>
          <div className={ShopListItemStyle.wrapImg}>
            <img
              src={photoPcM}
              alt={shopName}
              className={ShopListItemStyle.img}
            />
          </div>
          <div className={ShopListItemStyle.text}>
            <div className={ShopListItemStyle.title}>{shopName}</div>
            <div className={ShopListItemStyle.dicription}>
              <div>ランチ：{lunch}</div>
              <div>ディナー：{budgetName}</div>
              <div>{`${address}`}</div>
            </div>
          </div>
        </Link>
      </li>
    </React.Fragment>
  );
};
