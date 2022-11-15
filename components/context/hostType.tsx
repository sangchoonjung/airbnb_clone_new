import { createContext } from "react";
import { ReactNode, useState } from "react";

export type Ctxs = {
  firstSelect?: string | null;
  setFirstHandler?: (type: string) => void;
  setInputVal: (s: string) => void;
  inputVal: string | null;
  setPredictions: () => void;
  predictions: [];
  setAddressDetail: () => void;
  addressDetail: [];
  setAddressLocation: () => void;
  addressLocation: {};
  setMode: (s: string) => void;
  mode: string;
};
export const HostTypeContext = createContext<Ctxs | null>(null);

const HostTypeContextProvider = ({ children }: { children: ReactNode }) => {
  const [firstSelect, setFirstSelect] = useState<string | null>(null);
  const setFirstHandler = (type: string) => {
    setFirstSelect(type);
  };

  const [inputVal, setInputVal] = useState<string>("");
  const [predictions, setPredictions] = useState<any[] | null>(null);
  const [addressDetail, setAddressDetail] = useState<any[] | null>(null);
  const [addressLocation, setAddressLocation] = useState<{}>({
    lat: "",
    lng: "",
  });

  const [mode, setMode] = useState<string>("inputVal");
  return (
    <HostTypeContext.Provider
      value={{
        setFirstHandler,
        firstSelect,
        setInputVal,
        inputVal,
        setPredictions,
        predictions,
        setAddressDetail,
        addressDetail,
        setAddressLocation,
        addressLocation,
        setMode,
        mode,
      }}
    >
      {children}
    </HostTypeContext.Provider>
  );
};
export default HostTypeContextProvider;
