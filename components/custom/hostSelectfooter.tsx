import { Box, Button } from "@mui/material";
type handler = {
  prevStep: () => void;
  nextStep: () => void;
};
function HostSelectfooter(props: handler) {
  return (
    <Box
      style={{
        position: "fixed",
        bottom: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // maxWidth: "100%",
        // backgroundColor: "yellow",
      }}
    >
      <Button variant="contained" onClick={props.prevStep}>
        뒤로
      </Button>

      <Button variant="contained" onClick={props.nextStep}>
        다음
      </Button>
    </Box>
  );
}

export default HostSelectfooter;
