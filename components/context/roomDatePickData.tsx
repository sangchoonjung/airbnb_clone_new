import { createContext, ReactNode, useState } from "react";

type ctx = {
  DateData?: { checkin: Date | null; checkout: Date | null };
  updateDate?: (checkin: Date | null, checkout: Date | null) => void;
  setDateData?: (a: any, b: any) => void | undefined;
  openCalender?: boolean;
  openModalhandler?: (a: any) => void;
  closeModalhandler?: () => void | undefined;
  guestCount: {};
  setGuestCount: ({}) => void;
  leftDate: string;
  setLeftDate: (s: string) => {};
  price: {};
  setPrice: ({}) => void;
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
  const [guestCount, setGuestCount] = useState({
    adult: 1,
    children: 0,
    baby: 0,
    animal: 0,
  });
  const [leftDate, setLeftDate] = useState("");
  const [price, setPrice] = useState({
    base: 0,
    service: 0,
    total: 0,
  });

  return (
    <RoomDatePickData.Provider
      value={{
        DateData,
        updateDate,
        openCalender,
        openModalhandler,
        closeModalhandler,
        guestCount,
        setGuestCount,
        leftDate,
        setLeftDate,
        price,
        setPrice,
      }}
    >
      {children}
    </RoomDatePickData.Provider>
  );
};

export default RoomDatePickDataProvider;
