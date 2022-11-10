import mongoose from "mongoose";
import { NextApiHandler } from "next";
import mongooseInit from "../../../lib/mongooseInit";
import HostDB from "../../../lib/model/schema/hostSchema";
import { getToken } from "next-auth/jwt";
const CreateHostApi: NextApiHandler = async (req, res) => {
  mongooseInit();
  const token = await getToken({ req });
  if (!token) {
    throw new Error("세션값이 없습니다.");
  }

  const { method } = req;
  const item = req.body;
  //유니크아이디 있을때 바로 생성
  if (method === "POST") {
    if (!item._id) {
      const response = await HostDB.create({
        group: item.group,
        uniqueId: token.email,
      });
      return res.status(200).json({ result: true, message: response });
      //유니크 아이디가 존재하면 업데이트
    } else {
      const response = await HostDB.findByIdAndUpdate(item._id, item, {
        returnDocument: "after",
      });
      return res.status(200).json({ result: true, message: response });
    }
  }
  return res.status(401).json({ result: false, message: "access Error" });
};
export default CreateHostApi;
