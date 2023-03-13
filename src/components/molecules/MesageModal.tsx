/**
 * モーダル
 */

import { useContext } from "react";
import { ButtonModalClose } from "../atoms/ButtonModalClose";
import { ModalContext } from "../../providers/ModalProvider";
import { MessageModalStyle } from "./Style";

export const MesageModal = () => {
  const { modalState } = useContext(ModalContext);
  const isModalMassageBrank = modalState.message === "";
  return (
    <>
      {!isModalMassageBrank ? (
        <>
          <div className={MessageModalStyle.modal}>
            <div>
              <div className={MessageModalStyle.loadingIcon}>
                <div className={MessageModalStyle.loader}></div>
              </div>
              <div className={MessageModalStyle.loadingText}>
                {modalState.message}
              </div>
            </div>

            <ButtonModalClose />
          </div>
        </>
      ) : null}
    </>
  );
};
