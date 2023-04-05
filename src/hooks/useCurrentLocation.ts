import { currentPosition } from "../type/globalTypes";
/**
 * 現在地を取得する処理
 */
export const useCurrentLocation = () => {
  const getCurrentPosition: () => Promise<
    currentPosition | string
  > = async () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        // Geolocation APIに対応していない場合
        reject("この端末は現在地取得に対応していません");
      }
      //現在地取得API
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // handle success
          const currentPosition: currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          resolve(currentPosition);
        },
        (geolocationError) => {
          // handle error
          const geolocationErrorCode: string = String(geolocationError.code);
          let errorMssage: string = "";
          switch (geolocationErrorCode) {
            // 位置情報が取得できない場合
            case "1":
              errorMssage = "位置情報の取得ができませんでした。";
              break;
            // Geolocationの使用が許可されない場合
            case "2":
              errorMssage = "位置情報取得の使用許可がされませんでした。";
              break;
            // タイムアウトした場合
            case "3":
              errorMssage = "位置情報取得中にタイムアウトしました。";
              break;
            //基本はない
            default:
          }
          reject(errorMssage);
        },
        {
          //enableHighAccuracy: true, // より高精度な位置
        }
      );
    });
  };

  return { getCurrentPosition };
};
