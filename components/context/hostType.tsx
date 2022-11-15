import { createContext } from "react";
import { ReactNode, useState } from "react";

export type Ctxs = {
  firstSelect?: string | null;
  setFirstHandler?: (type: string) => void;
  setInputVal: (s: string) => void;
  inputVal: string | null;
  setPredictions: ([]) => void;
  predictions: [];
  setAddressDetail: () => void;
  addressDetail: [];
  setAddressLocation: () => void;
  addressLocation: {};
  setMode: (s: string) => void;
  mode: string;
  placeDetailHandler: (place_id: string) => void;
};
export const HostTypeContext = createContext<Ctxs | null>(null);

const HostTypeContextProvider = ({ children }: { children: ReactNode }) => {
  const [firstSelect, setFirstSelect] = useState<string | null>(null);
  const setFirstHandler = (type: string) => {
    setFirstSelect(type);
  };

  //Location component
  const [inputVal, setInputVal] = useState<string>("");
  const [predictions, setPredictions] = useState<any[] | null>(null);
  const [addressDetail, setAddressDetail] = useState<any[] | null>(null);
  const [addressLocation, setAddressLocation] = useState<{}>({
    lat: "",
    lng: "",
  });
  const [mode, setMode] = useState<string>("inputVal");

  const placeDetailHandler = async (place_id: string) => {
    const endPoint = `/google/placeID?place_id=${place_id}&key=AIzaSyA_myu9dLANhpR1FXQXZ_IVqXmRuUR_ahM&language=ko`;
    const response = await fetch(endPoint);
    const data = await response.json();
    const addressArray = data.result.address_components;
    const lat = data.result.geometry.location.lat;
    const lng = data.result.geometry.location.lng;
    setAddressDetail(addressArray);
    setAddressLocation({ lat: lat, lng: lng });
    setMode("locationDetail");
  };

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
        placeDetailHandler,
      }}
    >
      {children}
    </HostTypeContext.Provider>
  );
};
export default HostTypeContextProvider;
