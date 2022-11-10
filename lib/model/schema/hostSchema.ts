import mongoose from "mongoose";
import HostType from "../interface/hostType";

const hostSchema = new mongoose.Schema<HostType>({
  uniqueId: String,
  group: String,
  type: String,
  detail: String,
  location: String,
  personnel: {
    guest: Number,
    bed: Number,
    bedRoom: Number,
    bathRoom: Number,
    bathRoomPerOne: Boolean,
  },
  convenience: Array,
  picture: Array,
});

export default (mongoose.models.HostDB as mongoose.Model<HostType>) ||
  mongoose.model<HostType>("HostDB", hostSchema);
