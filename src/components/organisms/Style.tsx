import { css } from "@emotion/css";

export const IndexStyle = {
  content: css`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  title: css`
    color: #e38b29;
    text-align: center;
    font-weight: bold;
    margin-bottom: 30px;
    position: absolute;
    top: 20vh;
  `,
  titleMain: css`
    font-size: 13vw;
    margin-bottom: 4vh;
  `,
  titleSub: css`
    font-size: 4vw;
  `,
};

export const ListStyle = {
  content: css`
    width: 100%;
  `,
};

export const detailStyle = {
  img: css`
    width: 100%;
    object-fit: contain;
    aspect-ratio: 1;
    z-index: 1;
    position: absolute;
  `,
  shopName: css`
    position: absolute;
    bottom: 0;
    left: 0;
    color: #fff;
    font-weight: bold;
    font-size: 6.128205vw;
    width: 100%;
    padding: 3.8461538461538463vw 2.564102564102564vw;
    text-shadow: 2px 2px 2px #000;
    z-index: 1;
    position: absolute;
  `,
};
