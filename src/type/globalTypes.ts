/**
 * モーダルの状態を指定する型。
 * @type text - モーダルのテキスト
 * @type isLoading - モーダルにローディングアイコンを表示するか
 * @type isPossibleClose - ユーザーがモーダルを閉じられるようにするか
 */
export type TypeModalState = {
    message: string,
    isLoading: boolean,
    isPossibleClose: boolean
}

/**
 * 店舗リストの型
 */
export type TypeShopList = {
    itemId: string,
    photoPcM: string,
    shopName: string,
    lunch: string,
    budgetName: string,
    address: string,
}

