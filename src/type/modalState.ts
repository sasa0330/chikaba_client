/**
 * モーダルのタイプを指定します。
 * @type text - モーダルのテキスト
 * @type isLoading - モーダルにローディングアイコンを表示するか
 * @type isPossibleClose - ユーザーがモーダルを閉じられるようにするか
 */
export type TypeModalState = {
    text: string,
    isLoading: boolean,
    isPossibleClose: boolean
}

