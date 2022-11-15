import { compare } from "bcryptjs";
import { NextApiHandler } from "next";
import UserDB from "../../../lib/model/schema/userSchema";
import mongooseInit from "../../../lib/mongooseInit";

const confirmPassApi: NextApiHandler = async (req, res) => {
  mongooseInit();

  const { method } = req;
  if (method === "POST") {
    const { email, password } = req.body;

    const response = await UserDB.findOne({ email: email });

    const passCheck = await compare(password, response!.password);
    if (!response || !passCheck) {
      return res.status(401).json({ result: false, message: "password Error" });
    }
    console.log(passCheck,"aaaaaaaaa")
    if (response && passCheck) {
      return res.status(200).json({ result: true, message: response });
    }
  }
  return res.status(401).json({ result: false, message: "access Error" });
};

export default confirmPassApi;
