import { css } from "@emotion/css";
export const BadgeStyle = {
  badge: css`
    display: block;
    font-size: 13px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28vw;
    height: 18vw;
    border: solid 1px #000;
    margin-bottom: 5vw;
    cursor: pointer;
    box-shadow: 1px 1px 1px 1px rgb(0 0 0 / 50%);
    padding: 10px;
  `,
  badgeSelected: css`
    display: block;
    font-size: 13px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28vw;
    height: 18vw;
    border: solid 1px #000;
    margin-bottom: 5vw;
    cursor: pointer;
    box-shadow: 1px 1px 1px 1px rgb(0 0 0 / 50%);
    padding: 10px;
    background-color: #ddd;
  `,
};

export const CircleButtonStyle = {
  button: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: solid 1px #000;
    z-index: 2;
    position: fixed;
    position: fixed;
    bottom: 40px;
    right: 15px;
    border-radius: 30px;
    background: #fff;
    box-shadow: 1px 1px 1px 1px rgb(0 0 0 / 50%);
  `,
};
