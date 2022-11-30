import { NextApiHandler } from "next";
import { getToken } from "next-auth/jwt";
import mongooseInit from "../../../lib/mongooseInit";
import BuyerDB from "../../../lib/model/schema/buyerSchema";

const CompleteBuyerApi: NextApiHandler = async (req, res) => {
  mongooseInit();
  const token = await getToken({ req });
  if (!token) {
    throw new Error("세션값이 없습니다.");
  }
  const { method } = req;
  const item = req.body;

  if (method === "POST") {
    const response = await BuyerDB.findByIdAndUpdate(
      item._id,
      { paymentStatus: true, payauth: item.payauth },
      {
        returnDocument: "after",
      }
    );
    return res.status(200).json({ result: true, message: response });
  }
  return res
    .status(401)
    .json({ result: false, message: "payment not complete" });
};
export default CompleteBuyerApi;
