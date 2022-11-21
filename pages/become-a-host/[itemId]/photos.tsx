import { Box, Button } from "@mui/material";

import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useState, useRef, useContext } from "react";
import HostUploadPhotoContextProvider, {
  HostUploadPhotoContext,
} from "../../../components/context/hostUploadPhoto";
import HostSelectfooter from "../../../components/custom/hostSelectfooter";
import HostSelectHeader from "../../../components/custom/hostSelectHeader";
import EmptyPhotoBox from "../../../components/hostSelectType/photos/emptyPhotoBox";
import PreviewPhotoBox from "../../../components/hostSelectType/photos/previewPhotoBox";

const RealUploadPhotos = () => {
  const ctx = useContext(HostUploadPhotoContext);
  const router = useRouter();
  const prevStep = () => {
    router.back();
    // console.log("QQQ");
  };

  const nextStep = async () => {
    const { itemId } = router.query;
    //폼데이터객체를 만든다
    if (ctx?.files.length > 4) {
      const formData = new FormData();
      formData.append("itemId", itemId as string);
      ctx?.files.forEach((one) => {
        // console.log(typeof one);
        formData.append("photos", one);
      });

      const response = await fetch("/api/hostApi/uploadPhotos", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      alert(response.status);

      console.log(data, "파일업로드 요청처리");
      // console.log(data.message._id);
      router.push("/become-a-host/" + itemId + "/title");
    } else {
      alert("5장이상 업로드 하여주세요");
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <HostSelectHeader />

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
      <HostSelectfooter prevStep={prevStep} nextStep={nextStep} />
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
