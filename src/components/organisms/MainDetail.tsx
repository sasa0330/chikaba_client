/**
 * 詳細画面
 */
import { useParams } from "react-router-dom";
import { TypeShopList } from "../../type/globalTypes";
import { css } from "@emotion/css";
import { Badges } from "../molecules/Badges";
import { useLocalStrage } from "../../hooks/useLocalStrage";

const style = {
  main: css`
    position: relative;
    margin-bottom: 10.256410256410255vw;
    aspect-ratio: 1;
    width: 100%;
    height: auto;
  `,
  img: css`
    width: 100%;
    object-fit: cover;
    aspect-ratio: 1;
  `,
  shopName: css`
    position: absolute;
    bottom: 0;
    left: 0;
    color: #fff;
    font-weight: bold;
    font-size: 6.128205vw;
    width: 100%;
    padding: 3.8461538461538463vw 2.564102564102564vw;
    text-shadow: 2px 2px 2px #000;
  `,
};
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

  return (
    <>
      <div className={style.main}>
        <img className={style.img} src={shopObj.photo} alt={shopObj.shopName} />
        <div className={style.shopName}>{shopObj.shopName}</div>
      </div>
      <Badges lunch={shopObj.lunch} smoking={shopObj.smoking}></Badges>
      <div>{shopObj.budgetName}</div>
      <div>{shopObj.address}</div>
    </>
  );
};
