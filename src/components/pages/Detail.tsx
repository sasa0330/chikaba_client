import { MainDetail } from "../organisms/MainDetail";
import { MesageModal } from "../molecules/MesageModal";

export const Detail = () => {
  return (
    <>
      <div className="container--sp container--notScroll">
        <MainDetail />
        <MesageModal />
      </div>
      <div className="container--pc">
        スマホ幅のみ対応しています🐧
        <br />
        PCで見る時はブラウザ幅を縮めてください。
      </div>
    </>
  );
};
