import { NextApiHandler } from "next";
import { getToken } from "next-auth/jwt";
import mongooseInit from "../../../lib/mongooseInit";
import BuyerDB from "../../../lib/model/schema/buyerSchema";

const FindbuyerApi: NextApiHandler = async (req, res) => {
  mongooseInit();
  //   const token = await getToken({ req });
  //   if (!token) {
  //     throw new Error("세션값이 없습니다.");
  //   }
  const { method } = req;
  const item = req.body;

  if (method === "POST") {
    console.log("item ==== ", item);
    const response = await BuyerDB.find({
      roomId: item.roomId,
      "useDate.start": { $lte: item.checkout },
      "useDate.end": { $gte: item.checkin },
    });
    // console.log(response, "확인요망");
    console.log(item._id);
    response.forEach((one) => {
      console.log(one._id);
      if (one._id == item._id && response.length == 1) {
        return res.status(200).json({ result: true, message: one });
      }

      // console.log(
      //   one.useDate?.start,
      //   one.useDate?.end,
      //   "===>",
      //   one.useDate?.start! <= item.checkout,
      //   one.useDate?.end! >= item.checkin
      // );
    });
  }
  return res.status(401).json({ result: false, message: "already Reserved" });
};
export default FindbuyerApi;
