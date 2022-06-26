import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const EntryForm: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <section className="w-full md:w-7/12 bg-blue-50 px-6 py-14 lg:px-20 lg:py-16 flex items-center 
      text-grey overflow-y-auto h-full flex flex-col scroll-p-0 scroll-smooth">
      <div className="w-full my-auto">
        <h1 className="font-bold text-5xl mb-16">{props.title}</h1>
        {props.children}
      </div>
    </section>
  );
};

export default EntryForm;
