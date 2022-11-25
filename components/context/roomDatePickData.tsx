import { createContext, ReactNode, useState } from "react";

type ctx = {
  DateData?: { checkin: Date | null; checkout: Date | null };
  updateDate?: (checkin: Date | null, checkout: Date | null) => void;
  setDateData?: (a: any) => void;
  openCalender?: boolean;
  openModalhandler?: (a: any) => void;
  closeModalhandler?: (a: any) => void;
};
export const RoomDatePickData = createContext<ctx | null>(null);

const RoomDatePickDataProvider = ({ children }: { children: ReactNode }) => {
  const [DateData, setDateData] = useState({
    checkin: null,
    checkout: null,
  });
  const [openCalender, setOpenCalender] = useState(false);

  const openModalhandler = () => {
    setOpenCalender(true);
  };
  const closeModalhandler = () => {
    setOpenCalender(false);
  };

  const updateDate = (checkin: any, checkout: any) => {
    setDateData({ checkin: checkin, checkout: checkout });
  };

  return (
    <RoomDatePickData.Provider
      value={{
        DateData,
        updateDate,
        openCalender,
        openModalhandler,
        closeModalhandler,
      }}
    >
      {children}
    </RoomDatePickData.Provider>
  );
};

export default RoomDatePickDataProvider;
