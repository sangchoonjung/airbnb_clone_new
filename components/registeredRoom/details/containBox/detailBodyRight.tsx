import { Box, Button, TextField, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useContext, useState, useEffect } from "react";
import { RoomDatePickData } from "../../../context/roomDatePickData";
import { RoomDetailDataContext } from "../../../context/roomDetailData";
import CheckInOutBox from "../date/checkInOutBox";
import DatePickerPlates from "../date/DatePickerPlates";
import DatePickerRightModal from "../date/DatePickerRightModal";
import DetailBodyRightPopOver from "./detailBodyRightPopOver";
import { differenceInCalendarDays, format } from "date-fns";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

function DetailBodyRight() {
  const ctx = useContext(RoomDetailDataContext);
  const dateCtx = useContext(RoomDatePickData);
  if (!ctx?.itemData) {
    return <></>;
  }

  const price = ctx.itemData.price;

  const countDay = differenceInCalendarDays(
    dateCtx?.DateData?.checkout!,
    dateCtx?.DateData?.checkin!
  );
  const router = useRouter();
  const serviceFee = Math.round(price * 0.14);
  const baseTotalFee = price * countDay;
  const totalFee = baseTotalFee + serviceFee;
  useEffect(() => {
    dateCtx?.setPrice({
      base: baseTotalFee,
      service: serviceFee,
      total: totalFee,
    });
  }, [totalFee]);
  const { data, status } = useSession();
  const buyerId = data?.user?.email;
  let startDate = dateCtx?.DateData?.checkin;
  let endDate = dateCtx?.DateData?.checkout;
  if (startDate && endDate) {
    startDate = dateCtx?.DateData?.checkin!.toLocaleDateString() as any;
    endDate = dateCtx?.DateData?.checkout!.toLocaleDateString() as any;
  }
  // console.log(ctx.itemData, "aaaaaa");
  const goToNextStepHandler = async () => {
    // console.log(router.query);
    const { itemId } = router.query;
    const response = await fetch("/api/buyerApi/createBuyerApi", {
      method: "POST",
      body: JSON.stringify({
        buyerId: buyerId,
        useDate: { start: startDate, end: endDate },
        guest: dateCtx?.guestCount,
        leftDate: dateCtx?.leftDate,
        price: dateCtx?.price,
        roomId: itemId,
        roomInformation: ctx.itemData,
      }),
      headers: { "Content-type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
    const paymentId = data.message._id;

    router.push(`/book/stays/${paymentId}`);
  };
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography>
          ₩{price.toLocaleString()}/{countDay ? countDay : "0"}박
        </Typography>
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
          onClick={goToNextStepHandler}
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
          <Typography>
            ₩{price.toLocaleString()}X{countDay ? countDay : "0"}박
          </Typography>
          <Typography>
            ₩{countDay ? baseTotalFee.toLocaleString() : price.toLocaleString()}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography>서비스 수수료</Typography>
          <Typography>₩{serviceFee.toLocaleString()}</Typography>
        </Box>
        <Divider />
        <Typography>총 합계</Typography>
      </Box>
    </>
  );
}

export default DetailBodyRight;
