import { Box, Button, TextField, Typography } from "@mui/material";
import { BuyerDetailContext } from "../../../context/buyerDetail";
import { useContext, useEffect } from "react";
import LoadingSpinner from "../../../custom/loadingSpinner";

function ReservationHeader() {
  const buyerCtx = useContext(BuyerDetailContext);
  // console.log(buyerCtx!.detailData);
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
        예약 정보
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Typography sx={{ fontWeight: "bold" }}>날짜</Typography>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography>{buyerCtx?.detailData.useDate?.start} ~ </Typography>
          <Typography>{buyerCtx?.detailData?.useDate?.end}</Typography>
        </Box>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography sx={{ fontWeight: "bold" }}>게스트</Typography>
        <Typography>어른 {buyerCtx?.detailData?.guest?.adult}명</Typography>
      </Box>
    </Box>
  );
}

export default ReservationHeader;
