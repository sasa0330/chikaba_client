/**
 * 詳細画面
 */
import { useParams } from "react-router-dom";
import { TypeShopList } from "../../type/globalTypes";
import { css } from "@emotion/css";

const style = {
  img: css`
    text-align: center;
    margin: 20px 0;
  `,
  shopName: css`
    font-size: 30px;
    font-weight: bold;
  `,
};
export const MainDetail = () => {
  //URLパラメータのitemId取得
  const { itemId } = useParams();
  //セッションストレージの一覧情報オブジェクト取得
  const shopListString = sessionStorage.getItem("shopListStorage");
  const shopList: TypeShopList[] = shopListString
    ? JSON.parse(shopListString)
    : null;
  let shopObj: Pick<
    TypeShopList,
    "shopName" | "photoPcM" | "budgetName" | "lunch" | "address"
  > = {
    shopName: "",
    photoPcM: "",
    budgetName: "",
    lunch: "",
    address: "",
  };
  shopList.forEach((shop: TypeShopList) => {
    if (shop.itemId === itemId) return (shopObj = shop);
  });

  return (
    <>
      <div className={style.img}>
        <img src={shopObj.photoPcM} alt={shopObj.shopName} />
      </div>
      <div className={style.shopName}>{shopObj.shopName}</div>
      <div>{shopObj.budgetName}</div>
      <div>{shopObj.lunch}</div>
      <div>{shopObj.address}</div>
    </>
  );
};
