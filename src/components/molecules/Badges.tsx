import { Badge } from "../atoms/Badge";
import { ShopListItemStyle } from "./Style";
export const Badges = (props: any) => {
  const { lunch, smoking } = props;
  return (
    <>
      <div className={ShopListItemStyle.badges}>
        <Badge>{lunch === "あり" ? "ランチあり" : null}</Badge>
        <Badge>{smoking}</Badge>
      </div>
    </>
  );
};
