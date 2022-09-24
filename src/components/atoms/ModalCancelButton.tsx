import React from 'react';

type Props = {
    isModalCancel: boolean
    setModalText: Function
}
export const ModalCancelButton = (props: Props) => {
    const { isModalCancel = false, setModalText } = props;

    return (
        <>
            {
                isModalCancel ? (
                    <div onClick={() => { setModalText("") }}>閉じる</div>
                ) : null
            }
        </>
    )

}