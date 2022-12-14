import formidable from "formidable";
import { NextApiHandler, NextConfig } from "next";
import { ref, getStorage, getDownloadURL, uploadBytes } from "firebase/storage";
import fs from "fs";
import HostDB from "../../../lib/model/schema/hostSchema";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//multipart.form-data parser는 기본내장이 안되어 있어서 추가 설정해야함
//firmidable 라는 multipart parsing 라이브러리 활용

//넥스트 리퀘스트 환경 설정
export const config: NextConfig = {
  api: {
    bodyParser: false,
  },
};

const firebaseConfig = {
  apiKey: "AIzaSyBjceuN6OF6AQ0A-CtxMmY0z-M4hVuHQZs",
  authDomain: "airbnb-7c727.firebaseapp.com",
  projectId: "airbnb-7c727",
  storageBucket: "airbnb-7c727.appspot.com",
  messagingSenderId: "134860388288",
  appId: "1:134860388288:web:3d5724c1b39f6a9c417a25",
  measurementId: "G-K85X3Q8VH5",
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
