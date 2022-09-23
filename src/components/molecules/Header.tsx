import React from 'react';

export const Header = () => {
    return (
        <>
            <div className="mainTitle" id="shopSearch">
                <h2 className="mainTitle__title">近くの飲食店をサクッと探せるアプリ</h2>
                <p className="mainTitle__catchphrase">近くの飲食店をサクッと探す</p>
                <a href="https://webservice.recruit.co.jp/"><img src="https://webservice.recruit.co.jp/banner/hotpepper-m.gif" alt="ホットペッパー Webサービス" style={{ width: "88", height: "35", border: "0" }} title="ホットペッパー Webサービス" /></a>
                <p className="mainTitle__catchphrase">※ブラウザの位置情報取得が許可されていないと使えません</p>
            </div>
        </>
    )
}
