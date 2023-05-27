import { FC } from "react";
import { ShopListItem } from "./ShopListItem";
import { TypeShopList } from "../../type/globalTypes";
import { ShopListSearchResultStyle } from "./Style";

export const ShopListSearchResult: FC<{ shopList: TypeShopList[] }> = (
  props
) => {
  const { shopList } = props;

  return (
    <>
      {shopList.length > 0 ? (
        <ul className={ShopListSearchResultStyle.shopList}>
          {shopList.map((shop) => {
            return (
              <ShopListItem
                key={shop.itemId}
                itemId={shop.itemId}
                photo={shop.photo}
                shopName={shop.shopName}
                lunch={shop.lunch}
                budgetName={shop.budgetName}
                address={shop.address}
                access={shop.access}
                smoking={shop.smoking}
                catch={shop.catch}
              />
            );
          })}
        </ul>
      ) : (
        <div>検索結果なし</div>
      )}
    </>
  );
};
