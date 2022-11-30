import { Box, Button, TextField, Typography } from "@mui/material";
import ReservationHeader from "./reservationHeader";
import Divider from "@mui/material/Divider";
import ReservationPayMethod from "./reservationPayMethod";
import ReservationTotalOrPart from "./reservationTotalOrPart";
import { useContext, useEffect, useState } from "react";
import { BuyerDetailContext } from "../../../context/buyerDetail";
import LoadingSpinner from "../../../custom/loadingSpinner";
import ReservationSubmitButton from "./reservationSubmitButton";
function ReservationBodyLeft() {
  const [submitHandle, setSubmitHandle] = useState(false);
  return (
    <Box>
      <ReservationHeader />
      <Divider sx={{ my: 2 }} />
      <ReservationTotalOrPart />
      <Divider sx={{ my: 2 }} />
      <ReservationPayMethod setSubmitHandle={setSubmitHandle} />
      <Divider sx={{ my: 2 }} />
      <ReservationSubmitButton submitHandle={submitHandle} />
    </Box>
  );
}

export default ReservationBodyLeft;
