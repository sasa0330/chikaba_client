import React from 'react';
import { SelectGenre } from '../atoms/SelectGenre';
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
            <SelectGenre setGenreSelectbox={setGenreSelectbox}></SelectGenre>
            <SearchButton clickGetShopList={clickGetShopList}></SearchButton>
        </>

    )

}
