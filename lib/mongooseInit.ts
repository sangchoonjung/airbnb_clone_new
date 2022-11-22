import mongoose from "mongoose";

export default function mongooseInit() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("not connected to MONGO_DB, Check .env.local");
  }

  //디비연결 1번만 실행하기 위함.

  console.log("디비연결 완료");
  mongoose.connect(uri, {
    dbName: "nextjs_typescript_AirbnbClone",
  });
}
