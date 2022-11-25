import { Box, Button, TextField, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useContext } from "react";
import { RoomDetailDataContext } from "../../../context/roomDetailData";
import DetailBodyLeftDate from "../date/detailBodyLeftDate";
import DetailConvenience from "./detailConvenience";

function DetailBodyLeft() {
  const ctx = useContext(RoomDetailDataContext);

  if (!ctx?.itemData) {
    return <></>;
  }

  return (
    <>
      <Box>
        <Typography variant="h5">
          {ctx.itemData.uniqueId} 님이 호스팅하는 {ctx.itemData.type}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
        }}
      >
        <Typography sx={{ mr: 1 }}>
          최대인원 {ctx.itemData.personnel.guest}명
        </Typography>
        <Typography sx={{ mr: 1 }}>
          침실 {ctx.itemData.personnel.bed}개
        </Typography>
        <Typography sx={{ mr: 1 }}>
          욕실 {ctx.itemData.personnel.bathRoom}개
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box>
        <Typography>상세 설명</Typography>
        <Typography>
          {ctx.itemData.description ? ctx.itemData.description : "없음"}
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <DetailConvenience />

      <Divider sx={{ my: 2 }} />
      <DetailBodyLeftDate />
      {/* <Divider sx={{ my: 2 }} /> */}
    </>
  );
}

export default DetailBodyLeft;
