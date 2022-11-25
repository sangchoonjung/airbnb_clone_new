import { Box, Button, TextField, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useContext, useState } from "react";
import { RoomDatePickData } from "../../../context/roomDatePickData";
import { RoomDetailDataContext } from "../../../context/roomDetailData";
import CheckInOutBox from "../date/checkInOutBox";
import DatePickerPlates from "../date/DatePickerPlates";
import DatePickerRightModal from "../date/DatePickerRightModal";
import DetailBodyRightPopOver from "./detailBodyRightPopOver";

function DetailBodyRight() {
  const ctx = useContext(RoomDetailDataContext);
  const dateCtx = useContext(RoomDatePickData);
  if (!ctx?.itemData) {
    return <></>;
  }
  // console.log(ctx.itemData);
  const price = ctx.itemData.price;

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography>₩{price.toLocaleString()}/박</Typography>
        <CheckInOutBox />
        {dateCtx?.openCalender && <DatePickerRightModal />}

        {/* ................................................................................ */}
        <DetailBodyRightPopOver />
        <Button
          variant="contained"
          sx={{
            mt: 2,
            py: 2,
            bgcolor: "#FF385C",
            "&:hover": {
              backgroundColor: "#E31C5F",
            },
            "&:active": {
              backgroundColor: "brown",
              m: 1,
            },
          }}
        >
          예약하기
        </Button>
        <Typography>예약 확정 전에는 요금이 청구되지 않습니다.</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography>₩{price.toLocaleString()}X6박</Typography>
          <Typography>₩{(price * 6).toLocaleString()}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography>서비스 수수료</Typography>
          <Typography>₩{Math.round(price * 0.14).toLocaleString()}</Typography>
        </Box>
        <Divider />
        <Typography>총 합계</Typography>
      </Box>
    </>
  );
}

export default DetailBodyRight;
