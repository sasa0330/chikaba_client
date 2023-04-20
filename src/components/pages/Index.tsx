import { MainIndex } from "../organisms/MainIndex";
import { MesageModal } from "../molecules/MesageModal";

export const Index = () => {
  return (
    <>
      <div className="container--pc container--notScroll">
        <MainIndex />
        <MesageModal />
      </div>
      <div className="container--sp">スマホ幅のみ対応しています🐧</div>
    </>
  );
};
