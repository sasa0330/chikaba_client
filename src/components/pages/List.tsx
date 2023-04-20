import { MainList } from "../organisms/MainList";
import { MesageModal } from "../molecules/MesageModal";

export const List = () => {
  return (
    <>
      <div className="container--pc container--scroll">
        <MainList />
        <MesageModal />
      </div>
      <div className="container--sp">スマホ幅のみ対応しています🐧</div>
    </>
  );
};
