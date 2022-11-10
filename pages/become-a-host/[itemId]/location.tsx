import { useRouter } from "next/router";
import { Box, Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ThirdStepItem from "../../../components/hostSelectType/thirdStepItem";
import { useContext, useState } from "react";

function Location() {
  const router = useRouter();
  const { itemId } = router.query;
  //   const [selectPrivacy, setSelectPrivacy] = useState<string | null>(null);
  const prevStep = () => {
    router.back();
  };

  const nextStep = async () => {
    const response = await fetch("/api/hostApi/createHostApi", {
      method: "POST",
      body: JSON.stringify({ _id: itemId }),
      headers: { "Content-type": "application/json" },
    });
    const data = await response.json();
    console.log(data, "!!!!!!!!!!!!");
    // console.log(data.message._id);
    router.push("/become-a-host/" + itemId + "/location");
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
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
          숙소위치는 어디인가요?
        </Box>
      </Grid>
      {/* 오른쪽 */}
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{ display: "flex", flexDirection: "column" }}
      >
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
            style={{ backgroundColor: "#999999" }}
          >
            나가기
          </Button>
        </Box>
        <Box
          sx={{
            my: 5,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        ></Box>
        {/* 하단버튼 */}
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="contained" onClick={prevStep}>
            뒤로
          </Button>
          <Button variant="contained">다음</Button>
        </Box>
      </Grid>
    </Grid>
  );
}
Location.isInLayout = true;
export default Location;
