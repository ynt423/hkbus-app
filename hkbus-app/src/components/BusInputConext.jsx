import React, { useState } from "react";

const BusInputContext = React.createContext({
  BusInput: "",
  setBusInput: () => {},
});

export const BusInputContextProvider = (props) => {
  const [BusInput, setBusInput] = useState("");

  return (
    <BusInputContext.Provider
      // 記得提供 context 給 Provider
      value={{
        BusInput: BusInput,
        setBusInput: setBusInput,
      }}
    >
      {props.children}
    </BusInputContext.Provider>
  );
};

export default BusInputContext;
