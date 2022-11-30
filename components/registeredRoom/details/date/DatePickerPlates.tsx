import * as React from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { StaticDateRangePicker } from "@mui/x-date-pickers-pro/StaticDateRangePicker";
import Box from "@mui/material/Box";

import { Button } from "@mui/material";
import { ko } from "date-fns/locale";
import { RoomDatePickData } from "../../../context/roomDatePickData";
import { useContext, useEffect, useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { RoomDetailDataContext } from "../../../context/roomDetailData";

export default function DatePickerPlates() {
  // console.log(value, "aaaaaa");

  const dateCtx = useContext(RoomDatePickData);
  const ctx = useContext(RoomDetailDataContext);
  const [blankDateArray, setBlankDateArray] = useState([]);

  useEffect(() => {
    // console.log(ctx?.itemData._id, "클라이언트단 룸 아이디");
    const findBlankDate = async () => {
      const response = await fetch("/api/buyerApi/findBlankRoomDateApi", {
        method: "POST",
        body: JSON.stringify({
          roomId: ctx?.itemData._id,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      // console.log(data, "클라이언트 응답받은거");
      setBlankDateArray(data.message);
    };
    findBlankDate();
  }, []);

  const arr = blankDateArray.map((one: any) => {
    if (one.paymentStatus) {
      return one.useDate;
    }
  });
  // console.log(arr);
  const checkDate = (num: Date) => {
    for (let key of arr) {
      // console.log(key, "sssssssssssssssss");
      if (num >= new Date(key.start) && num <= new Date(key.end)) {
        return true;
      }
    }
    //반복문 안에 false들어가면 조건에 부합하지않은 나머지값이 무시되버림.(?)
    return false;
  };
  // console.log(checkDate(new Date("2022-12-23")));

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
          disablePast={true}
          shouldDisableDate={(target) => {
            return checkDate(target);
          }}
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
