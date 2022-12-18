/**
 * 店舗検索部分
 */

import { SelectGenre } from './SelectGenre';

//メモ
//この辺りのpropsってグローバルにできそうだけどむずい
type Props = {
    setGenreSelectbox: Function;
}

export const ShopSearch = (props: Props) => {
    const { setGenreSelectbox } = props;
    return (
        <>
            <div className="shop_serch">
                <SelectGenre setGenreSelectbox={setGenreSelectbox}></SelectGenre>
            </div>
        </>

    )

}
