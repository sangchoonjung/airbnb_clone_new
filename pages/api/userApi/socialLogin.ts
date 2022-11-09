import { NextApiHandler } from "next";
import UserDB from "../../../lib/model/schema/userSchema";
import mongooseInit from "../../../lib/mongooseInit";

const SocialLoginApi: NextApiHandler = async (req, res) => {
  mongooseInit();

  const { method } = req;
  if (method === "POST") {
    const { providerAccountId, provider } = req.body;

    const response = await UserDB.findOne({ providerAccountId, provider });

    if (response !== null) {
      return res.status(200).json({ result: true, message: response });
    }
  }
  return res
    .status(401)
    .json({ result: false, message: "providerAccountId Error" });
};

export default SocialLoginApi;
