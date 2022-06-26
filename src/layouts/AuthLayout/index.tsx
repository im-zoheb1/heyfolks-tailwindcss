import React from "react";

interface Props {
  isReverse?: boolean,
  children?: React.ReactNode;
}

function AuthLayout({ isReverse, children }: Props) {
  return <div className="h-screen">auth layout</div>;
}

export default AuthLayout;
