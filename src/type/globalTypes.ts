/**
 * モーダルの状態を指定する型。
 * @type text - モーダルのテキスト
 * @type isLoading - モーダルにローディングアイコンを表示するか
 * @type isPossibleClose - ユーザーがモーダルを閉じられるようにするか
 */
export type TypeModalState = {
  message: string;
  isLoading: boolean;
  isPossibleClose: boolean;
};

/**
 * 店舗リストの型
 */
export type TypeShopList = {
  // 店舗ID
  itemId: string;
  // メイン画像
  photo: string;
  // 店名
  shopName: string;
  //ランチがあるか
  lunch: string;
  //検索用ディナー予算
  budgetName: string;
  //住所
  address: string;
  //アクセス情報
  access: string;
  //喫煙情報
  smoking: string;
  //キャッチコピー
  catch: string;
  //総席数（例：300）
  capacity?: number;
  //飲み放題（例：あり）
  freeDrink?: string;
};

export type TypeGenle = {
  code:
    | "G001"
    | "G002"
    | "G003"
    | "G004"
    | "G005"
    | "G006"
    | "G007"
    | "G008"
    | "G009"
    | "G010"
    | "G011"
    | "G012"
    | "G013"
    | "G014"
    | "G015"
    | "G016"
    | "G017";
  icon?: JSX.Element | undefined;
  genre: string;
};
export type UseStateGenreSelectbox =
  | TypeGenle
  | {
      code: "";
      genre: "";
    };

export type currentPosition = {
  lat: number;
  lng: number;
};
