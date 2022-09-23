import { SearchAgainButton } from '../atoms/SearchAgainButton'

type Props = {
    isDispShopList: boolean
}

export const Footer = (props: Props) => {
    const { isDispShopList } = props;
    return (
        <>
            <footer><SearchAgainButton isDispShopList={isDispShopList} /></footer>
        </>
    )

}
