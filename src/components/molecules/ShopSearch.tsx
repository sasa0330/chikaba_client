/**
 * 店舗検索部分
 */
import React from 'react';
import { SelectGenre } from './SelectGenre';

//メモ
//この辺りのpropsってグローバルにできそうだけどむずい
interface PropsType {
    setGenreSelectbox: Function;
}

export const ShopSearch: React.FC<PropsType> = (props) => {
    const { setGenreSelectbox } = props;
    return (
        <>
            <div className="shop_serch">
                <SelectGenre setGenreSelectbox={setGenreSelectbox}></SelectGenre>
            </div>
        </>

    )

}
