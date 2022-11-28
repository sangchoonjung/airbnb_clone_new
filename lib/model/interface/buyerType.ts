type BuyerType = {
  buyerId: string;
  useDate: {
    start: string;
    end: string;
  };
  quest: {
    adult: number;
    children: number;
    baby: number;
    animal: number;
  };
  leftDate: string;
  price: {
    base: number;
    service: number;
    total: number;
  };
  roomId: string;
};

export default BuyerType;
