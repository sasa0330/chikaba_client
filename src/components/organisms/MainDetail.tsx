/**
 * 詳細画面
 */
import { useParams } from "react-router-dom";
import { TypeShopList } from "../../type/globalTypes";
import { Badges } from "../molecules/Badges";
import { useLocalStrage } from "../../hooks/useLocalStrage";
import { detailStyle } from "./Style";
export const MainDetail = () => {
  //URLパラメータのitemId取得
  const { itemId } = useParams();
  const { getLocalStrageArray } = useLocalStrage();
  const shopList: TypeShopList[] = getLocalStrageArray("shopListStorage");

  let shopObj: Pick<
    TypeShopList,
    "shopName" | "photo" | "budgetName" | "lunch" | "address" | "smoking"
  > = {
    shopName: "",
    photo: "",
    budgetName: "",
    lunch: "",
    address: "",
    smoking: "",
  };
  shopList.forEach((shop: TypeShopList) => {
    if (shop.itemId === itemId) return (shopObj = shop);
  });

  const photoUrl = shopObj.photo;
  const style = detailStyle(photoUrl);
  return (
    <>
      <div className={style.Main}>
        <img className={style.img} src={shopObj.photo} alt={shopObj.shopName} />
        <div className={style.shopName}>{shopObj.shopName}</div>
      </div>
      <Badges lunch={shopObj.lunch} smoking={shopObj.smoking}></Badges>
      <div>{shopObj.budgetName}</div>
      <div>{shopObj.address}</div>
    </>
  );
};
