import React from "react";

import { CoreLogo } from "components/Elements";

interface Props {
  text: string;
  children: React.ReactNode;
}

const EntryHelper: React.FC<Props> = ({ text, children }: Props): JSX.Element => {
  return (
    <section className="hidden md:grid place-content-center bg-entry-helper bg-cover bg-center 
      bg-no-repeat h-full w-5/12 text-center">
      <CoreLogo />
      <p className="text-white text-2xl font-semibold mt-2.5">{text}</p>
      <div className="mt-12">{children}</div>
    </section>
  );
};

export default EntryHelper;
