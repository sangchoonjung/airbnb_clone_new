import mongoose from "mongoose";
import BuyerType from "../interface/buyerType";

const buyerSchema = new mongoose.Schema<BuyerType>({
  buyerId: String,
  useDate: {
    start: String,
    end: String,
  },
  guest: {
    adult: Number,
    children: Number,
    baby: Number,
    animal: Number,
  },
  leftDate: String,
  price: {
    base: Number,
    service: Number,
    total: Number,
  },
  roomId: String,
  roomInformation: {},
  paymentStatus: Boolean,
  payauth: {},
});

export default (mongoose.models.BuyerDB as mongoose.Model<BuyerType>) ||
  mongoose.model<BuyerType>("BuyerDB", buyerSchema);
