import { createContext } from "react";
import { ReactNode, useState } from "react";

export type Ctxs = {
  firstSelect?: string | null;
  setFirstHandler?: (type: string) => void;
};
export const HostTypeContext = createContext<Ctxs | null>(null);

const HostTypeContextProvider = ({ children }: { children: ReactNode }) => {
  const [firstSelect, setFirstSelect] = useState<string | null>(null);
  const setFirstHandler = (type: string) => {
    setFirstSelect(type);
  };
  return (
    <HostTypeContext.Provider value={{ setFirstHandler, firstSelect }}>
      {children}
    </HostTypeContext.Provider>
  );
};
export default HostTypeContextProvider;
