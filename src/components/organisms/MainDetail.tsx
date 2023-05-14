/**
 * 詳細画面
 */
import { useParams } from "react-router-dom";
import { TypeShopList } from "../../type/globalTypes";
import { Badges } from "../molecules/Badges";
import { css } from "@emotion/css";
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

  //shopObjの中身使いたいので、ここだけStyle.tsから切り離している
  const detailStyleMain = css`
    position: relative;
    margin-bottom: 10.256410256410255vw;
    aspect-ratio: 1;
    width: 100%;
    height: auto;
    overflow: hidden;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${shopObj.photo});
      filter: blur(10px);
    }
  `;
  return (
    <>
      <div className={detailStyleMain}>
        <img
          className={detailStyle.img}
          src={shopObj.photo}
          alt={shopObj.shopName}
        />
        <div className={detailStyle.shopName}>{shopObj.shopName}</div>
      </div>
      <Badges lunch={shopObj.lunch} smoking={shopObj.smoking}></Badges>
      <div>{shopObj.budgetName}</div>
      <div>{shopObj.address}</div>
    </>
  );
};
