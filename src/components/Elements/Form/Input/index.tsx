import React from "react";
import style from "./Input.module.scss";

interface Props {
  type?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
}

const Input: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className={style.input_holder}>
      <input className={style.input_field} placeholder={props.placeholder} required={props.required} type={props.type}></input>
      <div className={style.input_border}></div>
      <div className={style.input_label}>{props.label}</div>
    </div>
  );
};

export default Input;
