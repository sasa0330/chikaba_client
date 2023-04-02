import { useContext } from "react";
import { ModalContext } from "../../providers/GlobalProviders";

export const ButtonModalClose = () => {
  const { modalState, changeModalState } = useContext(ModalContext);
  return (
    <>
      {modalState.isPossibleClose ? (
        <div
          onClick={() => {
            changeModalState("", "", false);
          }}
        >
          閉じる
        </div>
      ) : null}
    </>
  );
};
