import React from 'react';

type Props = {
    messageModalText: string
}
export const MesageModal = (props: Props) => {
    const { messageModalText } = props;

    return (
        <>
            {
                messageModalText !== "" ? (
                    <div className="searchLoding">{messageModalText}</div>
                ) : null
            }
        </>
    )

}