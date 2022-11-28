import { Box, Button, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ReservationBodyLeft from "../../../../components/registeredRoom/reservationAndPay/left/reservationBodyLeft";

function PayRoom() {
  // 호스팅 아이디 / 게스트 아이디 / orderID/payerID/ 체크인/체크아웃/게스트수
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "start",
    color: "black",
  }));

  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h4">예약 요청</Typography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={8} md={7}>
            <Item>
              <ReservationBodyLeft />
            </Item>
          </Grid>
          <Grid item xs={8} md={5}>
            <Item sx={{ position: "sticky", top: 0 }}>aa</Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default PayRoom;
