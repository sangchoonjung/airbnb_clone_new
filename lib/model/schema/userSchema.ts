import mongoose from "mongoose";
import UserType from "../interface/userType";

const userSchema = new mongoose.Schema<UserType>({
  name: String,
  birth: String,
  email: String,
  password: String,
  marketingAllow: Date,
  accountAuth: Date,
  provider: String,
  providerAccountId: String,
});
// next js 특성문제임
export default (mongoose.models.UserDB as mongoose.Model<UserType>) ||
  mongoose.model<UserType>("UserDB", userSchema);
