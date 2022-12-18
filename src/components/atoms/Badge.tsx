/*
* バッジコンポーネント
*/
type Props = {
    //バッジをクリックした時のfuntion
    thisOnClick: VoidFunction;
    //バッジのテキスト
    thisValue: string;
    //基本のバッジスタイル以外のスタイル
    thisClassName: string;
}

export const Badge = (props: Props) => {
    const { thisOnClick, thisValue, thisClassName } = props;
    return (
        <>
            <div onClick={thisOnClick} className={`badge badge__genre ${thisClassName}`}>
                {thisValue}
            </div>
        </>
    )
}
