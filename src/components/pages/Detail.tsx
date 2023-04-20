import { MainDetail } from "../organisms/MainDetail";
import { MesageModal } from "../molecules/MesageModal";

export const Detail = () => {
  return (
    <>
      <div className="container--pc container--notScroll">
        <MainDetail />
        <MesageModal />
      </div>
      <div className="container--sp">スマホ幅のみ対応しています🐧</div>
    </>
  );
};
