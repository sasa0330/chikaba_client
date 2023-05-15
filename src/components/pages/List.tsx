import { MainList } from "../organisms/MainList";
import { MesageModal } from "../molecules/MesageModal";

export const List = () => {
  return (
    <>
      <div className="container--sp container--scroll">
        <MainList />
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
