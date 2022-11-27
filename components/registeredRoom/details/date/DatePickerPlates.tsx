import * as React from "react";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";

import { StaticDateRangePicker } from "@mui/x-date-pickers-pro/StaticDateRangePicker";
import { DateRange } from "@mui/x-date-pickers-pro/DateRangePicker";
import Box from "@mui/material/Box";

import { Button } from "@mui/material";
import { ko } from "date-fns/locale";
import { RoomDatePickData } from "../../../context/roomDatePickData";
import { useContext } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export default function DatePickerPlates() {
  // console.log(value, "aaaaaa");

  const dateCtx = useContext(RoomDatePickData);

  // console.log(dateCtx?.DateData, "데이타");
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ko}>
        <StaticDateRangePicker
          displayStaticWrapperAs="desktop"
          value={[dateCtx?.DateData?.checkin, dateCtx?.DateData?.checkout]}
          onChange={(newValue: Array<any>) => {
            dateCtx?.updateDate!(newValue[0], newValue[1]);
          }}
          renderInput={() => <></>}
        />
      </LocalizationProvider>
      <Box>
        <Button
          onClick={() => dateCtx?.updateDate!(null as null, null as null)}
        >
          날짜 지우기
        </Button>
      </Box>
    </Box>
  );
}
