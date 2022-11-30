import { Box, Button, TextField, Typography } from "@mui/material";
import ReservationHeaderRight from "./reservationHeaderRight";
import Divider from "@mui/material/Divider";
import ReservationPriceRight from "./reservationPriceRight";

function ReservationBodyRight() {
  return (
    <Box>
      <ReservationHeaderRight />
      <Divider sx={{ my: 2 }} />
      <Typography>에어커버를 통한 예약 보호</Typography>
      <Divider sx={{ my: 2 }} />
      <ReservationPriceRight />
    </Box>
  );
}

export default ReservationBodyRight;
