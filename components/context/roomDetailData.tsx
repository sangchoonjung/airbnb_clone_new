import { createContext } from "react";
import { ReactNode, useState } from "react";

export type ctxs = {
  itemData: any;
  setItemData: (a: any) => void;
};
export const RoomDetailDataContext = createContext<ctxs | null>(null);

const RoomDetailDataContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [itemData, setItemData] = useState<any | null>(null);

  return (
    <RoomDetailDataContext.Provider
      value={{
        itemData,
        setItemData,
      }}
    >
      {children}
    </RoomDetailDataContext.Provider>
  );
};

export default RoomDetailDataContextProvider;
