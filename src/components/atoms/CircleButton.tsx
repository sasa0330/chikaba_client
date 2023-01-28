/*
* バッジコンポーネント
*/
import React from "react";


export const CircleButton: React.FC<{ children: any, className: string, onClick: any }> = (props) => {
    const { children, className, onClick } = props;

    return (
        <>
            <button onClick={onClick} className={className}>
                {children}
            </button>
        </>
    )
}