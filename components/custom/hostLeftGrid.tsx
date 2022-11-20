import { Box, CssBaseline, Grid } from "@mui/material";
type text = {
  showText: string;
};
function HostLeftGrid(props: text) {
  return (
    <>
      <CssBaseline />
      {/* 왼쪽 */}
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        style={{
          backgroundImage:
            "linear-gradient(0deg,rgba(67,34,170,1)0%,rgba(141,33,156,1)35%,rgba(201,37,120,1)100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          style={{
            marginLeft: 50,
            color: "white",
            fontSize: 50,
            fontWeight: "bold",
          }}
        >
          {props.showText}
        </Box>
      </Grid>
    </>
  );
}

export default HostLeftGrid;
