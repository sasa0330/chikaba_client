/**
 * 検索結果店一覧
 */

import React from "react";
import { TypeShopList } from "../../type/globalTypes";
import { Link } from "react-router-dom";
import { Badges } from "../molecules/Badges";
import { ShopListItemStyle } from "./Style";

export const ShopListItem: React.FC<TypeShopList> = (props) => {
  const { itemId, photo, shopName, lunch, budgetName, access, smoking } = props;

  return (
    <React.Fragment key={itemId}>
      <li className={ShopListItemStyle.item}>
        <Link to={`/detail/${itemId}`} className={ShopListItemStyle.link}>
          <div className={ShopListItemStyle.wrapImg}>
            <img src={photo} alt={shopName} className={ShopListItemStyle.img} />
          </div>
          <div className={ShopListItemStyle.text}>
            <Badges lunch={lunch} smoking={smoking}></Badges>
            <div className={ShopListItemStyle.title}>{shopName}</div>
            <div className={ShopListItemStyle.dicription}>
              <div className={ShopListItemStyle.access}>{`${access}`}</div>
              <div>ディナー：{budgetName}</div>
            </div>
          </div>
        </Link>
      </li>
    </React.Fragment>
  );
};
