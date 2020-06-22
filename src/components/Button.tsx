import React from "react";

export interface ButtonProps {
  text: string;
}

export interface ButtonState {}

class Button extends React.Component<ButtonProps, ButtonState> {
  state = {};
  render() {
    return (
      <button type="button" className="btn btn-link" onClick={() => {}}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;
