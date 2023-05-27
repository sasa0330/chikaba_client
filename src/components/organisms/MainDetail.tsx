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
    | "shopName"
    | "photo"
    | "budgetName"
    | "lunch"
    | "address"
    | "smoking"
    | "catch"
    | "access"
  > = {
    shopName: "",
    photo: "",
    budgetName: "",
    lunch: "",
    address: "",
    smoking: "",
    catch: "",
    access: "",
  };
  shopList.forEach((shop: TypeShopList) => {
    if (shop.itemId === itemId) return (shopObj = shop);
  });

  const photoUrl = shopObj.photo;
  const style = detailStyle(photoUrl);
  return (
    <>
      <div className={style.MainImg}>
        <img className={style.img} src={shopObj.photo} alt={shopObj.shopName} />
        <div className={style.shopName}>{shopObj.shopName}</div>
      </div>
      <div className={style.MainText}>
        <Badges lunch={shopObj.lunch} smoking={shopObj.smoking}></Badges>
        <div className={style.access}>{shopObj.access}</div>
        <div className={style.paragraph}>
          ディナー目安：{shopObj.budgetName}
        </div>
        <div className={style.paragraph}>{shopObj.address}</div>
        <div className={style.paragraph}>{shopObj.catch}</div>
      </div>
    </>
  );
};
