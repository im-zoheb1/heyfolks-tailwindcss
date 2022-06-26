import React from "react";

interface Props {
  compact?: boolean;
  pilled?: boolean;
  type?: "submit" | "reset";
  variant?: "primary" | "light";
  children: React.ReactNode;
  className?: string;
  transformOnHover?: boolean;
}

const Button: React.FC<Props> = (props: Props): JSX.Element => {
  const variant: string = {
    primary: "bg-gradient-to-br from-primary to-secondary text-white",
    light: "bg-white hover:bg-blue-50 text-primary",
  }[props.variant ?? "primary"];

  const spacing: string = {
    compact: "",
    normal: "py-3.5 px-9 text-xl",
  }[props.compact ? "compact" : "normal"];

  const border: string = {
    pilled: "rounded-full",
    rounded: "rounded",
  }[props.pilled ? "pilled" : "rounded"];

  const transform: string = props.transformOnHover ? "hover:translate-y-[-4px] active:translate-y-[4px]" : "";

  const defaultStyles = "font-bold transition duration-300 ease-in-out";

  const style: string = `${variant} ${spacing} ${border} ${defaultStyles} ${props.className} ${transform}`;

  return <button className={style} type={props.type}>{props.children}</button>;
};

export default Button;
