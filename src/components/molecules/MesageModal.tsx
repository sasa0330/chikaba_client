/**
 * モーダル
 */

import { useContext } from "react";
import { ModalCancelButton } from "../atoms/ModalCancelButton";
import { ModalContext } from "../../providers/ModalProvider";

export const MesageModal = () => {
  const { modalState } = useContext(ModalContext);
  return (
    <>
      {modalState.message !== "" ? (
        <>
          <div className="modal">
            <div className="modal__search">
              <div className="modal__loadingIcon">
                <div className="loader"></div>
              </div>
              <div className="modal__loadingText">{modalState.message}</div>
            </div>

            <ModalCancelButton />
          </div>
        </>
      ) : null}
    </>
  );
};
