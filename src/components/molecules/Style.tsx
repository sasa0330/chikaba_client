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
  shopList: css`
    margin-top: 30px;
  `,
};
export const ShopListItemStyle = {
  item: css`
    padding: 10px;
    border-radius: 10px;
    margin: 0 10px 10px 10px;
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
  title: css`
    font-size: 14px;
    margin-bottom: 10px;
    font-weight: bold;
  `,
  dicription: css`
    font-size: 12px;
  `,
};
