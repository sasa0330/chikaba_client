/**
 * ジャンル選択バッジボタン
 */

import React, { useContext } from "react";
import { Badge } from "../atoms/Badge";
import { TypeGenle } from "../../type/globalTypes";
import { Loading } from "../atoms/Loading";
import { SelectGenreStyle } from "./Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchStateContext } from "../../providers/GlobalProviders";
import {
  faBeer,
  faMartiniGlass,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
type Props = {
  onClickHandler: (e: any) => Promise<void>;
};
export const SelectGenre = (props: Props) => {
  const { onClickHandler } = props;
  const { isSearching } = useContext(SearchStateContext);
  const hotpepperGenreArr: TypeGenle[] = [
    {
      code: "G001",
      icon: <FontAwesomeIcon icon={faBeer} />,
      genre: `居酒屋`,
    },
    //G012と統合する
    /*
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
    */
    {
      code: "G012",
      icon: <FontAwesomeIcon icon={faMartiniGlass} />,
      genre: "カクテルバー",
    },
    /*
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
    },*/
  ];

  return (
    <>
      <div className={SelectGenreStyle.selectGenre}>
        <div
          className={
            isSearching ? SelectGenreStyle.listSearching : SelectGenreStyle.list
          }
        >
          {isSearching ? (
            <div className="wrapLoading">
              <Badge
                isSearching={isSearching}
                value={"検索中"}
                icon={<FontAwesomeIcon icon={faSearch} />}
                onClickHandler={onClickHandler}
              ></Badge>
              <Loading></Loading>
            </div>
          ) : (
            hotpepperGenreArr.map((item, index) => (
              <React.Fragment key={index}>
                <Badge
                  isSearching={isSearching}
                  onClickHandler={onClickHandler}
                  value={item.genre}
                  icon={item.icon}
                  genreCode={item.code}
                ></Badge>
              </React.Fragment>
            ))
          )}
        </div>
      </div>
    </>
  );
};
