
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import { Header } from './components/molecules/Header';
import { Footer } from './components/molecules/Footer'
import { MesageModal } from './components/molecules/MesageModal';
import { List } from './components/pages/List';
import { Detail } from './components/pages/Detail';


export const App = () => {
  const [isModalCancel, setIsModalCancel] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>("");



  return (
    <>
      <Header />
      <main>
        {

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<List setIsModalCancel={setIsModalCancel} setModalText={setModalText} />} />
              <Route path="/detail" element={<Detail />} />
            </Routes>
          </BrowserRouter>

        }
      </main>
      <Footer />
      <MesageModal modalText={modalText} isModalCancel={isModalCancel} setModalText={setModalText} />
    </>
  );
}