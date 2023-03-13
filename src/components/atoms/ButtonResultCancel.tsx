/*
 * バッジコンポーネント
 */
import React from "react";
import { CircleButtonStyle } from "./Style";

export const ButtonResultCancel: React.FC<{
  children: any;
  onClick: any;
}> = (props) => {
  const { children, onClick } = props;

  return (
    <>
      <button onClick={onClick} className={CircleButtonStyle.button}>
        {children}
      </button>
    </>
  );
};
