import { TypeShopList } from "../type/globalTypes";
export const useShopList = () => {
  const getShopList: (
    requestUrl: string
  ) => Promise<string | TypeShopList[]> = async (requestUrl) => {
    try {
      console.log("fetch開始");
      const response: any = await fetch(requestUrl);
      const data: TypeShopList[] = await response.json();
      console.log("fetch終了");

      const responseShopList: TypeShopList[] = data;

      return responseShopList;
    } catch (error) {
      // handle error
      console.log(error);
      return `情報が取得できませんでした。エラー：${error}`;
    }
  };

  /**
   * ホットペッパーAPIに投げるURLを作成する関数
   * @param lat - 緯度
   * @param lng - 経度
   * @param genre - ジャンルコード
   * @returns - 引数をもとにした周辺の店情報URL
   */
  const generateRequestUrl: (
    lat: number | undefined,
    lng: number,
    genre: string
  ) => string = (lat, lng, genre) => {
    const getParameter = `?lat=${lat}&lng=${lng}&genre=${genre}`;
    //return `http://localhost:3001/api/shopList${getParameter}`;
    return `https://express-search-shop.onrender.com/api/shopList${getParameter}`;
  };
  return { getShopList, generateRequestUrl };
};
