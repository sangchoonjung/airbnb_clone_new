import { createContext } from "react";
import { ReactNode, useState } from "react";

export type Ctxs = {
  firstSelect?: string;
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
  setUserPickLocation: ({}) => void;
  userPickLocation: {};
  setAddressFullName: (s: string) => void;
  addressFullName: string;
  addessSubmitHandler: (lat: number, lng: number) => void;
};
export const HostTypeContext = createContext<Ctxs | null>(null);

const HostTypeContextProvider = ({ children }: { children: ReactNode }) => {
  const [firstSelect, setFirstSelect] = useState<string>("");
  const setFirstHandler = (type: string) => {
    setFirstSelect(type);
  };

  //Location component
  //인풋창 값
  const [inputVal, setInputVal] = useState<string>("");
  //인풋창 오토컴플릿 배열
  const [predictions, setPredictions] = useState<any[] | null>(null);
  //주소배열
  const [addressDetail, setAddressDetail] = useState<any[] | null>(null);
  //오토컴플릿에서 픽해서 넘어온 주소 풀네임
  const [addressFullName, setAddressFullName] = useState<string>("");
  //장소세부정보에서 나온 위도,경도값
  const [addressLocation, setAddressLocation] = useState<{}>({
    lat: "",
    lng: "",
  });
  //데이터에 추가할 최종 장소이름,위도,경도 값
  const [userPickLocation, setUserPickLocation] = useState<{}>({
    address: "",
    lat: "",
    lng: "",
  });
  const [mode, setMode] = useState<string>("inputVal");
  // console.log(predictions, "aaaaaaaaaa");
  const placeDetailHandler = async (place_id: string) => {
    const endPoint = `/google/placeID?place_id=${place_id}&key=AIzaSyA_myu9dLANhpR1FXQXZ_IVqXmRuUR_ahM&language=ko`;
    const response = await fetch(endPoint);
    const data = await response.json();
    setAddressFullName(data.result.formatted_address);
    const addressArray = data.result.address_components;
    const lat = data.result.geometry.location.lat;
    const lng = data.result.geometry.location.lng;
    setAddressDetail(addressArray);
    setAddressLocation({ lat: lat, lng: lng });
    setMode("locationDetail");
  };
  const addessSubmitHandler = (lat: number, lng: number) => {
    setUserPickLocation((current) => {
      return { ...current, lat: lat, lng: lng, address: addressFullName };
    });
  };
  // console.log(addressFullName, "풀네임");
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
        setUserPickLocation,
        userPickLocation,
        addessSubmitHandler,
      }}
    >
      {children}
    </HostTypeContext.Provider>
  );
};
export default HostTypeContextProvider;
