/**
 * モーダル関連のステート・関数をグローバルに使うためのプロバイダー
 */
import { createContext, useState } from "react";
import { TypeShopList, TypeModalState } from "../type/globalTypes";
import { UseStateGenreSelectbox } from "../type/globalTypes";

type Props = {
  children: any;
};

/**
 * 取得する店情報の一覧
 */
export const ShopListContext = createContext(
  {} as {
    currentItemId: string;
    setCurrentItemId: Function;
  }
);

/**
 * 店舗リスト用のProveider
 */
export const ShopListProvider = (props: Props) => {
  const [currentItemId, setCurrentItemId] = useState<string>("");

  return (
    <>
      <ShopListContext.Provider value={{ currentItemId, setCurrentItemId }}>
        {props.children}
      </ShopListContext.Provider>
    </>
  );
};

/**
 * モーダル
 * createContext()のデフォルトの型が{}なので、stateとsetStateの型を明示的に決めてあげないとエラーになる。
 */
export const ModalContext = createContext(
  {} as {
    modalState: TypeModalState;
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
  const [modalState, setModalState] = useState<TypeModalState>({
    message: "",
    isLoading: false,
    isPossibleClose: false,
  });

  /**
   * モーダルの状態を変更する関数。
   * setModalStateするときはこの関数を使うと便利。
   * @param message - モーダルにセットするテキスト
   * @param isLoading - モーダルにローディングアイコンを表示するか
   * @param isPossibleClose - ユーザーがモーダルを閉じられるようにするか
   */

  const changeModalState = (
    message: string,
    isLoading: boolean,
    isPossibleClose: boolean
  ) => {
    const newModal: TypeModalState = {
      message: message,
      isLoading: isLoading,
      isPossibleClose: isPossibleClose,
    };
    setModalState(newModal);
  };

  return (
    <>
      <ModalContext.Provider
        value={{ modalState, setModalState, changeModalState }}
      >
        {props.children}
      </ModalContext.Provider>
    </>
  );
};

/**
 * 検索時の条件
 */
export const SearchStateContext = createContext(
  {} as {
    isSearching: boolean;
    setIsSearching: Function;
    selectedGenre: UseStateGenreSelectbox;
    setSelectedGenre: Function;
  }
);

/**
 * 検索時の条件を保持するProveider
 */
export const SearchStateProvider = (props: Props) => {
  /**
   * 取得した店舗情報を保持するステート
   */
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [selectedGenre, setSelectedGenre] = useState<UseStateGenreSelectbox>({
    code: "",
    genre: "",
  });
  return (
    <>
      <SearchStateContext.Provider
        value={{
          isSearching,
          setIsSearching,
          selectedGenre,
          setSelectedGenre,
        }}
      >
        {props.children}
      </SearchStateContext.Provider>
    </>
  );
};
