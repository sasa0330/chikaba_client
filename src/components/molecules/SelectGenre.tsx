/**
 * ジャンル選択バッジボタン
 */

import React, { useState } from "react";
import { Badge } from "../atoms/Badge";
import { TypeGenle } from "../../type/globalTypes";
import { SelectGenreStyle } from "./Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBeer,
  faDrumstickBite,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  setGenreSelectbox: Function;
};

export const SelectGenre = (props: Props) => {
  const { setGenreSelectbox } = props;
  const [currentIndex, setCurrentIndex] = useState<number>(100); //初期値を0にするとレンダリング時にジャンル選択状態のCSSが当たる
  const HOTPEPPR_GENRE_ARR: TypeGenle[] = [
    {
      code: "G001",
      icon: <FontAwesomeIcon icon={faBeer} />,
      genre: `居酒屋`,
    },
    //G012と統合する
    {
      code: "G002",
      icon: <FontAwesomeIcon icon={faDrumstickBite} />,
      genre: "バー・バル",
    },
    {
      code: "G003",
      icon: <FontAwesomeIcon icon={faUtensils} />,
      genre: "創作料理",
    },
    {
      code: "G004",
      icon: <FontAwesomeIcon icon={faUtensils} />,
      genre: "和食",
    },
    {
      code: "G005",
      genre: "洋食",
    },
    {
      code: "G006",
      genre: "イタリアン<br>フレンチ",
    },
    {
      code: "G007",
      genre: "中華",
    },
    {
      code: "G008",
      genre: "焼肉",
    },
    {
      code: "G009",
      genre: "アジア<br>エスニック",
    },
    {
      code: "G010",
      genre: "各国料理",
    },
    {
      code: "G011",
      genre: "カラオケ",
    },
    {
      code: "G012",
      genre: "カクテルバー",
    },
    {
      code: "G013",
      genre: "ラーメン",
    },
    {
      code: "G014",
      genre: "カフェ<br>スイーツ",
    },
    {
      code: "G016",
      genre: "お好み焼き<br>もんじゃ",
    },
    {
      code: "G017",
      genre: "韓国料理",
    },
    {
      code: "G015",
      genre: "その他グルメ",
    },
  ];
  //メモ
  //eventの型定義よくわからんので、以下の記事を参考に。
  //参考：https://zenn.dev/koduki/articles/0f8fcbc9a7485b

  const changeGenreSelect = (targetCode: string, index: number) => {
    for (let item of HOTPEPPR_GENRE_ARR) {
      if (targetCode === item.code) {
        console.log(`コード変わった：${item.code}${item.genre}`);
        setGenreSelectbox(item);
        setCurrentIndex(index);
      }
    }
  };
  return (
    <>
      <div className={SelectGenreStyle.selectGenre}>
        <div className={SelectGenreStyle.list}>
          {HOTPEPPR_GENRE_ARR.map((genreitem, index) => {
            let isSelected: boolean = currentIndex === index;

            return (
              <React.Fragment key={index}>
                <Badge
                  thisOnClick={() => changeGenreSelect(genreitem.code, index)}
                  thisValue={genreitem.genre}
                  thisSelected={isSelected}
                  thisIcon={genreitem.icon}
                ></Badge>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};
