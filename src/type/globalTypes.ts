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
    // 店舗ID
    itemId: string,
    // メイン画像
    photoPcM: string,
    // 店名 
    shopName: string,
    //ランチがあるか
    lunch: string,
    //検索用ディナー予算
    budgetName: string,
    //住所
    address: string,
    //キャッチコピー
    catch?: string,
    //総席数（例：300）
    capacity?: number
    //飲み放題（例：あり）
    freeDrink?: string
}


export type TypeGenle = {
    code: string;
    genre: string;
}

//イベントの型
export type EventTypes = {
    onClick: (event: React.MouseEvent<HTMLInputElement>) => void
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onkeypress: (event: React.KeyboardEvent<HTMLInputElement>) => void
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
    onFocus: (event: React.FocusEvent<HTMLInputElement>) => void
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    onClickDiv: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}