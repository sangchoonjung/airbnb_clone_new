import formidable from "formidable";
import { NextApiHandler, NextConfig } from "next";
import { initializeApp } from "firebase/app";
import { ref, getStorage, getDownloadURL, uploadBytes } from "firebase/storage";
import fs from "fs";
import HostDB from "../../../lib/model/schema/hostSchema";

//multipart.form-data parser는 기본내장이 안되어 있어서 추가 설정해야함
//firmidable 라는 multipart parsing 라이브러리 활용
//넥스트 리퀘스트 환경 설정
export const config: NextConfig = {
  api: {
    bodyParser: false,
  },
};

const firebaseConfig = {
  apiKey: "AIzaSyA_myu9dLANhpR1FXQXZ_IVqXmRuUR_ahM",
  authDomain: "airbnb-367901.firebaseapp.com",
  projectId: "airbnb-367901",
  storageBucket: "airbnb-367901.appspot.com",
  messagingSenderId: "177736670407",
  appId: "1:177736670407:web:6f036dea248ede8d50f2e2",
  measurementId: "G-VJW27D6WM2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//============================================================================

const uploadHandler: NextApiHandler = async (req, res) => {
  console.log("uploadPhotos!!!!!!!!!!!!!!!");
  // console.log(req.body);
  const form = formidable({ multiples: true });

  const result: { itemId: string; photos: formidable.File[] } =
    await new Promise((resolve, rejsct) => {
      form.parse(req, (err, fields, files) => {
        resolve({
          itemId: fields.itemId as string,
          photos: files.photos as formidable.File[],
        });
      });
    });
  console.log(result);

  const storage = getStorage(app);
  const dirRef = ref(storage, "hosting/" + result.itemId);
  const photos: { extraUrl: string }[] = [];
  for (let one of result.photos) {
    const fileRef = ref(dirRef, one.newFilename);
    const file = fs.readFileSync(one.filepath);
    await uploadBytes(fileRef, file, {
      //타입지정
      contentType: one.mimetype!,
    });
    photos.push({ extraUrl: await getDownloadURL(fileRef) });
  }

  console.log(photos);

  const reaultItem = await HostDB.findByIdAndUpdate(
    result.itemId,
    { picture: photos },
    {
      returnDocument: "after",
    }
  );

  return res.status(200).json(reaultItem);
};
export default uploadHandler;
