import { css } from "@emotion/css";

export const SelectGenreStyle = {
  selectGenre: css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `,
  list: css`
    width: 70vw;
    display: flex;
    justify-content: space-between;
  `,
  listSearching: css`
    width: 70vw;
    display: flex;
    justify-content: center;
  `,
};

export const MessageModalStyle = {
  modal: css`
    position: fixed;
    inset: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    padding: 10px;
    border-radius: 30px;
    background-color: orangered;
    color: #fff;
    z-index: 1;
  `,
  loadingIcon: css`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
  `,
  loader: css`
    color: #ffffff;
    font-size: 50px;
    text-indent: -9999em;
    overflow: hidden;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;
    animation: load6 1.7s infinite ease, round 1.7s infinite ease;
  `,
  loadingText: css`
    text-align: center;
    font-size: 20px;
  `,
};
export const ShopListSearchResultStyle = {
  shopList: css``,
};
export const ShopListItemStyle = {
  item: css`
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 2.564102564102564vw;
    background: #fff;
  `,
  link: css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  wrapImg: css`
    width: 25vw;
    height: 25vw;
  `,
  img: css`
    width: 100%;
    object-fit: contain;
    aspect-ratio: 1;
  `,
  text: css`
    width: 65%;
  `,
  badges: css`
    display: flex;
    margin-bottom: 10px;
  `,
  badge: css`
    font-size: 12px;
    padding: 2px 5px;
    border: solid 1px #000;
    border-radius: 5px;
    margin-right: 5px;
  `,
  title: css`
    font-size: 14px;
    margin-bottom: 10px;
    font-weight: bold;
  `,
  dicription: css`
    font-size: 12px;
  `,
  access: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 10px;
  `,
};
