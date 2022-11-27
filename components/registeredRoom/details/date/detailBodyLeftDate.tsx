import * as React from "react";

import {
  DateRangePicker,
  DateRange,
} from "@mui/x-date-pickers-pro/DateRangePicker";

import DatePickerPlates from "./DatePickerPlates";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export default function DetailBodyLeftDate() {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

  return <DatePickerPlates />;
}
