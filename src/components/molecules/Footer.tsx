import { SearchAgainButton } from '../atoms/SearchAgainButton'

type Props = {
    shopListCount: number
}

export const Footer = (props: Props) => {
    const { shopListCount } = props;
    return (
        <>
            <footer><SearchAgainButton shopListCount={shopListCount} /></footer>
        </>
    )

}
