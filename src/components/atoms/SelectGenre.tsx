import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

type Props = {
    setGenreSelectbox: Function;
}

export const SelectGenre = (props: Props) => {
    const { setGenreSelectbox } = props;
    const HOTPEPPR_GENRE_ARR = [
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
    const changeGenreSelect = (event: { target: HTMLSelectElement }) => {
        const genreCode = event.target.value;
        for (let item of HOTPEPPR_GENRE_ARR) {
            if (genreCode === item.code) {
                setGenreSelectbox(item);
            }
        }
    }
    return (
        <>
            <div>
                <div className="selectGenre">
                    <select onChange={changeGenreSelect} className="selectGenre__select">
                        {
                            HOTPEPPR_GENRE_ARR.map((genreitem, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <option value={genreitem.code}>{genreitem.genre}</option>
                                    </React.Fragment>
                                )
                            })
                        }

                    </select>
                    <ArrowDropDownIcon className="selectGenre__triangle" />
                </div>
            </div>
        </>

    )

}
