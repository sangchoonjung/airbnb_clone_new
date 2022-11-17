import { Box, Button } from "@mui/material";

import Typography from "@mui/material/Typography";
import { useState, useRef, useContext } from "react";
import HostUploadPhotoContextProvider, {
  HostUploadPhotoContext,
} from "../../../components/context/hostUploadPhoto";
import EmptyPhotoBox from "../../../components/hostSelectType/photos/emptyPhotoBox";
import PreviewPhotoBox from "../../../components/hostSelectType/photos/previewPhotoBox";

const RealUploadPhotos = () => {
  const ctx = useContext(HostUploadPhotoContext);

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
          justifyContent: "end",
          alignItems: "end",
          position: "absolute",
          bottom: 0,

          //   flexDirection: "column",
        }}
      >
        <Button variant="contained">뒤로</Button>
        <Button variant="contained">다음</Button>
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
