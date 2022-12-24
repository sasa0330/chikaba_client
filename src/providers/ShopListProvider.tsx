/**
 * モーダル関連のステート・関数をグローバルに使うためのプロバイダー
 */
import { createContext, useState } from 'react'
import { TypeShopList } from '../type/shopList';

type Props = {
    children: any
}

/**
 * モーダル用のContext
 * ここでstateとsetStateを定義してあげる。
 * 定義するときはcreateContext()を使う。
 * createContext()のデフォルトの型が{}なので、stateとsetStateの型を明示的に決めてあげないとエラーになる。
 */
export const ShopListContext = createContext(
    {} as
    {
        shopList: TypeShopList;
        setshopList: Function;
    }
);

/**
 * モーダル用のProveider
 */
export const ShopListProvider = (props: Props) => {

    /**
     * 取得した店舗情報を保持するステート
     */
    const [shopList, setshopList] = useState<TypeShopList>({
        "itemId": "",
        "photoPcM": "",
        "shopName": "",
        "lunch": "",
        "budgetName": "",
        "address": "",
    });


    return (
        <>
            <ShopListContext.Provider value={{ shopList, setshopList }}>
                {props.children}
            </ShopListContext.Provider>
        </>
    );

}

