/**
 * 店舗検索部分
 */

import { SelectGenre } from './SelectGenre';
import { SearchButton } from '../atoms/SearchButton';

//メモ
//この辺りのpropsってグローバルにできそうだけどむずい
type Props = {
    setGenreSelectbox: Function,
    clickGetShopList: VoidFunction
}

export const ShopSearch = (props: Props) => {
    const { setGenreSelectbox, clickGetShopList } = props;
    return (
        <>
            <div className="shop_serch">
                <SelectGenre setGenreSelectbox={setGenreSelectbox}></SelectGenre>
                <SearchButton clickGetShopList={clickGetShopList}></SearchButton>
            </div>
        </>

    )

}
