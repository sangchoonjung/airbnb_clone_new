import { Box, Button, TextField, Typography } from "@mui/material";
import ReservationBodyLeft from "./left/reservationBodyLeft";
import ReservationBodyRight from "./right/reservationBodyRight";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useContext, useEffect } from "react";
import { BuyerDetailContext } from "../../context/buyerDetail";
import LoadingSpinner from "../../custom/loadingSpinner";

function ReservationContain({ item }: { item: {} }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "start",
    color: "black",
  }));
  const buyerCtx = useContext(BuyerDetailContext);

  buyerCtx?.setDetailData(item);

  if (!buyerCtx?.detailData) {
    return <LoadingSpinner />;
  }
  //   console.log(buyerCtx.detailData);
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", p: 5 }}>
        예약 요청
      </Typography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={8} md={7}>
            <Item>
              <ReservationBodyLeft />
            </Item>
          </Grid>
          <Grid item xs={8} md={5}>
            <Item sx={{ position: "sticky", top: 0 }}>
              <ReservationBodyRight />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default ReservationContain;
