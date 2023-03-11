import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MesageModal } from "./components/molecules/MesageModal";
import { List } from "./components/pages/List";
import { Detail } from "./components/pages/Detail";
import { ModalProvider } from "./providers/ModalProvider";
import { ShopListProvider } from "./providers/ShopListProvider";

export const App = () => {
  return (
    <>
      <ShopListProvider>
        <ModalProvider>
          <div className="container is-pc">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<List />} />
                <Route path="/detail/:itemId" element={<Detail />} />
              </Routes>
            </BrowserRouter>
            <MesageModal />
          </div>
          <div className="container is-sp">
            現在スマホ対応のみ🐧 <br />
            600px以下まで横幅を縮めてください。
          </div>
        </ModalProvider>
      </ShopListProvider>
    </>
  );
};
