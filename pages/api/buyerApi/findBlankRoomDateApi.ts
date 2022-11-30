import { NextApiHandler } from "next";
import { getToken } from "next-auth/jwt";
import mongooseInit from "../../../lib/mongooseInit";
import BuyerDB from "../../../lib/model/schema/buyerSchema";

const FindBlackRoomDateApi: NextApiHandler = async (req, res) => {
  mongooseInit();
  //   const token = await getToken({ req });
  //   if (!token) {
  //     throw new Error("세션값이 없습니다.");
  //   }
  const { method } = req;
  //   console.log(req.body);
  const { roomId } = req.body;
  console.log(roomId);
  if (method === "POST") {
    const response = await BuyerDB.find({ roomId: roomId });
    console.log(response);
    return res.status(200).json({ result: true, message: response });
  }
  return res.status(401).json({ result: false, message: "not found date" });
};

export default FindBlackRoomDateApi;
