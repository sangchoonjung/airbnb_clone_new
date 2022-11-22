import { NextApiHandler } from "next";
import mongooseInit from "../../../lib/mongooseInit";
import HostDB from "../../../lib/model/schema/hostSchema";

const ReadHostApi: NextApiHandler = async (rea, res) => {
  mongooseInit();
  const response = await HostDB.find({ publish: true });
  return res.status(200).json({ result: true, message: response });
};

export default ReadHostApi;
