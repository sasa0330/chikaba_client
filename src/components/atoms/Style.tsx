import { css } from "@emotion/css";
const badgeBase = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #e38b29;
  color: #fff;
  border-radius: 50%;
  height: 30vw;
  width: 30vw;
`;
export const BadgeStyle = {
  badge: badgeBase,
  badgeSearching: css(
    badgeBase,
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    `
  ),
  svg: css`
    width: 8vw;
    height: 8vw;
    margin-bottom: 10px;
    & svg {
      width: 100%;
      height: 100%;
    }
  `,
  text: css`
    font-size: 14px;
    font-weight: bold;
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
