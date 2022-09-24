import React from 'react';
import { ModalCancelButton } from '../atoms/ModalCancelButton'

type Props = {
    modalText: string
    isModalCancel: boolean
    setModalText: Function
}
export const MesageModal = (props: Props) => {
    const { modalText, isModalCancel = false, setModalText } = props;

    return (
        <>
            {
                modalText !== "" ? (
                    <>
                        <div className="searchLoding">{modalText}</div>
                        <ModalCancelButton isModalCancel={isModalCancel} setModalText={setModalText} />
                    </>
                ) : null
            }
        </>
    )

}