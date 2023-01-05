/**
 * モーダル関連のステート・関数をグローバルに使うためのプロバイダー
 */
import { createContext, useState } from 'react'
import { TypeShopList } from '../type/globalTypes';

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
        shopList: TypeShopList[];
        setShopList: Function;
        currentItemId: string;
        setCurrentItemId: Function;
    }
);

/**
 * 店舗リスト用のProveider
 */
export const ShopListProvider = (props: Props) => {

    /**
     * 取得した店舗情報を保持するステート
     */
    const [shopList, setShopList] = useState<TypeShopList[]>([]);
    const [currentItemId, setCurrentItemId] = useState<string>("");


    return (
        <>
            <ShopListContext.Provider value={{ shopList, setShopList, currentItemId, setCurrentItemId }}>
                {props.children}
            </ShopListContext.Provider>
        </>
    );

}

