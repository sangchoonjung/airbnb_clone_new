import { Box, Button, TextField, Typography } from "@mui/material";
import { FormEventHandler, useRef, useContext } from "react";
import { createTextSpan } from "typescript";
import { HostTypeContext } from "../context/hostType";
type con = {
  addressDetail: [];
  addressLocation: {};
};
function LocationDetail() {
  const ctx = useContext(HostTypeContext);
  const backStep = () => {
    ctx?.setMode("inputVal");
  };
  const GoNextStep = () => {
    ctx?.setMode("checkLocation");
  };
  const ad = useRef();
  return (
    <Box
      style={{
        top: 100,
        position: "absolute",
        left: 50,
      }}
    >
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          backgroundColor: "white",
        }}
      >
        <form>
          <TextField
            fullWidth
            label="주/도"
            hiddenLabel
            type="text"
            value={ctx?.addressDetail[3]?.long_name}
            style={{ marginBottom: 10 }}
          />
          <TextField
            fullWidth
            label="도시"
            type="text"
            value={ctx?.addressDetail[2]?.long_name}
            style={{ marginBottom: 10 }}
          />
          <TextField
            fullWidth
            label="도로명"
            type="text"
            value={ctx?.addressDetail[1]?.long_name}
            style={{ marginBottom: 10 }}
          />
          <TextField
            fullWidth
            label="아파트이름,동호수"
            type="text"
            value={ctx?.addressDetail[0]?.long_name}
            style={{ marginBottom: 10 }}
          />
          <TextField
            fullWidth
            label="우편번호"
            type="text"
            value={ctx?.addressDetail[5]?.long_name}
            style={{ marginBottom: 10 }}
          />
          <TextField
            fullWidth
            label="국가/지역"
            type="text"
            value={ctx?.addressDetail[4]?.long_name}
            style={{ marginBottom: 10 }}
          />
          <Button
            variant="contained"
            disableElevation
            sx={{
              width: 500,
              maxWidth: "100%",
              backgroundColor: "#E61E4D",
              marginTop: 2,
              padding: 1.5,
              borderRadius: 2,
            }}
            type="submit"
            onClick={GoNextStep}
          >
            계속
          </Button>
        </form>
      </Box>
      {/* 하단버튼 */}
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="contained" onClick={backStep}>
          뒤로
        </Button>
      </Box>
    </Box>
  );
}

export default LocationDetail;
