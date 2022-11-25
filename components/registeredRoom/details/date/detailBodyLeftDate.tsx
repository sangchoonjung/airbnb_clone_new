import * as React from "react";

import {
  DateRangePicker,
  DateRange,
} from "@mui/x-date-pickers-pro/DateRangePicker";

import DatePickerPlates from "./DatePickerPlates";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function getWeeksAfter(date: AdapterDateFns | null, amount: number) {
  return date ? date.add(amount, "week") : undefined;
}

export default function DetailBodyLeftDate() {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

  return <DatePickerPlates />;
}
