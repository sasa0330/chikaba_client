import { currentPosition } from "../type/globalTypes";
import { TypeShopList } from "../type/globalTypes";
/**
 * 現在地を取得する処理
 */
export const useLocalStrage = () => {
  /**
   *
   * @param key キー
   * @param value 配列（連想配列）
   */
  const setLocalStrageArray: (key: string, value: object) => void = (
    key,
    value
  ) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  /**
   *
   * @param key
   * @returns 配列
   */
  const getLocalStrageArray: (key: string) => [] = (key) => {
    const data: string | null = localStorage.getItem(key);
    const dataCastArray: [] = data ? JSON.parse(data) : [];
    return dataCastArray;
  };
  const removeLocalStrage: (key: string) => void = (key) => {
    localStorage.removeItem(key);
  };
  return { setLocalStrageArray, getLocalStrageArray, removeLocalStrage };
};
