import React from "react";

export interface ButtonProps {
  type: "submit";
  text: string;
  disabled: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>
}