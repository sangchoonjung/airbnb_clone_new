import { hash } from "bcryptjs";
import { NextApiHandler } from "next";
import UserDB from "../../../lib/model/schema/userSchema";
import mongooseInit from "../../../lib/mongooseInit";
export type jsonType = {
  result: boolean;
  message: string;
};
const JoinApi: NextApiHandler = async (req, res) => {
  mongooseInit();
  const { method } = req;
  if (method === "POST") {
    const { name, email, birth, password } = req.body;
    const hashedPassword = await hash(password, 12);

    const response = await UserDB.create({
      name,
      email,
      birth,
      password: hashedPassword,
    });
    console.log(response, "...............");

    return res.status(200).json({ result: true, message: response });
  }
  return res.status(401).json({ result: false, message: "access Error" });
};
export default JoinApi;
