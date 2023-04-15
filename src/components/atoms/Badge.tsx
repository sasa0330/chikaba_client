import { css } from "@emotion/css";
const style = css`
  font-size: 12px;
  padding: 2px 5px;
  border: solid 1px #000;
  border-radius: 5px;
  margin-right: 5px;
`;

export const Badge = (props: any) => {
  const { children } = props;
  return <>{children ? <div className={style}>{children}</div> : null}</>;
};
