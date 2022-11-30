import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { BuyerDetailContext } from "../../../context/buyerDetail";

function ReservationHeaderRight() {
  const buyerCtx = useContext(BuyerDetailContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box>
        <img
          src={buyerCtx?.detailData?.roomInformation?.picture[0]?.extraUrl}
          width="200px"
          height={"100%"}
          alt={"none"}
          style={{ objectFit: "contain" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography>{buyerCtx?.detailData?.roomInformation?.type}</Typography>
        <Typography sx={{ py: 2 }}>
          {buyerCtx?.detailData?.roomInformation?.title}
        </Typography>
      </Box>
    </Box>
  );
}

export default ReservationHeaderRight;
