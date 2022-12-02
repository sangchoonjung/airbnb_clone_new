import { createContext, ReactNode, useState } from "react";

type datas = {
  roomData: [] | null;
  setRoomData: Function;
};
export const homeRenderPerNavContext = createContext<datas | null>(null);

const homeRenderPerNavContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [roomData, setRoomData] = useState<[] | null>(null);

  return (
    <homeRenderPerNavContext.Provider
      value={{
        roomData,
        setRoomData,
      }}
    >
      {children}
    </homeRenderPerNavContext.Provider>
  );
};
