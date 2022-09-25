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
            <div className="serch_area">
                <p className="mainTitle__catchphrase">近くの飲食店をサクッと探す</p>
                <a href="https://webservice.recruit.co.jp/"><img src="https://webservice.recruit.co.jp/banner/hotpepper-m.gif" alt="ホットペッパー Webサービス" style={{ width: "88", height: "35", border: "0" }} title="ホットペッパー Webサービス" /></a>
                <p className="mainTitle__catchphrase">※ブラウザの位置情報取得が許可されていないと使えません</p>
            </div>
            <SelectGenre setGenreSelectbox={setGenreSelectbox}></SelectGenre>
            <SearchButton clickGetShopList={clickGetShopList}></SearchButton>
        </>

    )

}
