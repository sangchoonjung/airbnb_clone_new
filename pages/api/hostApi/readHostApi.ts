import { NextApiHandler } from "next";
import mongooseInit from "../../../lib/mongooseInit";
import HostDB from "../../../lib/model/schema/hostSchema";

const ReadHostApi: NextApiHandler = async (req, res) => {
  mongooseInit();
  const item = req.body;
  let response;
  if (req.method === "POST") {
    if (item.tag == "신규" || item.tag == null) {
      response = await HostDB.find({ publish: true });
      return res.status(200).json({ result: true, message: response });
    } else {
      response = await HostDB.find({ publish: true, group: item.tag });
      return res.status(200).json({ result: true, message: response });
    }
  }
  return res.status(401).json({ result: false, message: response });
};

export default ReadHostApi;
