type Props = {
    clickGetShopList: VoidFunction;
}

export const SearchButton = (props: Props) => {

    const { clickGetShopList } = props;
    return (
        <>
            <button onClick={clickGetShopList} className="buttonSearch">
                近い飲食店を探す
            </button>
        </>
    )
}
