import { Box, Button } from "@mui/material";
type handler = {
  prevStep?: () => void;
  nextStep?: () => void;
};
function HostSelectfooter(props: handler) {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        px: 2,
        pb: 2,
        backgroundColor: "#ffffff",
        zIndex: 1,
      }}
    >
      <Button
        variant="contained"
        onClick={props.prevStep}
        sx={{
          border: "solid 1px black",
          color: "white",
          bgcolor: "black",
          "&:hover": {
            backgroundColor: "#999999",
          },
          p: 2,
        }}
      >
        뒤로
      </Button>

      <Button
        variant="contained"
        onClick={props.nextStep}
        sx={{
          border: "solid 1px black",
          color: "white",
          bgcolor: "black",
          "&:hover": {
            backgroundColor: "#999999",
          },
          p: 2,
        }}
      >
        다음
      </Button>
    </Box>
  );
}

export default HostSelectfooter;
