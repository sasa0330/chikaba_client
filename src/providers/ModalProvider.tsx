/**
 * モーダル関連のステート・関数をグローバルに使うためのプロバイダー
 */
import { createContext, useState } from 'react'
import { modalStateType } from "../type/modalState"

type Props = {
    children: any
}

/**
 * モーダル用のContext
 * ここでstateとsetStateを定義してあげる。
 * 定義するときはcreateContext()を使う。
 * createContext()のデフォルトの型が{}なので、stateとsetStateの型を明示的に決めてあげないとエラーになる。
 */
export const ModalContext = createContext(
    {} as
    {
        modalState: modalStateType;
        setModalState: Function;
        changeModalState: Function;
    }
);

/**
 * モーダル用のProveider
 */
export const ModalProvider = (props: Props) => {

    /**
     * モーダルの状態を管理するステート
     */
    const [modalState, setModalState] = useState<modalStateType>({
        "text": "",
        "isLoading": false,
        "isPossibleClose": false
    });

    /**
     * モーダルの状態を変更する関数。
     * setModalStateするときはこの関数を使うと便利。
     * @param text - モーダルにセットするテキスト
     * @param isLoading - モーダルにローディングアイコンを表示するか
     * @param isPossibleClose - ユーザーがモーダルを閉じられるようにするか
     */
    const changeModalState = (text: string, isLoading: boolean, isPossibleClose: boolean) => {
        const newModal = {
            "text": text,
            "isLoading": isLoading,
            "isPossibleClose": isPossibleClose
        }
        setModalState(newModal);
    }

    return (
        <>
            <ModalContext.Provider value={{ modalState, setModalState, changeModalState }}>
                {props.children}
            </ModalContext.Provider>
        </>
    );

}

