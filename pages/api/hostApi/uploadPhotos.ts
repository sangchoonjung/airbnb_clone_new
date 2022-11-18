import formidable from "formidable";
import { NextApiHandler, NextConfig } from "next";
//multipart.form-data parser는 기본내장이 안되어 있어서 추가 설정해야함
//firmidable이랑 multipart parsing 라이브러리 활용
export const config: NextConfig = {
  api: {
    bodyParser: false,
  },
};

const uploadHandler: NextApiHandler = async (req, res) => {
  console.log("uploadPhotos!!!!!!!!!!!!!!!");
  // console.log(req.body);
  const form = formidable({ multiples: true });
  form.parse(req, (err, fields, files) => {
    if (err) {
      return console.log("ERROR!!!!!!!", err);
    }
    console.log(fields);
    console.log(files);
  });
  return res.status(200).json({});
};
export default uploadHandler;
