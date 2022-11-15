import { Box, Button, TextField, Typography } from "@mui/material";
import { FormEventHandler, useRef } from "react";
type con = {
  addressDetail: [];
  addressLocation: {};
};
function LocationDetail(props: con) {
  console.log(props.addressDetail);
  console.log(props.addressLocation);
  const ad = useRef();
  return (
    <>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <form>
          <TextField
            fullWidth
            label="주/도"
            hiddenLabel
            type="text"
            value={props.addressDetail[3].long_name}
            style={{ marginBottom: 10 }}
          />
          <TextField
            fullWidth
            label="도시"
            type="text"
            value={props.addressDetail[2].long_name}
            style={{ marginBottom: 10 }}
          />
          <TextField
            fullWidth
            label="도로명"
            type="text"
            value={props.addressDetail[1].long_name}
            style={{ marginBottom: 10 }}
          />
          <TextField
            fullWidth
            label="아파트이름,동호수"
            type="text"
            value={props.addressDetail[0].long_name}
            style={{ marginBottom: 10 }}
          />
          <TextField
            fullWidth
            label="우편번호"
            type="text"
            value={props.addressDetail[5].long_name}
            style={{ marginBottom: 10 }}
          />
          <TextField
            fullWidth
            label="국가/지역"
            type="text"
            value={props.addressDetail[4].long_name}
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
          >
            계속
          </Button>
        </form>
      </Box>
    </>
  );
}

export default LocationDetail;
