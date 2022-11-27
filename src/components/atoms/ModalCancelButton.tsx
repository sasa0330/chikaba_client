import { useContext } from 'react';
import { ModalContext } from '../../providers/ModalProvider';

export const ModalCancelButton = () => {
    const { modalState, changeModalState } = useContext(ModalContext);
    return (
        <>
            {
                modalState.isPossibleClose ? (
                    <div onClick={() => {
                        changeModalState("", "", false);
                    }}>閉じる</div>
                ) : null
            }
        </>
    )

}