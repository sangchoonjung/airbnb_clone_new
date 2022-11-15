import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { HostTypeContext } from "../context/hostType";

function LocationCheck() {
  const ctx = useContext(HostTypeContext);

  return (
    <>
      로케이션 체크컨포넌트
      <Box>
        <Button
          variant="contained"
          onClick={() => {
            ctx?.setMode("locationDetail");
          }}
        >
          뒤로
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            ctx?.setMode("checkLocation");
          }}
        >
          확인
        </Button>
      </Box>
    </>
  );
}

export default LocationCheck;
