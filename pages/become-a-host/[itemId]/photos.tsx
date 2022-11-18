import { Box, Button } from "@mui/material";

import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useState, useRef, useContext } from "react";
import HostUploadPhotoContextProvider, {
  HostUploadPhotoContext,
} from "../../../components/context/hostUploadPhoto";
import EmptyPhotoBox from "../../../components/hostSelectType/photos/emptyPhotoBox";
import PreviewPhotoBox from "../../../components/hostSelectType/photos/previewPhotoBox";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firebaseApp } from "../../../lib/data/firebase-config";
import { v4 as uuidv4 } from "uuid";

const RealUploadPhotos = () => {
  const ctx = useContext(HostUploadPhotoContext);
  const router = useRouter();
  const prevStep = () => {
    router.back();
    // console.log("QQQ");
  };

  const nextStep = async () => {
    const { itemId } = router.query;
    //storage 작업지원
    const storage = getStorage(firebaseApp);
    //storage기준으로 업로드할 하위폴더,파일의 경로를 설정
    const dirRef = ref(storage, "hosting/" + itemId);
    const photoURI: string[] = [];
    for (let i = 0; i < ctx?.files.length; i++) {
      const fileRef = ref(dirRef, uuidv4());
      //파일을 파이어베이스에 업로드
      const rst = await uploadBytes(fileRef);
      // console.log(rst);
      //접근할수있는 URL을 가져옴.
      const url = await getDownloadURL(fileRef);
      // console.log(url);
      photoURI.push(url);
    }
    console.log(photoURI);

    // const response = await fetch("/api/hostApi/createHostApi", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     _id: itemId,
    //   }),
    //   headers: { "Content-type": "application/json" },
    // });
    // const data = await response.json();
    // console.log(data, "!!!!!!!!!!!!");
    // // console.log(data.message._id);
    // router.push("/become-a-host/" + itemId + "/photos");
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        style={{
          display: "flex",
          justifyContent: "end",
          margin: 30,
        }}
      >
        <Button
          variant="outlined"
          color="inherit"
          style={{
            backgroundColor: "#999999",
            position: "absolute",
            top: 10,
          }}
        >
          나가기
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          backgroundColor: "white",
          animation: "fadein 2s",
        }}
      >
        <Box
          sx={{
            my: "3rem",
            alignItems: "center",
            //   justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4">캐슬 사진 추가하기</Typography>
          <Typography>5장 이상의 사진을 선택하세요.</Typography>
        </Box>

        {ctx?.mode == "inputPicture" && <EmptyPhotoBox />}
        {ctx?.mode == "uploadingPicture" && <PreviewPhotoBox />}
      </Box>

      {/* 하단버튼 */}
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button variant="contained" onClick={prevStep}>
          뒤로
        </Button>
        <Button variant="contained" onClick={nextStep}>
          다음
        </Button>
      </Box>
    </Box>
  );
};

function UploadPhotos() {
  return (
    <HostUploadPhotoContextProvider>
      <RealUploadPhotos />
    </HostUploadPhotoContextProvider>
  );
}
UploadPhotos.isInLayout = true;
export default UploadPhotos;
