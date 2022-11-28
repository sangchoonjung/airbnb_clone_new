import { Box, Button, TextField, Typography } from "@mui/material";
import ReservationHeader from "./reservationHeader";
import Divider from "@mui/material/Divider";
import ReservationPayMethod from "./reservationPayMethod";
import ReservationTotalOrPart from "./reservationTotalOrPart";

function ReservationBodyLeft() {
  return (
    <Box>
      <ReservationHeader />
      <Divider sx={{ my: 2 }} />
      <ReservationTotalOrPart />
      <Divider sx={{ my: 2 }} />
      <ReservationPayMethod />
      <Divider sx={{ my: 2 }} />
    </Box>
  );
}

export default ReservationBodyLeft;
