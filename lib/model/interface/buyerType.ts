import mongoose from "mongoose";

type BuyerType = {
  buyerId?: string;
  useDate?: {
    start: string;
    end: string;
  };
  guest?: {
    adult: number;
    children: number;
    baby: number;
    animal: number;
  };
  leftDate?: string;
  price?: {
    base: number;
    service: number;
    total: number;
  };
  roomId?: string;
  roomInformation?: {
    price: number;
    picture: [{ extraUrl: string }];
    type: string;
    title: string;
  };
  paymentStatus?: boolean;
  payauth?: {};
  _id?: mongoose.ObjectId;
};

export default BuyerType;
