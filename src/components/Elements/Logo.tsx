import React from "react";

interface Props {
  isSmall?: boolean
}

const Logo: React.FC<Props> = (props): JSX.Element => {
  const size: string = props.isSmall ? 'text-4xl' : 'text-5xl';

  return (
    <span className={`uppercase text-white font-logo ${size}`}>
      <span className="text-accent">hey</span>folks
    </span>
  );
};

export default Logo;
