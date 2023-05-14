import { MainIndex } from "../organisms/MainIndex";
import { MesageModal } from "../molecules/MesageModal";

export const Index = () => {
  return (
    <>
      <div className="container--sp container--notScroll">
        <MainIndex />
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
