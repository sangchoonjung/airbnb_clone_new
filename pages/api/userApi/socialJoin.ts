import { hash } from "bcryptjs";
import { NextApiHandler } from "next";
import UserDB from "../../../lib/model/schema/userSchema";
import mongooseInit from "../../../lib/mongooseInit";
export type jsonType = {
  result: boolean;
  message: string;
};
const SocialJoinApi: NextApiHandler = async (req, res) => {
  mongooseInit();
  const { method } = req;
  if (method === "POST") {
    const { name, birth, email, provider, providerAccountId } = req.body;

    const response = await UserDB.create({
      name,
      email,
      birth,
      provider,
      providerAccountId,
    });
    // console.log(response, "...............");

    return res.status(200).json({ result: true, message: response });
  }
  return res.status(401).json({ result: false, message: "access Error" });
};
export default SocialJoinApi;
