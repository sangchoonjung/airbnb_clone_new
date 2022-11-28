import { Box, Paper, Typography, TextField, Grid } from "@mui/material";

import { useContext, useState } from "react";

import { format } from "date-fns";
import DatePickerPlates from "./DatePickerPlates";
import { RoomDatePickData } from "../../../context/roomDatePickData";

function DatePickerRightModal() {
  const dateCtx = useContext(RoomDatePickData);

  return (
    <Paper
      elevation={10}
      sx={{
        position: "absolute",
        top: "24px",
        right: "0px",
        padding: "25px 20px 20px 20px",
        zIndex: 10,
      }}
      onClick={(evt) => {
        evt.stopPropagation();
      }}
    >
      {/* 바깥영역 누를때 모달창 닫기 */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
        onClick={dateCtx!.closeModalhandler}
      ></Box>
      <Grid container>
        <Grid item md={6}>
          <Box>
            <Typography variant="h5">날짜 선택</Typography>
            <Typography>
              여행 날짜를 입력하여 정확한 요금을 확인하세요.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              color="info"
              size="medium"
              variant="filled"
              inputProps={{ style: { border: "1px solid #000000" } }}
              InputLabelProps={{
                shrink: true,
              }}
              label="체크인"
              value={
                dateCtx?.DateData!.checkin
                  ? format(dateCtx?.DateData.checkin, "yyyy-MM-dd")
                  : ""
              }
              placeholder={"YYYY-MM-DD"}
            />
            <TextField
              color="info"
              size="medium"
              variant="filled"
              inputProps={{ style: { border: "1px solid #000000" } }}
              InputLabelProps={{
                shrink: true,
              }}
              label="체크아웃"
              value={
                dateCtx?.DateData!.checkout
                  ? format(dateCtx?.DateData.checkout, "yyyy-MM-dd")
                  : ""
              }
            />
          </Box>
        </Grid>
      </Grid>

      <DatePickerPlates />
    </Paper>
  );
}

export default DatePickerRightModal;
