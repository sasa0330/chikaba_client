import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MesageModal } from "./components/molecules/MesageModal";
import { Index } from "./components/pages/Index";
import { List } from "./components/pages/List";
import { Detail } from "./components/pages/Detail";
import {
  ShopListProvider,
  ModalProvider,
  SearchStateProvider,
} from "./providers/GlobalProviders";
import "destyle.css";

export const App = () => {
  return (
    <>
      <ShopListProvider>
        <ModalProvider>
          <SearchStateProvider>
            <div className="container is-pc">
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/list" element={<List />} />
                  <Route path="/detail/:itemId" element={<Detail />} />
                </Routes>
              </BrowserRouter>
              <MesageModal />
            </div>
            <div className="container is-sp">
              現在スマホ対応のみ🐧 <br />
              600px以下まで横幅を縮めてください。
            </div>
          </SearchStateProvider>
        </ModalProvider>
      </ShopListProvider>
    </>
  );
};
