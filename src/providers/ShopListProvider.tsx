/**
 * モーダル関連のステート・関数をグローバルに使うためのプロバイダー
 */
import { createContext, useState } from 'react'
import { TypeShopList } from '../type/globalTypes';

type Props = {
    children: any
}

/**
 * 取得する店情報の一覧
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

