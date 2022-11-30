import { NextApiHandler } from "next";
import { getToken } from "next-auth/jwt";
import mongooseInit from "../../../lib/mongooseInit";
import BuyerDB from "../../../lib/model/schema/buyerSchema";

const CreateBuyerApi: NextApiHandler = async (req, res) => {
  mongooseInit();
  const token = await getToken({ req });
  if (!token) {
    throw new Error("세션값이 없습니다.");
  }
  const { method } = req;
  const item = req.body;
  if (method === "POST") {
    const response = await BuyerDB.create({
      buyerId: item.buyerId,
      useDate: item.useDate,
      guest: item.guest,
      leftDate: item.leftDate,
      price: item.price,
      roomId: item.roomId,
      roomInformation: item.roomInformation,
    });
    return res.status(200).json({ result: true, message: response });
  }
  return res
    .status(401)
    .json({ result: false, message: "create hosting Error" });
};
export default CreateBuyerApi;
