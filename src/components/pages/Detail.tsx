/**
 * 詳細画面
 */
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopListContext } from "../../providers/ShopListProvider";

export const Detail = () => {
  const { shopList } = useContext(ShopListContext);
  const { itemId } = useParams();

  return (
    <>
      {shopList.forEach((shop) => {
        if (shop.itemId === itemId) {
          console.log("取得できた！");
          return (
            <>
              <div>{shop.shopName}</div>
              <div>{shop.budgetName}</div>
              <div>{shop.lunch}</div>
              <div>{shop.address}</div>
            </>
          );
        }
      })}
    </>
  );
};
