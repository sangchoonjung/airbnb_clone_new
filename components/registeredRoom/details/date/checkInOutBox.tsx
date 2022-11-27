import { Box, Button, TextField, Typography } from "@mui/material";
import { format } from "date-fns";
import { useContext } from "react";
import { RoomDatePickData } from "../../../context/roomDatePickData";

function CheckInOutBox() {
  const dateCtx = useContext(RoomDatePickData);
  // console.log(
  //   dateCtx?.DateData?.checkin,
  //   "체크인",
  //   typeof dateCtx?.DateData?.checkin
  // );
  // console.log(
  //   dateCtx?.DateData?.checkout,
  //   "체크아웃",
  //   typeof dateCtx?.DateData?.checkout
  // );

  return (
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
        onClick={dateCtx?.openModalhandler}
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
        placeholder={"YYYY-MM-DD"}
        onClick={dateCtx?.openModalhandler}
      />
    </Box>
  );
}

export default CheckInOutBox;
