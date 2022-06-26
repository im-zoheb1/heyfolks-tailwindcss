import React from "react";

interface Props {
  children: React.ReactNode;
  onSubmit?(e: React.FormEvent): void;
}

const Form: React.FC<Props> = (props): JSX.Element => {
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    props.onSubmit && props.onSubmit(e);
  };

  return <form onSubmit={handleSubmit}>{props.children}</form>;
};

export default Form;
