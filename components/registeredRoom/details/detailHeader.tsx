import { Box, Button, TextField, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useContext } from "react";
import { RoomDetailDataContext } from "../../context/roomDetailData";
import LoadingSpinner from "../../custom/loadingSpinner";

function DetailHeader() {
  const ctx = useContext(RoomDetailDataContext);

  if (!ctx?.itemData) {
    return <></>;
  }

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", my: 3 }}>
        <Typography variant="h4">{ctx.itemData.title}</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box>5.0 후기 수퍼 호스트 위치</Box>
          <Box>공유하기 / 저장</Box>
        </Box>
      </Box>
      <Divider sx={{ my: 2 }} />
    </>
  );
}

export default DetailHeader;
