import React from "react";

const DefaultHeader = (props) => {
  const { name } = props;

  return (
    <header className="px-5 w-full py-4 flex flex-row-reverse ">
      <h3 className="font-bold">
        Hola, <span className="underline uppercase">{name}</span>
      </h3>
    </header>
  );
};

export default DefaultHeader;
