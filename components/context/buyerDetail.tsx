import { useContext, createContext, ReactNode, useState } from "react";
import BuyerType from "../../lib/model/interface/buyerType";

export type ctxs = {
  detailData: BuyerType;
  setDetailData: ({}: BuyerType) => void;
};

export const BuyerDetailContext = createContext<ctxs | null>(null);

const BuyerDetailContextProvider = ({ children }: { children: ReactNode }) => {
  const [detailData, setDetailData] = useState<BuyerType>({});

  return (
    <BuyerDetailContext.Provider value={{ detailData, setDetailData }}>
      {children}
    </BuyerDetailContext.Provider>
  );
};

export default BuyerDetailContextProvider;
