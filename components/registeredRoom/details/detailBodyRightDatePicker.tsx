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

export default function DetailBodyRightDatePicker() {
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
              <Button
                sx={{
                  flex: 1,
                  m: 0,
                  p: 0,
                }}
              >
                <TextField {...startProps} label="체크인" color="success" />
              </Button>
              <Button sx={{ flex: 1, m: 0, p: 0 }}>
                <TextField {...endProps} label="체크아웃" color="success" />
              </Button>
            </Box>
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}
