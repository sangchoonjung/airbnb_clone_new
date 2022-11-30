import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { BuyerDetailContext } from "../../../context/buyerDetail";
import { differenceInCalendarDays } from "date-fns";
import Divider from "@mui/material/Divider";

function ReservationPriceRight() {
  const buyerCtx = useContext(BuyerDetailContext);
  // console.log(buyerCtx?.detailData);
  const countday = differenceInCalendarDays(
    new Date(buyerCtx?.detailData?.useDate?.end as string),
    new Date(buyerCtx?.detailData?.useDate?.start as string)
  );
  //   console.log(countday);
  const PriceOne = buyerCtx?.detailData?.roomInformation?.price;
  const basePrice = buyerCtx?.detailData?.price?.base;
  const servicePrice = buyerCtx?.detailData.price?.service;
  const totalPrice = (basePrice as number) + (servicePrice as number);
  const totalDollar = (totalPrice / 1300).toFixed(2);

  return (
    <Box>
      <Typography>요금 세부정보</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          px: 2,
        }}
      >
        <Box>
          <Typography>
            ₩{PriceOne?.toLocaleString()}X{countday}박
          </Typography>
        </Box>
        <Box>
          <Typography>₩{basePrice?.toLocaleString()}</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          px: 2,
        }}
      >
        <Box>
          <Typography>서비스 수수료</Typography>
        </Box>
        <Box>
          <Typography>₩{servicePrice?.toLocaleString()}</Typography>
        </Box>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          px: 2,
        }}
      >
        <Box>
          <Typography>총 합계(KRW)</Typography>
          <Typography>총 합계(USD)</Typography>
        </Box>
        <Box>
          <Typography>₩{totalPrice.toLocaleString()}</Typography>
          <Typography>${totalDollar.toLocaleString()}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ReservationPriceRight;
