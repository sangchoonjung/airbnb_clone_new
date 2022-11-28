import { Box, Button, TextField, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useContext, useEffect } from "react";
import { RoomDatePickData } from "../../../context/roomDatePickData";
import { RoomDetailDataContext } from "../../../context/roomDetailData";
import DetailBodyLeftDate from "../date/detailBodyLeftDate";
import DetailConvenience from "./detailConvenience";

function DetailBodyLeft() {
  const ctx = useContext(RoomDetailDataContext);
  const dateCtx = useContext(RoomDatePickData);
  // console.log(dateCtx?.DateData);

  if (!ctx?.itemData && dateCtx) {
    return <></>;
  }
  let leftDate;
  if (dateCtx?.DateData?.checkin) {
    leftDate = new Date(
      dateCtx?.DateData?.checkin - 1000 * 60 * 60 * 24 * 10
    ).toLocaleDateString();
  } else {
    leftDate = new Date().toLocaleDateString();
  }
  useEffect(() => {
    dateCtx?.setLeftDate(leftDate);
  }, [dateCtx?.DateData?.checkin]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
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
      <Box>{leftDate}전까지 무료로 취소하실수 있습니다.</Box>
      <Divider sx={{ my: 2 }} />
      <Box>
        <Typography>에어커버</Typography>
        <Typography>
          모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은
          경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이
          포함됩니다.
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
      {/* // <Divider sx={{ my: 2 }} /> */}
    </Box>
  );
}

export default DetailBodyLeft;
