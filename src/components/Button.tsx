import React from "react";

export interface ButtonProps {
  text: string;
  buttonType: string;
  dataToggle?: string;
  onBuildMaze?: () => void;
  onDFSTraversal?: () => void;
  onBFSTraversal?: () => void;
  onGSTraversal?: () => void;
  onClear?: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      type="button"
      className={props.buttonType}
      data-toggle={props.dataToggle}
      onClick={
        props.onBuildMaze ||
        props.onDFSTraversal ||
        props.onBFSTraversal ||
        props.onGSTraversal ||
        props.onClear
      }
    >
      {props.text}
    </button>
  );
};

export default Button;
