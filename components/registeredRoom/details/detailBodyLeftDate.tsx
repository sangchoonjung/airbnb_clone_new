import * as React from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import {
  DateRangePicker,
  DateRange,
} from "@mui/x-date-pickers-pro/DateRangePicker";
import Box from "@mui/material/Box";
import { Dayjs } from "dayjs";
import { Button } from "@mui/material";

function getWeeksAfter(date: Dayjs | null, amount: number) {
  return date ? date.add(amount, "week") : undefined;
}

export default function DetailBodyLeftDate() {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        disablePast
        value={value}
        maxDate={getWeeksAfter(value[0], 4)}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
              달력 표기
            </Box>
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}
