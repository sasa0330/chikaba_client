import { BrowserRouter, Route, Routes } from "react-router-dom";
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
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/list" element={<List />} />
                {/* TODO :itemIdはShopListItem.tsxでやっているので不要かも */}
                <Route path="/detail/:itemId" element={<Detail />} />
              </Routes>
            </BrowserRouter>
          </SearchStateProvider>
        </ModalProvider>
      </ShopListProvider>
    </>
  );
};
