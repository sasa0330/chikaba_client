/**
 * ジャンル選択バッジボタン
 */

import React, { useState } from 'react';
import { Badge } from '../atoms/Badge'

type Props = {
    setGenreSelectbox: Function;
}


type TypeGenle = {
    code: string;
    genre: string;
}

export const SelectGenre = (props: Props) => {
    const { setGenreSelectbox } = props;
    const [currentIndex, setCurrentIndex] = useState<number>(100);//初期値を0にするとレンダリング時にジャンル選択状態のCSSが当たる
    const HOTPEPPR_GENRE_ARR: TypeGenle[] = [
        {
            "code": "G001",
            "genre": "居酒屋"
        },
        {
            "code": "G002",
            "genre": "ダイニングバー・バル"
        },
        {
            "code": "G003",
            "genre": "創作料理"
        },
        {
            "code": "G004",
            "genre": "和食"
        },
        {
            "code": "G005",
            "genre": "洋食"
        },
        {
            "code": "G006",
            "genre": "イタリアン・フレンチ"
        },
        {
            "code": "G007",
            "genre": "中華"
        },
        {
            "code": "G008",
            "genre": "焼肉・ホルモン"
        },
        {
            "code": "G009",
            "genre": "アジア・エスニック料理"
        },
        {
            "code": "G010",
            "genre": "各国料理"
        },
        {
            "code": "G011",
            "genre": "カラオケ・パーティ"
        },
        {
            "code": "G012",
            "genre": "バー・カクテル"
        },
        {
            "code": "G013",
            "genre": "ラーメン"
        },
        {
            "code": "G014",
            "genre": "カフェ・スイーツ"
        },
        {
            "code": "G015",
            "genre": "その他グルメ"
        },
        {
            "code": "G016",
            "genre": "お好み焼き・もんじゃ"
        },
        {
            "code": "G017",
            "genre": "韓国料理"
        }
    ]
    //メモ
    //eventの型定義よくわからんので、以下の記事を参考に。
    //参考：https://zenn.dev/koduki/articles/0f8fcbc9a7485b

    const changeGenreSelect = (targetCode: string, index: number) => {
        for (let item of HOTPEPPR_GENRE_ARR) {
            if (targetCode === item.code) {
                console.log(`コード変わった：${item.code}${item.genre}`)
                setGenreSelectbox(item);
                setCurrentIndex(index);
            }
        }
    }
    return (
        <>
            <div className="selectGenre">
                <div className="selectGenre__list">
                    {
                        HOTPEPPR_GENRE_ARR.map((genreitem, index) => {
                            let badgeClassName: string = "";
                            if (currentIndex === index) {
                                badgeClassName += " badge__genre--selected";
                            }
                            return (
                                <React.Fragment key={index}>
                                    <Badge thisOnClick={() => changeGenreSelect(genreitem.code, index)} thisValue={genreitem.genre} thisClassName={badgeClassName}></Badge>
                                </React.Fragment>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
