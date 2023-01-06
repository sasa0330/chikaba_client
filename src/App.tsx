import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from './components/molecules/Header';
import { Footer } from './components/molecules/Footer'
import { MesageModal } from './components/molecules/MesageModal';
import { List } from './components/pages/List';
import { Detail } from './components/pages/Detail';
import { ModalProvider } from './providers/ModalProvider';
import { ShopListProvider } from './providers/ShopListProvider';

export const App = () => {
  return (
    <>
      <ShopListProvider>
        <ModalProvider>
          <div className="container">
            <Header />
            <main>
              {
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<List />} />
                    <Route path="/detail/:itemId" element={<Detail />} />
                  </Routes>
                </BrowserRouter>
              }
            </main>
            <Footer />
            <MesageModal />
          </div>
        </ModalProvider>
      </ShopListProvider>

    </>
  );
}