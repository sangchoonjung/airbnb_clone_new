import { Box, Button, TextField, Typography } from "@mui/material";
function ReservationHeader() {
  return (
    <Box>
      <Typography>예약 정보</Typography>
      <Box>
        <Typography>날짜</Typography>
      </Box>
      <Box>
        <Typography>게스트</Typography>
      </Box>
    </Box>
  );
}

export default ReservationHeader;
