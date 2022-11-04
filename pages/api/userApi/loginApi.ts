import { NextApiHandler } from "next";
import UserDB from "../../../lib/model/schema/userSchema";
import mongooseInit from "../../../lib/mongooseInit";

const LoginApi: NextApiHandler = async (req, res) => {
  mongooseInit();

  const { method } = req;
  if (method === "POST") {
    const { email } = req.body;
    console.log(email, "Email");

    const response = await UserDB.findOne({ email: email });

    if (response !== null) {
      return res.status(200).json({ result: true, message: "success" });
    }
  }
  return res.status(401).json({ result: false, message: "fail" });
};

export default LoginApi;
