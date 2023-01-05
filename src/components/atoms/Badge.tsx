/*
* バッジコンポーネント
*/
import React from "react";

interface PropsType {
    //バッジをクリックした時のfuntion
    thisOnClick: VoidFunction;
    //バッジのテキスト
    thisValue: string;
    //基本のバッジスタイル以外のスタイル
    thisClassName: string;
}

export const Badge: React.FC<PropsType> = (props) => {
    const { thisOnClick, thisValue, thisClassName } = props;
    return (
        <>
            <div onClick={thisOnClick} className={`badge badge__genre ${thisClassName}`}>
                {thisValue}
            </div>
        </>
    )
}
