import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { RoomDetailDataContext } from "../../context/roomDetailData";
import LoadingSpinner from "../../custom/loadingSpinner";
import DetailConvenienceModal from "./detailConvenienceModal";

function DetailConvenience() {
  const ctx = useContext(RoomDetailDataContext);

  if (!ctx?.itemData)
    return (
      <>
        <LoadingSpinner />
      </>
    );

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h5">숙소 편의시설</Typography>
      <Box>
        {ctx.itemData.convenience[0].basic.map((one: any) => {
          return <Typography key={one}>{one}</Typography>;
        })}
      </Box>
      <DetailConvenienceModal />
    </Box>
  );
}

export default DetailConvenience;
