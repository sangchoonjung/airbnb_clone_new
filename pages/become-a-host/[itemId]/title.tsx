import { Box, Button } from "@mui/material";

const title = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        style={{
          display: "flex",
          justifyContent: "end",
          margin: 30,
        }}
      >
        <Button
          variant="outlined"
          color="inherit"
          style={{
            backgroundColor: "#999999",
            position: "absolute",
            top: 10,
          }}
        >
          나가기
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          backgroundColor: "white",
          animation: "fadein 2s",
        }}
      ></Box>

      {/* 하단버튼 */}
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button variant="contained">뒤로</Button>
        <Button variant="contained">다음</Button>
      </Box>
    </Box>
  );
};
title.isInLayout = true;
export default title;
