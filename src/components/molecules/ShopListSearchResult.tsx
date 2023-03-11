import { FC } from "react";
import { ShopListItem } from "./ShopListItem";
import { TypeShopList } from "../../type/globalTypes";

export const ShopListSearchResult: FC<{ shopList: TypeShopList[] }> = (
  props
) => {
  const { shopList } = props;

  return (
    <>
      {shopList.length > 0 ? (
        <ul className="shopList">
          {shopList.map((shop) => {
            return (
              <ShopListItem
                key={shop.itemId}
                itemId={shop.itemId}
                photoPcM={shop.photoPcM}
                shopName={shop.shopName}
                lunch={shop.lunch}
                budgetName={shop.budgetName}
                address={shop.address}
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
